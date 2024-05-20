// Menggunakan arrow function
const Button = (props) => {
  const { children = "...", classname = "bg-slate-700" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children ? children : "None"}
    </button>
  );
};

export default Button;
