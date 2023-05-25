import React from 'react';

const Grid = ({ rows, columns }) => {
  const renderGrid = () => {
    const gridElements = [];

    for (let row = 0; row < rows; row++) {
      const rowElements = []; // Array to hold elements of the current row

      for (let col = 0; col < columns; col++) {
        rowElements.push(
          <span key={`${row}-${col}`} className="grid-element">
            ★
          </span>
        );
      }

      // Wrap the elements of the current row in a div
      gridElements.push(
        <div key={`row-${row}`} className="grid-row">
          {rowElements}
        </div>
      );
    }

    return gridElements;
  };

  return <div className="grid-container">{renderGrid()}</div>;
};

export default Grid;
