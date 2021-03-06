import React from 'react';

const Menu = ({ desc, img, price, title }) => {
  return (
    <article className="menu-item">
      <img className="photo" alt={title} src={img} />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">{price}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;
