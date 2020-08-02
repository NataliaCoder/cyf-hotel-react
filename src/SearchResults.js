import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {props.tables.map(items => {
            return <th scope="col">{items}</th>;
          })}
          <th scope="col">nights to stay</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, idx) => {
          return (
            <tr scope="row">
              <td>{idx + 1}</td>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment
                  .duration(
                    moment(result.checkOutDate).diff(moment(result.checkInDate))
                  )
                  .days()}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
