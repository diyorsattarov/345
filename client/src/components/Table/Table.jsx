import React from 'react';

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>30</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
