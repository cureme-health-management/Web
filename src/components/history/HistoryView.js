import React from "react";
import HistoryListItem from "./HistoryListItem";

function HistoryView() {
  const medicines = ['paracetamol', 'abracoir']
  return (
    <div className="container pt-2">
      <h5 className="text">History</h5>
        <HistoryListItem id={35494565443} medicines={medicines} />
        <HistoryListItem id={645614154} medicines={medicines} />
        <HistoryListItem id={464564+646} medicines={medicines} />
        <HistoryListItem id={5146584651564684} medicines={medicines} />
    </div>
  );
}

export default HistoryView;
