import React from 'react';
import { Link } from 'react-router-dom';

const BasicTest: React.FC = () => {
  return (
    <div>
      <div>BasicTest</div>
      <Link to="/">返回首页</Link>
    </div>
  );
};

export default BasicTest;
