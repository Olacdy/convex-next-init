'use client';

import { FC } from 'react';

import { api } from '@/convex/_generated/api';

import { type Preloaded, usePreloadedQuery } from 'convex/react';

type ListMessagesProps = {
  preloadedMessages: Preloaded<typeof api.messages.list>;
};

const ListMessages: FC<ListMessagesProps> = ({ preloadedMessages }) => {
  const messages = usePreloadedQuery(preloadedMessages);

  return (
    <ul>
      {messages.map((message) => (
        <li key={message._id}>{message.body}</li>
      ))}
    </ul>
  );
};

export default ListMessages;
