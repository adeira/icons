// @flow strict

/* eslint-disable import/newline-after-import */
import React, { type Element } from 'react';
export default function ReverseAlt(props: {}): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.5 9.5l-4 4 4 4m8-4h-12m6-10l4 4-4 4m4-4h-12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}