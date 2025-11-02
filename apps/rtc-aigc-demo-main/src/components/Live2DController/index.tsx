import { useEffect, useRef } from 'react';
import { useLive2DController } from './useLive2DController';
import { Emotions, Live2dModelPageUrl } from '@/common';
import { useMouth } from './useMouth';
import './index.less';

function Live2DController() {
  const ref = useRef<HTMLIFrameElement>(null);

  const sendMessage = (message: unknown) => {
    ref.current?.contentWindow?.postMessage(message, Live2dModelPageUrl);
  };

  const Model = {
    setExpress: (exp: string) => {
      sendMessage({
        type: 'live2d-exp-control',
        exp,
      });
    },
  };

  const { bot, isAITalking } = useLive2DController();

  const { startSpeaking, stopSpeaking } = useMouth((mouthState) => {
    const emotion = bot?.emotion && Emotions.includes(bot?.emotion) ? bot.emotion : Emotions[0];
    const currentExp = `${emotion}-${mouthState}-mouth`;
    Model.setExpress(currentExp);
  });

  useEffect(() => {
    if (isAITalking) {
      startSpeaking();
      return;
    }

    stopSpeaking?.();
  }, [isAITalking, startSpeaking, stopSpeaking]);

  return (
    <div className="live-2d-view">
      <div className="live-2d-canvas">
        <iframe title="live2d-model" className="live2d-model" ref={ref} src={Live2dModelPageUrl} />
      </div>
    </div>
  );
}

export default Live2DController;
