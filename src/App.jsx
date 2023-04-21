import arkLogo from "./assets/arkLogo.png";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  //const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date());
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000));
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [lat, setLat] = useState(0.0);
  const [long, setLong] = useState(0.0);
  const [server, setServer] = useState("");
  const [comment, setComment] = useState("");

  const handleDaysChange = (event) => {
    setDays(parseInt(event.target.value));
  };

  const handleHoursChange = (event) => {
    setHours(parseInt(event.target.value));
  };

  const handleMinutesChange = (event) => {
    setMinutes(parseInt(event.target.value));
  };

  const handleAddTimestamp = () => {
    const seconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60;
    const message = `<t:${
      timestamp + seconds
    }:R> coord: {${lat} : ${long}} Server: {${server}} ${comment}`;
    navigator.clipboard.writeText(message);
  };

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
      <>
        <div>
          <a
            href="https://ark.wiki.gg/wiki/ARK_Survival_Evolved_Wiki"
            target="_blank"
          >
            <img src={arkLogo} className="logo" alt="Ark logo" />
          </a>
        </div>
        <h1>Ark Time Stamp</h1>
        <div className="card">
          <h2>{"Date: " + date.toLocaleString()}</h2>
          <h2>{"Current Timestamp: " + timestamp}</h2>
          <button onClick={handleCopyClick}>Copy timestamp</button>
        </div>
      </>
      <>
        <div className="container">
          <div className="timestamp-container">
            
            <div className="timestamp-inputs">
              <div>
                <label htmlFor="days-input">Days:</label>
                <input
                  id="days-input"
                  type="number"
                  min="0"
                  max="365"
                  value={days}
                  onChange={handleDaysChange}
                />
              </div>
              <div>
                <label htmlFor="hours-input">Hours:</label>
                <input
                  id="hours-input"
                  type="number"
                  min="0"
                  max="23"
                  value={hours}
                  onChange={handleHoursChange}
                />
              </div>
              <div>
                <label htmlFor="minutes-input">Minutes:</label>
                <input
                  id="minutes-input"
                  type="number"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={handleMinutesChange}
                />
              </div>
            </div>
          </div>
          <div className="form-container">
            <div>
              <label htmlFor="lat-input">Latitude:</label>
              <input
                id="lat-input"
                type="number"
                step="0.01"
                min="0"
                max="100"
                value={lat}
                onChange={(event) => setLat(parseFloat(event.target.value))}
              />
            </div>
            <div>
              <label htmlFor="long-input">Longitude:</label>
              <input
                id="long-input"
                type="number"
                step="0.01"
                min="0"
                max="100"
                value={long}
                onChange={(event) => setLong(parseFloat(event.target.value))}
              />
            </div>
            <div>
              <label htmlFor="server-input">Server:</label>
              <input
                id="server-input"
                type="text"
                value={server}
                onChange={(event) => setServer(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="comment-input">Comment:</label>
              <input
                id="comment-input"
                type="text"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
            </div>
          </div>
        </div>
      </>
      <button onClick={handleAddTimestamp}>Copy added Timestamp</button>
    </>
  );
}

export default App;
