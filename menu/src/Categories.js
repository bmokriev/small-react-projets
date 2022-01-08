import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems('all')}>
        all
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className="filter-btn"
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
