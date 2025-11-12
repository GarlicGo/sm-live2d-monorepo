export const DynamicExpressions = {
  Surprise: {
    name: 'dynamic-surprise',
    fadeInTime: 0.3,
    fadeOutTime: 0.3,
    parameters: [
      { id: 'ParamEyeLOpen', value: 1.5, blendType: 'Multiply' },
      { id: 'ParamEyeROpen', value: 1.5, blendType: 'Multiply' },
      { id: 'ParamMouthOpenY', value: 0.8, blendType: 'Add' },
      { id: 'ParamBrowLY', value: 1.0, blendType: 'Add' },
      { id: 'ParamBrowRY', value: 1.0, blendType: 'Add' },
    ],
  },
  Shy: {
    name: 'dynamic-shy',
    fadeInTime: 0.3,
    fadeOutTime: 0.3,
    parameters: [
      { id: 'ParamEyeLOpen', value: 0.5, blendType: 'Multiply' },
      { id: 'ParamEyeROpen', value: 0.5, blendType: 'Multiply' },
      { id: 'ParamMouthOpenY', value: 0.3, blendType: 'Add' },
      { id: 'ParamBrowLY', value: -0.5, blendType: 'Add' },
      { id: 'ParamBrowRY', value: -0.5, blendType: 'Add' },
      { id: 'ParamCheek', value: 0.8, blendType: 'Add' }, // 补充脸红参数，贴合害羞场景
    ],
  },
  // 新增：开心表情
  'dynamic-shy': {
    name: 'dynamic-shy',
    fadeInTime: 0.5,
    fadeOutTime: 0.5,
    parameters: [
      { id: 'ParamEyeLSmile', value: 0.4, blendType: 'Add' },
      { id: 'ParamEyeRSmile', value: 0.4, blendType: 'Add' },
      { id: 'ParamCheek', value: 0.6, blendType: 'Add' },
      { id: 'ParamMouthForm', value: 0.3, blendType: 'Add' },
      { id: 'ParamMouthOpenY', value: 0.2, blendType: 'Add' },
      { id: 'ParamBrowLY', value: 0.2, blendType: 'Add' },
      { id: 'ParamBrowRY', value: 0.2, blendType: 'Add' },
    ],
  },
  'dynamic-surprised': {
    name: 'dynamic-surprised',
    fadeInTime: 0.3,
    fadeOutTime: 0.3,
    parameters: [
      { id: 'ParamEyeLOpen', value: 1.5, blendType: 'Multiply' },
      { id: 'ParamEyeROpen', value: 1.5, blendType: 'Multiply' },
      { id: 'ParamBrowLY', value: 0.9, blendType: 'Add' },
      { id: 'ParamBrowRY', value: 0.9, blendType: 'Add' },
      { id: 'ParamMouthOpenY', value: 1.2, blendType: 'Add' },
      { id: 'ParamEyeBallForm', value: 0.5, blendType: 'Add' },
      { id: 'ParamAngleY', value: 2, blendType: 'Add' },
    ],
  },
  'dynamic-helpless': {
    name: 'dynamic-helpless',
    fadeInTime: 0.4,
    fadeOutTime: 0.4,
    parameters: [
      { id: 'ParamBrowLY', value: -0.3, blendType: 'Add' },
      { id: 'ParamBrowRY', value: -0.3, blendType: 'Add' },
      { id: 'ParamBrowLAngle', value: 0.2, blendType: 'Add' },
      { id: 'ParamBrowRAngle', value: 0.2, blendType: 'Add' },
      { id: 'ParamMouthForm', value: -0.1, blendType: 'Add' },
      { id: 'ParamAngleZ', value: -3, blendType: 'Add' },
      { id: 'ParamBreath', value: 0.3, blendType: 'Add' },
    ],
  },
  'dynamic-angry': {
    name: 'dynamic-angry',
    fadeInTime: 0.3,
    fadeOutTime: 0.3,
    parameters: [
      { id: 'ParamBrowLAngle', value: -0.9, blendType: 'Add' },
      { id: 'ParamBrowRAngle', value: -0.9, blendType: 'Add' },
      { id: 'ParamBrowLForm', value: -0.8, blendType: 'Add' },
      { id: 'ParamBrowRForm', value: -0.8, blendType: 'Add' },
      { id: 'ParamMouthForm', value: -0.9, blendType: 'Add' },
      { id: 'ParamEyeLOpen', value: 0.7, blendType: 'Multiply' },
      { id: 'ParamEyeROpen', value: 0.7, blendType: 'Multiply' },
      { id: 'ParamAngleX', value: -2, blendType: 'Add' },
      { id: 'ParamBodyAngleX', value: -1, blendType: 'Add' },
    ],
  },
  'dynamic-wronged': {
    name: 'dynamic-wronged',
    fadeInTime: 0.5,
    fadeOutTime: 0.5,
    parameters: [
      { id: 'ParamBrowLAngle', value: -0.4, blendType: 'Add' },
      { id: 'ParamBrowRAngle', value: -0.4, blendType: 'Add' },
      { id: 'ParamBrowLY', value: -0.2, blendType: 'Add' },
      { id: 'ParamBrowRY', value: -0.2, blendType: 'Add' },
      { id: 'ParamMouthForm', value: -0.3, blendType: 'Add' },
      { id: 'ParamMouthOpenY', value: 0.1, blendType: 'Add' },
      { id: 'ParamCheek', value: 0.3, blendType: 'Add' },
      { id: 'ParamEyeBallY', value: -0.2, blendType: 'Add' },
    ],
  },
  DouBao: {
  "fadeInTime": 0.3,
  "fadeOutTime": 0.3,
  "name": "dynamic-sad",
  "parameters": [
    {
      "blendType": "Add",
      "id": "ParamBrowLAngle",
      "value": -0.9
    },
    {
      "blendType": "Add",
      "id": "ParamBrowRAngle",
      "value": -0.9
    },
    {
      "blendType": "Add",
      "id": "ParamBrowLY",
      "value": -0.8
    },
    {
      "blendType": "Add",
      "id": "ParamBrowRY",
      "value": -0.8
    },
    {
      "blendType": "Add",
      "id": "ParamMouthForm",
      "value": -0.9
    },
    {
      "blendType": "Multiply",
      "id": "ParamEyeLOpen",
      "value": 0.5
    },
    {
      "blendType": "Multiply",
      "id": "ParamEyeROpen",
      "value": 0.5
    },
    {
      "blendType": "Add",
      "id": "ParamAngleY",
      "value": -5
    },
    {
      "blendType": "Add",
      "id": "ParamBreath",
      "value": 0.4
    }
  ]
}
} as const;

export type DynamicExpressionsKey = keyof typeof DynamicExpressions;
