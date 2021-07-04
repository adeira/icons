// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Element } from 'react';
export default function Cloud(props: {}): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.5 5.5a5 5 0 014.802 6.399A2 2 0 1116.5 15.5h-11a3 3 0 11.1-5.998A5.002 5.002 0 0110.5 5.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
