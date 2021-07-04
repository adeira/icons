// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Node } from 'react';
export default function Hierarchy(props: {}): Node {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.5 2.5h6v5h-6zm5 11h6v5h-6zm-10 0h6v5h-6zm2.998 0v-3h10v3m-4.998-3v-3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
