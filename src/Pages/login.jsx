import FormLogin from "../components/Fragements/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
