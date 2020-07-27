import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="allCards">
      <div className="card">
        <img
          src="https://www.eblip10.org/portals/96/gcmb-people-make-glasgow-lw093.jpg"
          className="card-img-top"
          alt="Glasgow-img"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.telegraph.co.uk/content/dam/Travel/2018/December/manchester-iStock-815365434.jpg?imwidth=1400"
          className="card-img-top"
          alt="Glasgow-img"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com/" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg"
          className="card-img-top"
          alt="Glasgow-img"
        />
        <div className="card-body">
          <a href="https://visitlondon.com/" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
