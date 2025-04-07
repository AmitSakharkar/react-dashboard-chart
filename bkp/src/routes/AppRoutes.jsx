import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import Settings from '@/pages/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
