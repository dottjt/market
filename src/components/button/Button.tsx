import React from 'react';
import { Button as MaterialUIButton } from '@material-ui/core';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <MaterialUIButton
      variant="contained"
      onClick={onClick}
    >
      {children}
    </MaterialUIButton>
  )
}
