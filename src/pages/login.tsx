import { AuthLayout } from "src/uikit/components/AuthLayout";
import { LoginContainer } from "src/uikit/containers/login/LoginContainer";

const LoginPage = () => {
  return (
    <AuthLayout head="Log in to FRIS">
      <LoginContainer />
    </AuthLayout>
  );
};

export default LoginPage;
