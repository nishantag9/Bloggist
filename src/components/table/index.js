import React from "react";

const Table = ({ headers, rows }) => {
  return (
    <table className="g-table">
      <thead>
        <tr>
          {headers.map((headerItem, i) => (
            <th className="g-table__header-cell" key={i}>
              {headerItem}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((rowItem, i) => (
              <td className="g-table__cell" key={i}>
                {rowItem}
              </td>
            ))}
          </tr>
        ))}
        {!rows.length && (
          <tr>
            <td className="g-table__cell g-table__cell--no-data" colSpan={headers.length}>
              NO DATA FOUND
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
