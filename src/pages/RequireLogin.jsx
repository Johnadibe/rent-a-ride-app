import { Link } from 'react-router-dom';

const RequireLogin = () => (
  <div className="flex flex-col items-center justify-center h-screen p-2">
    <h1 className="sm:text-3xl text-2xl font-bold mb-4">Oops Sorry!</h1>
    <p className="text-lg text-gray-600 mb-8 text-center">
      Looks like you&apos;re not logged in yet. Please
      {' '}
      <Link to="/login" className="text-primary">login</Link>
      {' '}
      to access this
      page.
    </p>
  </div>
);

export default RequireLogin;
