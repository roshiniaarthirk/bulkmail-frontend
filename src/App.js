import "./App.css";

function App() {
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
        <input type="file" />
      </div>

      <h2>Total Emails in the file : 0</h2>

      <button>Send</button>

    </div>
  );
}

export default App;
