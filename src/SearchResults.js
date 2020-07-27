import React from "react";

const SearchResults = props => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {props.tables.map(items => {
            return <th scope="col">{items}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1 result</th>
          <td> // </td>
          <td> // </td>
          <td> // </td>
        </tr>
        <tr>
          <th scope="row">2 result</th>
          <td> // </td>
          <td> // </td>
          <td>// </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
