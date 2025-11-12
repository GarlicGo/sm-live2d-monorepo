import { Button, Select } from 'antd';
import type React from 'react';
import { Live2DControlType } from '../common';
import { DynamicExpressions, type DynamicExpressionsKey } from './exps';
import { useState } from 'react';

interface Props {
  onClick?: (message: unknown) => void;
}

export const DynamicExpression: React.FC<Props> = ({ onClick }) => {
  const [selectedExp, setSelectedExp] = useState<DynamicExpressionsKey>(Object.keys(DynamicExpressions)[0] as DynamicExpressionsKey);
  const handleClick = () => {
    onClick?.({
      type: Live2DControlType.DynamicExpressionControl,
      dynamicExpression: DynamicExpressions[selectedExp],
    });
  };

  return (
    <div className='flex flex-row gap-2'>
      <Select
        style={{ width: 200 }}
        options={Object.keys(DynamicExpressions).map((key) => ({
          label: key,
          value: key,
        }))}
        value={selectedExp}
        onChange={(value) => setSelectedExp(value)}
      />
      <Button onClick={handleClick}>DynamicExpression</Button>
    </div>
  );
};
