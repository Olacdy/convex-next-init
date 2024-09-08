import { FC } from 'react';

import { preloadQuery } from 'convex/nextjs';

import { api } from '@/convex/_generated/api';

import CreateMessage from '@/src/components/message/create-message';
import ListMessages from '@/src/components/message/list-messages';

type PageProps = {};

const Page: FC<PageProps> = async ({}) => {
  const preloadedMessages = await preloadQuery(api.messages.list);

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-5'>
      <ListMessages preloadedMessages={preloadedMessages} />
      <CreateMessage />
    </div>
  );
};

export default Page;
