import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const data = await res.json();

    if (data.error) {
      const key = Object.keys(error);
      setError(error[key][0]);
    } else {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
      setEmail('');
      setPassword('');
      window.location.href = '/';
    }
  };

  return (
    <div className="auth_container">
      <form className="auth_form" onSubmit={handleSubmit}>

        <h1 className="text-xl font-black mb-5">Login</h1>

        {error && <div className="bg-red-300 p-4">{error}</div>}

        <input type="email" className="form_input" onChange={(element) => setEmail(element.target.value)} placeholder="Email" value={email} required />

        <input type="password" className="form_input" onChange={(element) => setPassword(element.target.value)} placeholder="Password" value={password} required />

        <div className="flex justify-between items-center">
          <button className="outline_btn" type="submit">Login</button>
          <div className="alt">
            Don&apos;t have an account?&nbsp;
            <a href="/signup" className="text-primary">
              Sign up
            </a>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Login;
