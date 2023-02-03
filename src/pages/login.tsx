import { SimpleGrid } from "@chakra-ui/react";
import { LoginRightContainer } from "src/uikit/containers/login/LoginRightContainer";

const LoginPage = () => {
  return (
    <SimpleGrid columns={2} minChildWidth="50%">
      <h1>Hehe</h1>
      <LoginRightContainer />
    </SimpleGrid>
  );
};

export default LoginPage;
