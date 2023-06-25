import { Box } from '@chakra-ui/react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Box bg="white">
      <main>{children}</main>
    </Box>
  );
};

export default Layout;