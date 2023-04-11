import React, { useState } from "react";

const Pagenation = ({ moviesData, pageHandler }) => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  console.log(selectedNumber);

  const onCLickPageNumber = (page) => {
    pageHandler(page);
    setSelectedNumber(page);
  };
  let pageNumber = [];
  for (let i = 1; i < Math.ceil(moviesData.length / 12); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="my-6">
      {pageNumber.map((eachNumber) =>
        selectedNumber === eachNumber ? (
          <button
            className="px-3 py-2 bg-slate-900 mx-2 text-slate-50 rounded-md"
            onClick={() => onCLickPageNumber(eachNumber)}
            type="button"
          >
            {eachNumber}
          </button>
        ) : (
          <button
            className="px-3 py-2 bg-slate-500 mx-2 text-slate-50 rounded-md"
            onClick={() => onCLickPageNumber(eachNumber)}
            type="button"
          >
            {eachNumber}
          </button>
        )
      )}
    </div>
  );
};

export default Pagenation;
