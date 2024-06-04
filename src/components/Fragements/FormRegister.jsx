import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  const fullNameRef = useRef(null);

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Angela Doe"
        name="fullname"
        ref={fullNameRef}
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="confirmPassword"
        placeholder="*******"
        name="confirmPassword"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
