import Head from "next/head";
import { AuthLayout } from "src/uikit/components/AuthLayout";
import { LoginContainer } from "src/uikit/containers/LoginContainer";

const LoginPage = () => {
  return (
    <AuthLayout head="Log in to FRIS">
      <LoginContainer />
    </AuthLayout>
  );
};

export default LoginPage;
