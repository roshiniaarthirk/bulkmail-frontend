import "./App.css";
import { useState } from "react";
import * as XLSX from "xlsx";

function App() {

  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const handleFile = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (evt) => {

      const data = evt.target.result;

      const workbook = XLSX.read(data, { type: "binary" });

      const sheetName = workbook.SheetNames[0];

      const sheet = workbook.Sheets[sheetName];

      const excelData = XLSX.utils.sheet_to_json(sheet);

      setTotal(excelData.length);

    };

    reader.readAsBinaryString(file);

  };

  const handleSend = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      alert("Emails Sent Successfully");

    }, 3000);

  };

  return (
    <div className="container">

      <div className="header">
        <h1>Bulkmail</h1>
      </div>

      <div className="subheader">
        <h2>
          We can help your business grow by sending bulk emails at once.
        </h2>
      </div>

      <div className="drag">
        <h2>Drag and Drop Excel File</h2>
      </div>

      <textarea
        placeholder="Enter the email text....."
      ></textarea>

      <div className="filebox">
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFile}
        />
      </div>

      <h2>Total Emails in the file : {total}</h2>

      <button onClick={handleSend}>
        {loading ? "Sending..." : "Send"}
      </button>

    </div>
  );
}

export default App;