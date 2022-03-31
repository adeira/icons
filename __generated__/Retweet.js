// @flow strict

import React, { type Element } from 'react';

type Props = {
  +'data-testid'?: string,
};

export default function Retweet(props: Props): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m13.5 13.5 3 3 3-3" />
        <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9-3-3-3 3" />
        <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8" />
      </g>
    </svg>
  );
}
