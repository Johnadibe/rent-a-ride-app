import { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="auth_container">
      <form className="auth_form">
        <h1 className="text-xl font-black mb-5">Sign Up</h1>

        <input type="text" className="form_input" onChange={(element) => setName(element.target.value)} placeholder="Name" value={name} required />

        <input type="email" className="form_input" onChange={(element) => setEmail(element.target.value)} placeholder="Email" value={email} required />

        <input type="password" className="form_input" onChange={(element) => setPassword(element.target.value)} placeholder="Password" value={password} required />

        <div className="flex justify-between items-center">
          <button className="outline_btn" type="submit">Sign Up</button>
          <div className="alt">
            Already have an account?&nbsp;
            <a href="/login" className="text-primary">
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
