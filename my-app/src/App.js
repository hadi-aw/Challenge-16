import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import { Header, Footer } from './components/Header';

const teamMembers = [
  {name: 'Sundar Pichai', role: 'CEO', photo: 'Sundar.jpg'},
  {name: 'Marcus East', role: 'CTO', photo: 'Marcus.jpg'},
  {name: 'Will Grannis', role: 'CFO', photo: 'Will.jpg'},

];

function App() {
  return (
    <div className="App">
      <Header title="Meet the Team" />
      <Gallery members={teamMembers} />
      <Footer />
    </div>
  );
}

export default App;