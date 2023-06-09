import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
