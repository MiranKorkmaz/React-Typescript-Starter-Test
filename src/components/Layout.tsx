import React from 'react'

type Props = {
    children: JSX.Element,
    screen?: string
  };
  export const Layout = ({ children, screen }: Props) => {
    return (
        <div>
            {children}
        </div>
)};

