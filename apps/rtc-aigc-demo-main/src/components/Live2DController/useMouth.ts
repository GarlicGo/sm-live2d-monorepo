import { useMemoizedFn } from 'ahooks';
import { Timeout } from 'ahooks/lib/useRequest/src/types';
import { useState, useRef, useEffect } from 'react';

type MouthState = 'open' | 'close';
type OnMouthChange = (state: MouthState) => void;

const DefaultSpeakTime = 1000 * 60 * 60;

const useMouth = (onMouthChange: OnMouthChange) => {
  const [mouthState, setMouthState] = useState<MouthState>('close');
  const speakingTimerRef = useRef<Timeout | null>(null);
  const autoStopTimeRef = useRef<Timeout | null>(null);
  // 存储最新的回调函数
  const onMouthChangeRef = useRef<OnMouthChange>(onMouthChange);

  // 当外部传入的 onMouthChange 变化时，更新 ref 中的回调
  useEffect(() => {
    onMouthChangeRef.current = onMouthChange;
  }, [onMouthChange]);

  const toggleMouth = () => {
    if (speakingTimerRef.current) {
      setMouthState((prev) => {
        const newState: MouthState = prev === 'open' ? 'close' : 'open';
        // 调用最新的回调
        onMouthChangeRef.current(newState);
        return newState;
      });
      speakingTimerRef.current = setTimeout(toggleMouth, 300);
    }
  };

  const stopSpeaking = useMemoizedFn(() => {
    if (speakingTimerRef.current) {
      clearTimeout(speakingTimerRef.current);
      speakingTimerRef.current = null;
    }
    if (autoStopTimeRef.current) {
      clearTimeout(autoStopTimeRef.current);
      autoStopTimeRef.current = null;
    }

    setMouthState((prev) => {
      if (prev !== 'close') {
        const newState: MouthState = 'close';
        // 调用最新的回调
        onMouthChangeRef.current(newState);
        return newState;
      }
      return prev;
    });
  });

  const startSpeaking = useMemoizedFn((duration: number = DefaultSpeakTime) => {
    if (speakingTimerRef.current) {
      clearTimeout(speakingTimerRef.current);
    }

    if (autoStopTimeRef.current) {
      clearTimeout(autoStopTimeRef.current);
    }

    setMouthState((prev) => {
      const newState: MouthState = 'open';
      if (prev !== newState) {
        // 调用最新的回调
        onMouthChangeRef.current(newState);
      }
      return newState;
    });

    speakingTimerRef.current = setTimeout(toggleMouth, 300);
    autoStopTimeRef.current = setTimeout(stopSpeaking, duration);
  });

  useEffect(() => {
    return () => {
      if (speakingTimerRef.current) {
        clearTimeout(speakingTimerRef.current);
      }
      if (autoStopTimeRef.current) {
        clearTimeout(autoStopTimeRef.current);
      }
    };
  }, []);

  return { mouthState, startSpeaking, stopSpeaking };
};

export { useMouth };
