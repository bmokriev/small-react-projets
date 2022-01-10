import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import people from './data';
function App() {
  // const [people, setPeople] = useState(data);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let slider = setTimeout(() => {
      goBack();
    }, 3000);
    return () => clearInterval(slider);
  }, [active]);

  const goNext = () => {
    let next = active + 1;
    if (next > data.length - 1) {
      next = 0;
    }
    setActive(next);
  };

  const goBack = () => {
    let previous = active - 1;
    if (previous < 0) {
      previous = data.length - 1;
    }
    setActive(previous);
  };

  return (
    <section className="section">
      <div class="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div class="section-center">
        {data.map((person, personIndex) => {
          let position = 'nextSlide';
          if (active === personIndex) {
            position = 'activeSlide';
          }
          if (
            personIndex === active - 1 ||
            (active === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article class={position}>
              <img src={person.image} alt={person.name} class="person-img" />
              <h4>{person.name}</h4>
              <p class="title">{person.title}</p>
              <p class="text">{person.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button class="prev" onClick={() => goBack()}>
          <FiChevronLeft />
        </button>
        <button class="next" onClick={() => goNext()}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
