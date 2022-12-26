import React from "react";
import cn from 'classnames';
import s from './index.modules.css';

export const FormButton = ({children, color, ...props}) => {
  return (
    <button {...props} className={cn(s.btn, s[color])}>
      {children}
    </button>
  )
}