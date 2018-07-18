declare module 'react-favicon' {
  import * as React from 'react';

  interface FaviconProps {
    url: string;
  }

  export default class Favicon extends React.Component<FaviconProps, any> {
    constructor();
  }
}
