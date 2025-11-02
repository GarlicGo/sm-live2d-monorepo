export const Live2dModelPageUrl = 'http://localhost:11024';

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
