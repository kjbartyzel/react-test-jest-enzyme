import React from 'react';
import Header from './components/header/header'
import './App.scss'
import Headline from './components/headline/headline';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render posts' />
      </section>
    </div>
  );
}

export default App;
