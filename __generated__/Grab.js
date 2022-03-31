// @flow strict

import React, { type Element } from 'react';

type Props = {
  +'data-testid'?: string,
};

export default function Grab(props: Props): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.35 9.505 7.5 9.5v-1a1 1 0 1 1 2 0v-1a1 1 0 1 1 2 0v1a1 1 0 1 1 2 0v1a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H10A4.5 4.5 0 0 1 5.5 14v-2.5a2 2 0 0 1 1.85-1.995zM7.5 8.5v3m2-4v2m2-2v2m2-1v2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
