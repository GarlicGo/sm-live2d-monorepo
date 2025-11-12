export const Live2dModelPageUrl = 'http://localhost:11024';

// 用常量对象替代 enum（运行时仅为普通对象，无额外枚举代码）
export const Live2DControlType = {
  ExpressionControl: 'live2d-exp-control',
  DynamicExpressionControl: 'live2d-dynamic-exp',
  MotionControl: 'live2d-motion-control',
} as const; // as const 确保类型被推断为具体字符串字面量，而非宽泛的 string

// 定义对应的类型（等价于原 enum 的类型）
export type Live2DControlType = typeof Live2DControlType[keyof typeof Live2DControlType];

export const MaoExps = [
  'exp_01',
  'exp_02',
  'exp_03',
  'exp_04',
  'exp_05',
  'exp_06',
  'exp_07',
  'exp_08',
  'angry-close-mouth',
  'angry-open-mouth',
  'happy-close-mouth',
  'happy-open-mouth',
  'sad-close-mouth',
  'sad-open-mouth',
] as const;

export type MaoExpType = (typeof MaoExps)[number];

export const Emotions = ['angry', 'happy', 'sad'];

export type EmotionType = (typeof Emotions)[number];