import React from "react";

export default function CurvedText({ className }, { text }) {
  console.log(text);
  return (
    <svg viewBox="0 0 500 500" className={className}>
      <path
        id="curve"
        d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        fill="transparent"
      />
      <text width="500">
        <textPath fill="red" xlinkHref="#curve">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
