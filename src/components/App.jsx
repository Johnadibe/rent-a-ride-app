import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TourDetailsPage from './pages/TourDetailsPage';
import DeleteTourPage from './pages/DeleteTourPage';
import AddTours from './pages/AddTours';
import ProtectedRoute from './pages/ProtectedRoute';
import Reservations from './pages/reservations';
import MakeReservation from './pages/MakeReservation';

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
          <Route path="/make_reservations/:id" element={<ProtectedRoute><MakeReservation /></ProtectedRoute>} />

          <Route path="/delete-tour" element={<DeleteTourPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
