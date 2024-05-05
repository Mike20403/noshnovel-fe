import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '~/components';
import { Dashboard } from '~/pages';
import { ReadHistory } from '~/components/ReadHistory.tsx';
import { SearchResult } from '~/components/SearchResult.tsx';
import { useServerStore } from './store/useServerStore';
import { NovelDetails } from '~/pages/NovelDetails.tsx';
import './App.css';
import './index.css';




function App() {
  const { getServerList } = useServerStore();
  useEffect(() => {
    getServerList();
  }, []);

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="" element={<Dashboard />}>
            <Route path="" element={<ReadHistory />} />
            <Route path="/search-result" element={<SearchResult />} />
          </Route>
          <Route path="/novel-detail" element={<NovelDetails />} />
        </Routes>
    </>
  );
}

export default App;
