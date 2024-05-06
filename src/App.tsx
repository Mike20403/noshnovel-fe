import './index.css';
import './App.css';
import { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Navbar } from '~/components';
import { Dashboard } from '~/pages';
import { ReadHistory } from '~/components/ReadHistory.tsx';
import { SearchResult } from '~/components/SearchResult.tsx';
import { useServerStore } from './store/useServerStore';
import { path } from '~/constants';
import { NovelDetails } from '~/pages/NovelDetails.tsx';

function App() {
  const { getServerList } = useServerStore();
  useEffect(() => {
    getServerList();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={path.HOME} element={<Dashboard />}>
          <Route path={path.HOME} element={<ReadHistory />} />
          <Route path={path.SEARCH} element={<SearchResult />} />
        </Route>
        <Route path="/novel-detail" element={<NovelDetails />} />
      </Routes>
    </>
  );
}

export default App;
