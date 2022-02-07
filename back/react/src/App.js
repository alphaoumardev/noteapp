import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import Header from "./components/Header";
import NotesList from "./pages/NotesList";
import NotePage from "./pages/NotePage";

function App()
{
  return (
      <div className="container dark">
          <div className="app">
              <Header/>
              <Routes>
                <Route path="/" exact element={<NotesList/>}/>
                <Route path="/note/:id"  element={<NotePage/>}/>
              </Routes>
          </div>
      </div>
  );
}

export default App;
