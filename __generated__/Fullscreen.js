// @flow strict

import React, { type Element } from 'react';

type Props = {
  +'data-testid'?: string,
};

export default function Fullscreen(props: Props): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.5 7.5V2.522l-5.5.014m5.5-.014-6 5.907m.5 10.092 5.5.002-.013-5.5m.013 5.406-6-5.907M2.5 7.5v-5H8m.5 5.929-6-5.907M8 18.516l-5.5.007V13.5m6-1-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
