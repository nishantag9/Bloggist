import React from "react";

const Table = ({ headers, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((headerItem) => (
            <th>{headerItem}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            {row.map((rowItem) => (
              <td>{rowItem}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
