import './App.css';
import { Outlet } from 'react-router-dom';
import Appbar from './components/Elements/Appbar';
import Footer from './components/Elements/Footer';

export default function App() {
  return (
    <div>
      <Appbar />
      <Outlet />
      <Footer />
    </div>
  );
}
