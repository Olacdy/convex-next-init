'use client';

import { FC, FormEvent, useState } from 'react';

import { useMutation } from 'convex/react';

import { api } from '@/convex/_generated/api';

import { Button } from '@/src/components/ui/button';

type CreateMessageProps = {};

const CreateMessage: FC<CreateMessageProps> = ({}) => {
  const addMessage = useMutation(api.messages.send);

  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    addMessage({ body: message });

    setMessage('');
  };

  return (
    <form
      className='flex flex-row items-center justify-center gap-3'
      onSubmit={handleSubmit}>
      <input
        className='h-full rounded-sm border border-primary/70'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button>Add Message</Button>
    </form>
  );
};

export default CreateMessage;
