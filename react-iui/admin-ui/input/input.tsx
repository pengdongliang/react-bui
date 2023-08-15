import type { ReactNode } from 'react';

export type InputProps = {
  children?: ReactNode;
};

export function Input({ children }: InputProps) {
  return (
    <div>
      {children}
    </div>
  );
}
