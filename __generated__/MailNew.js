// @flow strict

import React, { type Element } from 'react';

type Props = {
  +'data-testid'?: string,
};

export default function MailNew(props: Props): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m9.508 4.067-5 2.857A2 2 0 0 0 3.5 8.661V15.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.66a2 2 0 0 0-1.008-1.736l-5-2.857a2 2 0 0 0-1.984 0zM10.5 8.5v6m-3-3h6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
