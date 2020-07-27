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
          <td>a</td>
          <td>b</td>
          <td>c</td>
        </tr>
        <tr>
          <th scope="row">1 result</th>
          <td>d</td>
          <td>e</td>
          <td>f</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
