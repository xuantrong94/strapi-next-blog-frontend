import { Footer, Navbar } from '@/components';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container font-roboto">
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
