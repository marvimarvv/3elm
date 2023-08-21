import React, { useEffect, useRef, useState } from "react";

const calculateStartOffset = (pathId, textContent) => {
  const path = document.querySelector(pathId);
  const pathLength = path.getTotalLength();
  const textLength = textContent.length;

  const startOffset = (pathLength - textLength) / 2;

  return startOffset > 0 ? startOffset : 0;
};

const CurvedText = ({ text }) => {
  const [startOffset, setStartOffset] = useState(0);

  const svgRef = useRef(null);

  useEffect(() => {
    const pathId = "#curve";
    const calculatedStartOffset = calculateStartOffset(pathId, text);
    setStartOffset(calculatedStartOffset);
  }, [text]);

  useEffect(() => {
    const svgContainer = svgRef.current;
    const path = svgContainer.querySelector("#curve");
    const pathBBox = path.getBBox();
    const viewBox = `${pathBBox.x} ${pathBBox.y} ${pathBBox.width} ${pathBBox.height}`;
    svgContainer.setAttribute("viewBox", viewBox);
  }, [text]);

  return (
    // Wrap this in a div to make the svg responsive, viewport units don't work on svg
    // Also, the svg otherwise always takes up 100% of the width of the container which
    // makes it have different sizes with different words in the same flex container
    <div className="curved-text-width mx-auto">
      <svg viewBox="0 0 500 500" ref={svgRef} className="overflow-visible">
        <path
          id="curve"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          fill="transparent"
        />
        <text width="500" style={{ transform: "translateY(65%)" }}>
          <textPath
            className="fill-green"
            xlinkHref="#curve"
            style={{
              textAnchor: "middle",
              fontSize: "80px",
            }}
            startOffset={startOffset}
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedText;
