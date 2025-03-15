import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate(); // Initialize useNavigate

  // Redirect to /notes if the user is authenticated
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate('/notes'); // Redirect to /notes
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          {/* Quote */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Every great idea starts with a single note,
          </h1>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Login to start making the Notes!🖊️
          </h1>
          {/* Login Button */}
          {!isAuthenticated && (
            <button
              onClick={() => loginWithRedirect()}
              className="mt-6 text-xl bg-orange-400 font-bold text-gray-700 px-6 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
