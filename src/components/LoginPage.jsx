import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Formik initialValues={{ email: "", password: "" }}>
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@gmail.com"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <Field id="password" name="password" />
        <Link to="/">
          <button type="submit">Submit</button>
        </Link>
      </Form>
    </Formik>
  );
};

export default LoginPage;
