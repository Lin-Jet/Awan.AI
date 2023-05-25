import React, { useEffect, useState } from 'react';

const GridBack = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0});

  useEffect(() => {
    const updateDimensions = () => {
      const { clientWidth, clientHeight } = document.documentElement;
      setDimensions({ width: clientWidth, height: clientHeight });
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const calculateGridSize = () => {
    const cellWidth = 33; // Adjust this value based on your desired cell width
    const cellHeight = 33; // Adjust this value based on your desired cell height

    const columns = Math.floor(dimensions.width / cellWidth);
    const rows = Math.floor(dimensions.height / cellHeight);

    return { columns, rows };
  };

  const { columns, rows } = calculateGridSize();

  const renderGrid = () => {
    const gridElements = [];

    for (let row = 0; row < rows; row++) {
      const rowElements = [];

      for (let col = 0; col < columns; col++) {
        rowElements.push(
          <span key={`${row}-${col}`} className="grid-element">
            ★
          </span>
        );
      }

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

export default GridBack;
