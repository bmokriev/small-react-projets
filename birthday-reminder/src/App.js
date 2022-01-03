import React, { useState } from 'react';
import data from './data';
import ListItem from './ListItem';
function App() {
  const [people, setPeople] = useState(data);

  const list = people.map((person) => (
    <ListItem key={person.id} person={person} />
  ));
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {/* LIST */}
        {list}

        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
        <button
          onClick={() => {
            setPeople(data);
          }}
        >
          Refresh
        </button>
      </section>
    </main>
  );
}

export default App;
