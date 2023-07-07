import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const App = () => {
  const [visibleColumns, setVisibleColumns] = useState([
    "id",
    "col1",
    "col2",
    "col3",
    "col4",
    "col5",
    "col6",
    "col7",
    "col8",
    "col9",
  ]); // Array of initially visible column dataField values

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let visibleColumnCount = 10; // Number of columns to always show

      if (screenWidth < 768) {
        // Hide additional columns if screen width is less than 768px
        visibleColumnCount = Math.max(1, Math.floor((screenWidth - 100) / 100));
      }

      const visibleColumns = [
        "id",
        ...Array.from(Array(visibleColumnCount).keys()).map((index) => `col${index + 1}`),
      ];

      setVisibleColumns(visibleColumns);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = Array.from(Array(80).keys()).map((index) => ({
    id: index + 1,
    col1: `Value ${index + 1}`,
    col2: `Value ${index + 2}`,
    col3: `Value ${index + 3}`,
    col4: `Value ${index + 4}`,
    col5: `Value ${index + 5}`,
    col6: `Value ${index + 6}`,
    col7: `Value ${index + 7}`,
    col8: `Value ${index + 8}`,
    col9: `Value ${index + 9}`,
  }));

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "col1", text: "Column 1" },
    { dataField: "col2", text: "Column 2" },
    { dataField: "col3", text: "Column 3" },
    { dataField: "col4", text: "Column 4" },
    { dataField: "col5", text: "Column 5" },
    { dataField: "col6", text: "Column 6" },
    { dataField: "col7", text: "Column 7" },
    { dataField: "col8", text: "Column 8" },
    { dataField: "col9", text: "Column 9" },
  ];

  const visibleColumnsData = columns.filter((column) => visibleColumns.includes(column.dataField));

  return (
    <div className="responsive-table-container">
      <BootstrapTable
        keyField="id"
        data={data}
        columns={visibleColumnsData}
        bordered={false}
        hover
        responsive
        headerClasses="table-header"
        wrapperClasses="table-responsive"
        rowClasses="table-row"
      />
    </div>
  );
};

export default App;
