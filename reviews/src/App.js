import React, { useState } from 'react';
import Review from './Review';
import people from './data';
function App() {
  const [index, setIndex] = useState(0);

  const goBack = () => {
    setIndex(index !== 0 ? index - 1 : people.length - 1);
  };
  const goNext = () => {
    setIndex(index !== people.length - 1 ? index + 1 : 0);
  };
  const random = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      console.log(11);
      if (randomIndex === 0) {
        randomIndex++;
      } else {
        randomIndex--;
      }
    }
    setIndex(randomIndex);
  };
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review
          {...people[index]}
          goBack={goBack}
          goNext={goNext}
          random={random}
        />
      </section>
    </main>
  );
}

export default App;
