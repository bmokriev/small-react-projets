import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState(items);

  // Category selection
  const filterItems = (filter = 'all') => {
    if (filter === 'all') {
      setMenuItems(items);
      return;
    }
    const filteredItems = items.filter((item) => item.category === filter);
    setMenuItems(filteredItems);
  };

  // Category creation
  useEffect(() => {
    const categoriesSet = new Set();
    items.forEach((item) => categoriesSet.add(item.category));
    setCategories([...categoriesSet]);
  }, []);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2 className="title">Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <div className="section-center">
          {menuItems.map((item) => (
            <Menu key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
