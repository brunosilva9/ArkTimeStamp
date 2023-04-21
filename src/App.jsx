
import arkLogo from "./assets/arkLogo.png"
import "./App.css";
import { useState, useEffect } from 'react';


function App() {
  //const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date());
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      setDate(currentDate);
      setTimestamp(Math.floor(currentDate.getTime() / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function handleCopyClick() {
    navigator.clipboard.writeText(timestamp);
  }

  return (
    <>
      <div>
        <a href="https://ark.wiki.gg/wiki/ARK_Survival_Evolved_Wiki" target="_blank">
          <img src={arkLogo} className="logo" alt="Ark logo" />
        </a>
      </div>
      <h1>Ark Time Stamp</h1>
      <div className="card">
      <h2>{"Date: "+date.toLocaleString()}</h2>
      <h2>{"Current Timestamp: "+timestamp}</h2>
      <button onClick={handleCopyClick}>Copy timestamp</button>
      </div>
    </>
  );
}

export default App;
