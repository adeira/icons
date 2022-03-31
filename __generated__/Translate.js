// @flow strict

import React, { type Element } from 'react';

type Props = {
  +'data-testid'?: string,
};

export default function Translate(props: Props): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18.5 10.5v-6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2z" />
        <path d="M6.5 8.503h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h.003l6-.01a2 2 0 0 0 1.997-2V14.5m-5-1.997h-3" />
        <path d="m9 14-1 1c-.334.333-1.166.833-2.5 1.5" />
        <path d="M5.5 12.503c.334 1.166.834 2 1.5 2.499S8.5 16 9.5 16.5m4-12-3 6m3-6 3 6m-1-2h-4" />
      </g>
    </svg>
  );
}
