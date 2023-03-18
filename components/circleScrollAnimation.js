import { useScroll, useSpring, useTransform } from "framer-motion";

import { motion as m } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "next-i18next";

export default function circleScrollAnimation({ className }) {
  const { t } = useTranslation();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleCenterCircle = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.2, 0.4, 0.55, 0.7, 1],
      [0, 0.1, 0.5, 0.4, 3, 4]
    )
  );
  const scaleSmallCircles = useSpring(
    useTransform(scrollYProgress, [0, 0.55], [1, 0.5])
  );

  const opacityFirstText = useTransform(
    scrollYProgress,
    [0, 0.5, 0.55],
    [1, 1, 0]
  );

  const opacitySecondText = useTransform(
    scrollYProgress,
    [0, 0.55, 0.6, 1],
    [0, 0, 1, 1]
  );

  const circle1Top = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55],
    ["0%", "10%", "20%", "50%"]
  );

  const circle1Left = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55],
    ["0%", "15%", "30%", "50%"]
  );

  const circle1Color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45],
    ["#00ffff", "#00ffff", "#e15027"]
  );

  const circle2Top = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55],
    ["0%", "20%", "40%", "50%"]
  );

  const circle2Left = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55],
    ["60%", "50%", "40%", "50%"]
  );

  const circle2Color = useTransform(
    scrollYProgress,
    [0, 0.25, 0.3],
    ["#6cff6a", "#6cff6a", "#e15027"]
  );

  const circle3Top = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55],
    ["0%", "15%", "25%", "50%"]
  );

  const circle3Left = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55],
    ["100%", "80%", "70%", "50%"]
  );

  const circle3Color = useTransform(
    scrollYProgress,
    [0, 0.4, 0.45],
    ["#00ffff", "#00ffff", "#e15027"]
  );

  const circle4Top = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55],
    ["80%", "70%", "60%", "50%"]
  );

  const circle4Left = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55],
    ["0%", "10%", "40%", "50%"]
  );

  const circle4Color = useTransform(
    scrollYProgress,
    [0, 0.33, 0.37],
    ["#6cff6a", "#6cff6a", "#e15027"]
  );

  const circle5Top = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.55],
    ["80%", "70%", "55%", "50%"]
  );

  const circle5Left = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55],
    ["100%", "90%", "60%", "50%"]
  );

  const circle5Color = useTransform(
    scrollYProgress,
    [0, 0.33, 0.37],
    ["#00ffff", "#00ffff", "#e15027"]
  );

  return (
    <div className={className} ref={ref}>
      <m.div
        style={{
          top: circle1Top,
          left: circle1Left,
          opacity: opacityFirstText,
          height: "8vw",
          width: "8vw",
          backgroundColor: circle1Color,
          scale: scaleSmallCircles,
        }}
        className="absolute -translate-x-2/4 -translate-y-2/4 rounded-full"
      ></m.div>
      <m.div
        style={{
          top: circle2Top,
          left: circle2Left,
          opacity: opacityFirstText,
          height: "8vw",
          width: "8vw",
          backgroundColor: circle2Color,
          scale: scaleSmallCircles,
        }}
        className="absolute -translate-x-2/4 -translate-y-2/4 rounded-full"
      ></m.div>
      <m.div
        style={{
          top: circle3Top,
          left: circle3Left,
          opacity: opacityFirstText,
          height: "8vw",
          width: "8vw",
          backgroundColor: circle3Color,
          scale: scaleSmallCircles,
        }}
        className="absolute -translate-x-2/4 -translate-y-2/4 rounded-full"
      ></m.div>
      <m.div
        style={{
          top: circle4Top,
          left: circle4Left,
          opacity: opacityFirstText,
          height: "8vw",
          width: "8vw",
          backgroundColor: circle4Color,
          scale: scaleSmallCircles,
        }}
        className="absolute -translate-x-2/4 -translate-y-2/4 rounded-full"
      ></m.div>
      <m.div
        style={{
          top: circle5Top,
          left: circle5Left,
          opacity: opacityFirstText,
          height: "8vw",
          width: "8vw",
          backgroundColor: circle5Color,
          scale: scaleSmallCircles,
        }}
        className="absolute -translate-x-2/4 -translate-y-2/4 rounded-full"
      ></m.div>
      <m.div
        className="relative grid place-items-center rounded-full bg-brightorange text-center"
        style={{
          scale: scaleCenterCircle,
          height: "50vw",
          width: "50vw",
        }}
      >
        <m.span
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-cohead text-fluid-l"
          style={{ opacity: opacityFirstText }}
        >
          {t("about.circle text 1")}
        </m.span>
        <m.span
          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 font-cohead text-fluid-l"
          style={{ opacity: opacitySecondText }}
        >
          {t("about.circle text 2")}
        </m.span>
      </m.div>
    </div>
  );
}
