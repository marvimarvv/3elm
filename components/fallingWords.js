import React, { useEffect, useRef, useState } from "react";

import Matter from "matter-js";
import { useTranslation } from "next-i18next";

export default function FallingWords() {
  const { t } = useTranslation();

  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const wordRef = useRef(null);

  // State for responsive behavior
  const [constraints, setConstraints] = useState();
  const [scene, setScene] = useState();

  // State for applying gravity when in view
  const [isInView, setIsInView] = useState(false);
  // State for preventing observer from triggering multiple times
  const [hasObserverTriggered, setHasObserverTriggered] = useState(false);

  // Handle resizing of the canvas for responsiveness
  const handleResize = () => {
    setConstraints(boxRef.current?.getBoundingClientRect());
  };

  useEffect(() => {
    if (!hasObserverTriggered) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setHasObserverTriggered(true); // Mark as triggered
            observer.disconnect(); // Disconnect the observer
          }
        },
        { threshold: 0.3 } // Adjust the threshold as needed
      );

      observer.observe(boxRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [hasObserverTriggered]);

  useEffect(() => {
    if (isInView) {
      let Engine = Matter.Engine;
      let Events = Matter.Events;
      let Render = Matter.Render;
      let World = Matter.World;
      let Bodies = Matter.Bodies;
      let Body = Matter.Body;
      const Runner = Matter.Runner;

      // Set explicit width and height for the canvas element
      const canvas = canvasRef.current;
      canvas.width = boxRef.current.clientWidth;
      canvas.height = boxRef.current.clientHeight;

      const engine = Engine.create({
        gravity: {
          x: 0,
          y: 0.5,
          scale: 0.001,
        },
      });

      const render = Render.create({
        element: boxRef.current,
        engine: engine,
        canvas: canvasRef.current,
        options: {
          background: "transparent",
          wireframes: false,
        },
      });

      // Define borders of canvas
      const params = {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          density: 1,
          friction: 0,
        },
      };
      const floor = Bodies.rectangle(0, 0, 0, 50, params);
      const wall1 = Bodies.rectangle(
        0,
        canvas.height / 2,
        50,
        canvas.height,
        params
      );
      const wall2 = Bodies.rectangle(
        canvas.width,
        canvas.height / 2,
        50,
        canvas.height,
        params
      );
      const top = Bodies.rectangle(
        canvas.width / 2,
        0,
        canvas.width,
        50,
        params
      );

      let randomNumberInRange;

      // Prevent words from spawning outside of the canvas
      if (window.innerWidth <= 768) {
        randomNumberInRange = Math.random() * (0.7 - 0.3) + 0.3;
      } else if (window.innerWidth > 768) {
        randomNumberInRange = Math.random() * (0.8 - 0.2) + 0.5;
      }

      const wordElements = wordRef.current.querySelectorAll(".word");
      const wordBodies = [...wordElements].map((elemRef) => {
        const width = elemRef.offsetWidth;
        const height = elemRef.offsetHeight;

        const initialX = randomNumberInRange * canvas.width - width; // Random x within canvas bounds

        return {
          body: Matter.Bodies.rectangle(
            initialX,
            canvas.height / 2,
            width,
            height,
            {
              render: {
                fillStyle: "transparent",
                density: 1,
                friction: 0.5,
              },
            }
          ),
          elem: elemRef,
          render() {
            const { x, y } = this.body.position;
            this.elem.style.top = `${y - 20}px`;
            this.elem.style.left = `${x - width / 2}px`;
            this.elem.style.transform = `rotate(${this.body.angle}rad)`;
          },
        };
      });

      // Add the mouse to the canvas element -> tell MatterJS to take this canvas and detect mouse events in it
      const mouse = Matter.Mouse.create(render.canvas);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 1,
          render: {
            visible: false,
          },
        },
      });
      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      World.add(engine.world, [
        floor,
        top,
        wall1,
        wall2,
        ...wordBodies.map((box) => box.body),
        mouseConstraint,
      ]);
      render.mouse = mouse;
      Runner.run(engine);
      Render.run(render);

      // add event listener
      canvas.addEventListener("mouseleave", () => {
        // fire mouseup event to let go of the dragged item
        mouseConstraint.mouse.mouseup(event);
      });

      (function rerender() {
        wordBodies.forEach((element) => {
          element.render();

          const limitMaxSpeed = () => {
            let maxSpeed = 1;
            if (element.body.velocity.x > maxSpeed) {
              Body.setVelocity(element.body, {
                x: maxSpeed,
                y: element.body.velocity.y,
              });
            }

            if (element.body.velocity.x < -maxSpeed) {
              Body.setVelocity(element.body, {
                x: -maxSpeed,
                y: element.body.velocity.y,
              });
            }

            if (element.body.velocity.y > maxSpeed) {
              Body.setVelocity(element.body, {
                x: element.body.velocity.x,
                y: maxSpeed,
              });
            }

            if (element.body.velocity.y < -maxSpeed) {
              Body.setVelocity(element.body, {
                x: -element.body.velocity.x,
                y: -maxSpeed,
              });
            }
          };
          Events.on(engine, "beforeUpdate", limitMaxSpeed);
        });

        Matter.Engine.update(engine);
        requestAnimationFrame(rerender);
      })();

      setConstraints(boxRef?.current?.getBoundingClientRect());
      setScene(render);

      window.addEventListener("resize", handleResize);
    }
  }, [isInView]);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (constraints && isInView) {
      let { width, height } = constraints;

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;

      // Dynamically update floor
      const floor = scene.engine.world.bodies[0];

      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + 50 / 2,
      });

      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + 50 },
        { x: 0, y: height + 50 },
      ]);

      // Dynamically update top
      const top = scene.engine.world.bodies[1];

      Matter.Body.setPosition(top, {
        x: width / 2,
        y: 0,
      });

      Matter.Body.setVertices(top, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + 50 },
        { x: 0, y: height + 50 },
      ]);

      // Dynamically update right wall
      const wall2 = scene.engine.world.bodies[3];

      Matter.Body.setPosition(wall2, {
        x: width,
        y: height / 2,
      });

      Matter.Body.setVertices(wall2, [
        { x: width + 50, y: 0 },
        { x: width - 50, y: 0 },
        { x: width - 50, y: height },
        { x: width, y: height },
      ]);
    }
  }, [scene, constraints, isInView]);

  return (
    <div className="relative -mt-32 mb-40 overflow-hidden font-bold sm:mt-0">
      <div ref={wordRef}>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-cyan transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 1")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-green transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 2")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-brightorange transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 3")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 4")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-green transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 5")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-cyan transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 2 point 1")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-brightorange transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 2 point 2")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 2 point 3")}
        </span>
        <span
          className={
            isInView
              ? "word absolute max-w-xs cursor-grab select-none text-fluid-m text-cyan transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 2 point 5")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-cyan transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 1")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-green transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 2")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-brightorange transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 3")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 4")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-green transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 1 point 5")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-cyan transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 2 point 1")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m text-brightorange transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 2 point 2")}
        </span>
        <span
          className={
            isInView
              ? "word absolute cursor-grab select-none text-fluid-m transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 2 point 3")}
        </span>
        <span
          className={
            isInView
              ? "word absolute max-w-xs cursor-grab select-none text-fluid-m text-cyan transition-colors duration-500"
              : "text-transparent"
          }
        >
          {t("home.card 2 point 5")}
        </span>
      </div>
      <div
        ref={boxRef}
        style={{
          position: "relative",
          width: "100%",
          height: "80%",
          cursor: "grab",
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
