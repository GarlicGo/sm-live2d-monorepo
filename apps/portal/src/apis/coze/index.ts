import axios from 'axios';
import { CozeToken } from './constants';

export const replyWithEmotion = async (
  input: string,
): Promise<{
  reply: string;
  emotion: string;
  time: number;
}> => {
  const response = await axios.post(
    'https://api.coze.cn/v1/workflow/run',
    {
      workflow_id: '7564714740804452404',
      parameters: {
        input,
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CozeToken}`,
      },
    },
  );
  const data = JSON.parse(response.data.data).output;
  return data;
};
