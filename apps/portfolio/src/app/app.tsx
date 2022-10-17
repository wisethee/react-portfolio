import { Route, Routes } from 'react-router-dom';
import AppHome from './pages/home.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
    </Routes>
  );
};

export default App;
