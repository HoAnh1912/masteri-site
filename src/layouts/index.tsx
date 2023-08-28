import { Box } from '@mui/material';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const Layout = ({ children }: any) => {
  return (
    <Box>
      {/* <Header /> */}
      <main id="site">{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
