import React from 'react';
import './index.scss';

type Props = {
  children?: React.ReactNode | React.ReactNode[],
};

const Template: React.FC = ({children}: Props) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Template;