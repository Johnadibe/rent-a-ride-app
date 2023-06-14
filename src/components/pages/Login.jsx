import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="auth_container">
      <form className="auth_form">
        <h1 className="text-xl font-black">Login</h1>
        <input type="email" className="form_input" onChange={(element) => setEmail(element.target.value)} placeholder="Email" value={email} required />
        <input type="password" className="form_input" onChange={(element) => setPassword(element.target.value)} placeholder="Password" value={password} required />
        <button className="outline_btn" type="submit">Login</button>
        <div className="alt">
          Don&apos;t have an account?&nbsp;
          <a href="/register" className="text-primary">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
