import { UserOutlined } from '@ant-design/icons';
import { Bubble, Sender, useXAgent, useXChat } from '@ant-design/x';
import { Flex, type GetProp } from 'antd';
import React from 'react';
import type { EmotionType } from '../common';
import { replyWithEmotion } from '../../../apis';

const roles: GetProp<typeof Bubble.List, 'roles'> = {
  ai: {
    placement: 'start',
    avatar: { icon: <UserOutlined />, style: { background: '#fde3cf' } },
    typing: { step: 5, interval: 20 },
    style: {
      maxWidth: 600,
    },
  },
  local: {
    placement: 'end',
    avatar: { icon: <UserOutlined />, style: { background: '#87d068' } },
  },
};

interface Props {
  onReply?: (params: { emotion: EmotionType; reply: string; time: number }) => void;
}

const Chats: React.FC<Props> = ({ onReply }) => {
  const [content, setContent] = React.useState('');

  // Agent for request
  const [agent] = useXAgent<string, { message: string }, string>({
    request: async ({ message }, { onSuccess, onError }) => {
      try {
        const response = await replyWithEmotion(message);
        onSuccess([`[情绪：${response.emotion}, 说话时间：${response.time}s] ${response.reply}`]);
        onReply?.({
          emotion: response.emotion,
          reply: response.reply,
          time: response.time,
        });
      } catch (error) {
        onError(error as Error);
      }
    },
  });

  // Chat messages
  const { onRequest, messages } = useXChat({
    agent,
    requestPlaceholder: '思考中...',
    requestFallback: '我遇到了一些问题，请稍后再试~',
  });

  return (
    <Flex vertical gap="middle">
      <Bubble.List
        roles={roles}
        style={{ maxHeight: 550 }}
        items={messages.map(({ id, message, status }) => ({
          key: id,
          loading: status === 'loading',
          role: status === 'local' ? 'local' : 'ai',
          content: message,
        }))}
      />
      <Sender
        loading={agent.isRequesting()}
        value={content}
        onChange={setContent}
        onSubmit={(nextContent) => {
          onRequest(nextContent);
          setContent('');
        }}
      />
    </Flex>
  );
};

export default Chats;
