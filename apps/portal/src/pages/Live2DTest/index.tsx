import { useRef, useState } from 'react';
import { Button, Select } from 'antd';
import { useMouth } from './hooks';
import { Emotions, Live2dModelPageUrl, MaoExps, type EmotionType, type MaoExpType } from './common';
import Chats from './Chats';
import { DynamicExpression } from './DynamicExpression';

const Live2DTest = () => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [selectedExp, setSelectedExp] = useState<MaoExpType>(MaoExps[0]);
  const [emotion, setEmotion] = useState<EmotionType>(Emotions[0]);

  const handleSetEmotion = (emotion: EmotionType) => {
    setEmotion(emotion);
    const currentExp = `${emotion}-close-mouth`;
    Model.setExpress(currentExp);
  };

  const Model = {
    setExpress: (exp: string) => {
      sendMessage({
        type: 'live2d-exp-control',
        exp,
      });
    },
  };

  const { startSpeaking, stopSpeaking } = useMouth((mouthState) => {
    const currentExp = `${emotion}-${mouthState}-mouth`;
    Model.setExpress(currentExp);
  });

  const sendMessage = (message: unknown) => {
    ref.current?.contentWindow?.postMessage(message, Live2dModelPageUrl);
  };

  return (
    <div className="flex flex-row h-screen w-screen">
      <iframe
        ref={ref}
        src={Live2dModelPageUrl}
        style={{
          width: '815px',
          height: '1000px',
        }}
      />
      <div className="flex flex-col p-4 flex-1">
        <DynamicExpression onClick={sendMessage} />
        <div className="flex flex-col gap-2">
          <div>控制所有表情</div>
          <div className="flex flex-row gap-2">
            <Select
              className="w-48"
              value={selectedExp}
              options={MaoExps.map((exp) => ({ label: exp, value: exp }))}
              onChange={(value) => setSelectedExp(value)}
            />
            <Button onClick={() => Model.setExpress(selectedExp)}>设置表情</Button>
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <div>控制情绪</div>
          <Select
            className="w-48"
            value={emotion}
            options={Emotions.map((exp) => ({ label: exp, value: exp }))}
            onChange={(value) => handleSetEmotion(value)}
          />
          <Button onClick={() => startSpeaking(3000)}>开始说话</Button>
          <Button onClick={stopSpeaking}>结束说话</Button>
        </div>
        <div className="flex flex-1 flex-col justify-end">
          <Chats
            onReply={({ emotion, time }) => {
              handleSetEmotion(emotion);
              startSpeaking(time * 1000);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Live2DTest;
