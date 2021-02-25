import React from "react";

const Table = ({ headers, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((headerItem, i) => (
            <th key={i}>{headerItem}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((rowItem, i) => (
              <td key={i}>{rowItem}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
