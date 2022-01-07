import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ info, title }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowContent(!showContent)}>
          {showContent ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showContent && <p>{info}</p>}
    </article>
  );
};

export default Question;
