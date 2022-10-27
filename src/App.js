import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadPage from './Components/LoadPage'
import { Suspense } from "react";
const LazyRules = React.lazy(()=> import("./Components/Rules"));
const LazyMain = React.lazy(()=> import("./Components/Main"));
const LazyDonate = React.lazy(()=> import("./Components/Donate"));
const LazyError = React.lazy(()=> import("./Components/Error"));

export default function App() {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<LoadPage/>}>
        <Routes>
          <Route exact path='/' element={<LazyMain/>}/>
          <Route exact path='/rules' element={<LazyRules/>}/>
          <Route exact path='/donate' element={<LazyDonate/>}/>
          <Route path=':error' element={<LazyError/>}/>
        </Routes>
      </Suspense>
     
    </Router>
  );
}

