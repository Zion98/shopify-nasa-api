import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import SingleCard from "./components/SingleCard";
import Loader from "./components/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  const getCheckedItems = JSON.parse(localStorage.getItem("checker"));
  const [allData, setAllData] = useState([]);
  const [loading, setloading] = useState(true);
  const [checked, setChecked] = useState(getCheckedItems || []);
  const [date, setDate] = useState("2015-1-1");

  const APIKEY = "8BH8JRatcRhmGdZQvpV60YLqMvoSewK2Ndx1SU9o";

  useEffect(() => {
    setTimeout(() => {
      (async function fetchData() {
        setloading(true);
        const data = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${APIKEY}`
        );
        setAllData(data.data.photos);
        setloading(false);
      })();
    }, 2000);
  }, [date]);

  const checker = (index) => {
    setChecked({ ...checked, [index]: !checked[index] });
    localStorage.setItem("checker", JSON.stringify(checked));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header setDate={setDate} date={date} />
          <Container>
            <main className="App" >
              {allData.length > 0 ? (
                allData.map(({ id, ...otherProps }) => {
                  return (
                    <SingleCard
                      id={id}
                      checker={checker}
                      checked={checked}
                      key={id}
                      {...otherProps}
                    />
                  );
                })
              ) : (
                <div className="nodata">
                  <h2>
                    The requested data has not been captured. Please Refresh or Try again in few
                    minutes.
                  </h2>
                </div>
              )}
            </main>
          </Container>
        </>
      )}
    </>
  );
}

export default App;
