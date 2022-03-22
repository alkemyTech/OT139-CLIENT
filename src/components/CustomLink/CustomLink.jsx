import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './customLink.css';

export default function CustomLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const customStyle = match ? 'active' : 'inactive';

  return (
    <Link
      className={customStyle}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
