import { AuthLayout } from "src/uikit/components/AuthLayout";
import { RegisterContainer } from "src/uikit/containers/register/RegisterContainer";

const RegisterPage = () => {
  return (
    <AuthLayout head="Register to FRIS">
      <RegisterContainer />
    </AuthLayout>
  );
};

export default RegisterPage;
