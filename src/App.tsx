import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import './index.css'
import { Navbar } from '~/components';
import { Dashboard } from '~/pages';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/*<Route path="/" element={''} />*/}
      </Routes>
    </>
  );
}

export default App;
