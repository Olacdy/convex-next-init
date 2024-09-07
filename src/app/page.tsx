import { api } from '@/convex/_generated/api';
import { fetchQuery } from 'convex/nextjs';
import { FC } from 'react';

type PageProps = {};

const Page: FC<PageProps> = async ({}) => {
  const messages = await fetchQuery(api.messages.list);

  console.log(messages);

  return <div>page</div>;
};

export default Page;
