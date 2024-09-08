'use client';

import { FC, ReactNode } from 'react';

import { ConvexProvider, ConvexReactClient } from 'convex/react';

import { ThemeProvider } from 'next-themes';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </ConvexProvider>
  );
};

export default Providers;
