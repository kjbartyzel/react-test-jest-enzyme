import React from 'react';
import Header from './components/header/header'
import './App.scss'
import Headline from './components/headline/headline';

const tempArray = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true
  }
]

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render posts' tempArr={tempArray} />
      </section>
    </div>
  );
}

export default App;
