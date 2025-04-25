import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

interface LoginProps {
    onLogin: (username: string, password: string ) => void;
  }
const Login = ({onLogin}:LoginProps) => {


      const handleSubmit = (user: {username: string; password: string}) => {
        onLogin(user.username, user.password);
        console.log(user); 
      }

  return (
    <>
     <h1>Login</h1>
     <Formik
      initialValues={{ username: '', password: ''}}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {( ) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" type="text" />
            <ErrorMessage name="username" component="div"  />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Login</button>
        </Form>


      )}
    </Formik>
    
    
    </>

  )
}

export default Login;