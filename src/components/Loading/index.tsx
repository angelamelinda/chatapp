import React, { FC } from "react";

interface ILoading {
  width?: number;
  height?: number;
  color: string;
}

const Loading: FC<ILoading> = ({ width, height, color }) => {
  return (
    <svg
      data-testid="loading"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ margin: "auto", background: "transparent", display: "block" }}
      width={width || 50}
      height={height || 50}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid">
      <g transform="rotate(0 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9090909090909091s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(32.72727272727273 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8181818181818182s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(65.45454545454545 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.7272727272727273s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(98.18181818181819 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6363636363636364s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(130.9090909090909 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5454545454545454s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(163.63636363636363 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.45454545454545453s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(196.36363636363637 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.36363636363636365s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(229.0909090909091 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.2727272727272727s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(261.8181818181818 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.18181818181818182s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(294.54545454545456 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.09090909090909091s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(327.27272727272725 50 50)">
        <rect
          x={46}
          y="25.5"
          rx={4}
          ry="4.62"
          width={8}
          height={11}
          fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
};

export default Loading;
