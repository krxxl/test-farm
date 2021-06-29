import React from 'react';
import './index.scss';
import classNames from 'classnames';
import {IInputProps} from "interfaces";

const InputUI: React.FC<IInputProps> = ({type = 'text', onChange, className, ...otherProps}) => {
  const classes = classNames(
    'input ' + className,
  );
  return (
    <input type={type} onChange={onChange} className={classes} {...otherProps} />
  )
};

export default InputUI;