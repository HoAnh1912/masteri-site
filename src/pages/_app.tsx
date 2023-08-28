import Layout from 'layouts';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AppProvider } from 'providers/appProvider';
import { useEffect, useState } from 'react';
import TokenService from 'services/token.service';
import '../assets/scss/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
    router.push({
      pathname: '/signin',
      query: { returnUrl: router.asPath }
    });
  };

  const handleClose = () => {
    setOpen(false);
    router.push({ pathname: '/' });
  };

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  const authCheck = (url: any) => {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ['/transactions', '/register-technology'];
    const path = url.split('?')[0];
    if (!TokenService.getToken() && publicPaths.includes(path)) {
      setAuthorized(false);
      setOpen(true);
    } else {
      setAuthorized(true);
    }
  };

  return (
    <AppProvider>
      <Layout>
        {authorized && <Component {...pageProps} />}
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
