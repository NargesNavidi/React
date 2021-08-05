import React from 'react';
import {Link as ReactLink} from 'react-router';

export default class Link extends React.Component {
  
  parseTo(to) {

    let parser = document.createElement('a');
    parser.href = to;
    return parser;

  }

  isInternal(to) {
    
    // If it's a relative url such as '/path', 'path' and does not contain a protocol we can assume it is internal.
    
    if(to.indexOf("://")=== -1) return true;

    const toLocation = this.parseTo(to);
    return window.location.hostname === toLocation.hostname;

  }

  render() {

    const {to, children, ...rest} = this.props;
    const isInternal = this.isInternal(to);

    if (isInternal) {
      return (<Link to={to} {...rest}>{children}</Link>);
    } else {
      return (<a href={to} target="_blank" {...rest}>{children}</a>);
    }

  }
}
