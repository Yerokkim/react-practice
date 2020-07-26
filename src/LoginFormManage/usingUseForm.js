import React from "react";
import useForm from "react-hook-form";
import Form from "./Form";
const App = () => {
  const { register, handleSubmit, errors } = useForm;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" name="email" ref={register} />
      <input
        type="password"
        placeholder="password"
        name="password"
        ref={register({ required: true, minLength: 8 })}
      />
      {errors.password && <p>invalidPassword</p>}
      <input type="submit"></input>
    </Form>
  );
};

export default App;
