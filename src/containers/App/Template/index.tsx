import './index.scss';
import React from 'react';

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