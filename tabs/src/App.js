import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Article from './Article';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [tabsData, setTabsData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setTabsData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const selectActive = (id) => {
    setActiveTab(id);
  };

  if (tabsData.length < 1) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>;
      </section>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {tabsData.map((item, index) => (
            <button
              onClick={() => selectActive(index)}
              key={item.id}
              className={`job-btn ${
                index === activeTab ? 'active-btn' : 'inactive'
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>

        <Article {...tabsData[activeTab]} />
      </div>
      <button className="btn">more info</button>
    </section>
  );
}

export default App;
