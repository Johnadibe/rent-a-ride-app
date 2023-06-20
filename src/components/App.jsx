import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TourDetailsPage from './pages/TourDetailsPage';
import AddTours from './pages/AddTours';
import ProtectedRoute from './pages/ProtectedRoute';
import Reservations from './pages/Reservations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/add-tour" element={<ProtectedRoute><AddTours /></ProtectedRoute>} />
          <Route path="/tour/:id" element={<TourDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
