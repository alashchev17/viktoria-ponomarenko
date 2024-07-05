'use client';

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'inline' | 'icon';
  action?: () => void;
  href?: string;
};

const buttonClassNames = {
  primary: 'bg-primary text-white hover:bg-primary/80',
  secondary: 'bg-secondary text-white hover:bg-secondary/80',
  inline: 'bg-white text-primary hover:bg-primary/10',
  icon: 'leading-none w-[40px] h-[40px] flex items-center justify-center border-2 border-white rounded-full',
};

export const Button = ({ children, variant, href, action }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} className={buttonClassNames[variant]} target="_blank">
        {children}
      </a>
    );
  }
  return (
    <button className={buttonClassNames[variant]} onClick={action}>
      {children}
    </button>
  );
};
