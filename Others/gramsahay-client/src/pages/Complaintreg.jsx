import { useState } from "react";

const Complaintreg = () =>{
    const [complaint, setComplaint] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //send the data to server code to be writtrn here
      console.log("Complaint submitted:", complaint);
      setComplaint("");
    };

    return (
      <div className="complaint-form-container">
        <h2>Complaint Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="complaint-textarea"
            placeholder="Enter your complaint here..."
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Complaintreg;