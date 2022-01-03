import React from 'react';

const ListItem = ({ person }) => {
  return (
    <article className="person">
      <img src={person.image} alt="avatar" />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
    </article>
  );
};

export default ListItem;
