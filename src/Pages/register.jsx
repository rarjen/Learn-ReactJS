import FormRegister from "../components/Fragements/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
