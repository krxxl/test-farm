import React from 'react';
import './index.scss';
import classNames from 'classnames';
import {Ibutton} from "interfaces";

const Button: React.FC<Ibutton> = ({
  children,
  disabled,
  onClick = () => null,
  className = '',
  ...otherProps
}) => {
  const classes = classNames(
    'btn ' + className,
  );
  return  (
    <button disabled={disabled} onClick={onClick} className={classes} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;