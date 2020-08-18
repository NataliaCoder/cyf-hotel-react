import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data =>
        setBookings(
          data.filter(
            record =>
              record.firstName.includes(searchVal) ||
              record.surname.includes(searchVal)
          )
        )
      );
    //  setBookings(bookings.filter(record =>
    //   (record.firstName.includes(searchVal) || record.surname.includes(searchVal))));
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          tables={[
            "#",
            "id",
            "title",
            "first name",
            "surname",
            "email",
            "room id",
            "check in date",
            "check out date"
          ]}
          results={bookings}
        />
      </div>
    </div>
  );
};

export default Bookings;
