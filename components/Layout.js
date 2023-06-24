import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box bg="white">
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
