import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useMemoizedFn } from 'ahooks';
import { RootState } from '@/store';

/**
 * 提取字符串开头中文括号内的 JSON 字符串并反序列化
 * @param inputStr 可能包含中文括号及 JSON 的输入字符串
 * @returns 反序列化后的 JSON 对象（object 或 array），提取失败或解析失败时返回 null
 */
function extractAndParseJson(inputStr: string): object | null {
  // 正则匹配开头的中文括号及其中内容（非贪婪匹配）
  // ^ 确保从字符串开头匹配，（和）是中文全角括号，.*? 非贪婪匹配中间内容
  const regex = /^（(.*?)）/;
  const match = inputStr.match(regex);

  // 未匹配到开头的中文括号对
  if (!match || match.length < 2) {
    return null;
  }

  const jsonStr = match[1]; // 提取括号内的字符串

  try {
    // 尝试反序列化 JSON
    return JSON.parse(jsonStr);
  } catch (error) {
    // JSON 格式无效（包括语法错误、非 JSON 格式等）
    return null;
  }
}

// 从msgHistory中找到最后一个可成功提取JSON的结果
function findLastValidJson(msgHistory: Array<{ value: string }>): object | null {
  // 从后往前遍历，找到第一个有效结果（即最后一个符合条件的）
  for (let i = msgHistory.length - 1; i >= 0; i--) {
    const item = msgHistory[i];
    const parsed = extractAndParseJson(item.value);
    if (parsed !== null) {
      return parsed;
    }
  }
  // 没有找到任何有效JSON
  return null;
}

interface Params {
  onAITalking?: (isTalking: boolean) => void;
  onAIStopTalking?: () => void;
}

interface Response {
  isAITalking: boolean;
  bot?: {
    emotion?: string;
  };
}

const useLive2DController = (params: Params = {}): Response => {
  const { onAITalking, onAIStopTalking } = params;
  const room = useSelector((state: RootState) => state.room);
  const { isAITalking, msgHistory } = room;

  const lastBotValidJson = useMemo(() => {
    return findLastValidJson(msgHistory);
  }, [msgHistory]);

  const handleAITalkingStatusChange = useMemoizedFn((isTalking?: boolean) => {
    if (isTalking) {
      onAITalking?.(isTalking);
      return;
    }

    onAIStopTalking?.();
  });

  useEffect(() => {
    handleAITalkingStatusChange(isAITalking);
  }, [handleAITalkingStatusChange, isAITalking]);

  console.log('useLive2DController', { room, lastBotValidJson, isAITalking });

  return {
    isAITalking,
    bot: lastBotValidJson as Response['bot'],
  };
};

export { useLive2DController };
