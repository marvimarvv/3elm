// Taken over and modified from https://codepen.io/ykadosh/pen/KKezJzz

import IconSmallStar from "./iconSmallStar";

export default function InfiniteLoopSlider({ TAGS }) {
  const DURATION = 25000;
  const ROWS = 1;
  const TAGS_PER_ROW = 15;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
      <div
        className="loop-slider"
        style={{
          "--loop-duration": `${duration}ms`,
          "--loop-direction": reverse ? "reverse" : "normal",
        }}
      >
        <div className="inner flex w-fit animate-loop">
          {children}
          {children}
        </div>
      </div>
    );
  };

  const Tag = ({ text }) => (
    <div className="mr-6 flex flex-shrink-0 items-center text-fluid-m">
      <IconSmallStar /> {text}
    </div>
  );

  return (
    <div className="tag-list flex flex-col overflow-hidden bg-darkorange py-4 font-cohead text-white rtl:flex-row-reverse">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag, index) => (
              <Tag text={tag} key={`${i}-${index}`} />
            ))}
        </InfiniteLoopSlider>
      ))}
    </div>
  );
}
