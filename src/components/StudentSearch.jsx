import axios from "axios";
import {useEffect, useRef, useState} from "react";
//import useStudent from "../hooks/useStudent";

const StudentSearch = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const searchRef = useRef(null);
  useEffect(() => {
    fetch("http://localhost:5000/student")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // Fetch data from your backend when the component mounts
    //fetchData();
  }, []);

  //const fetchData = async () => {
  //  try {
  //    const response = await axios.get(`http://localhost:5000/student/:${_id}`);
  //    setData(response.data);
  //    setFilteredData(response.data);
  //  } catch (error) {
  //    console.error("Error fetching data:", error);
  //  }
  //};

  const handleSearch = () => {
    console.log(searchRef.current.value);
    // Filter data based on the search term
    //const filtered = data.filter((person) =>
    //  person.name.toLowerCase().includes(searchTerm.toLowerCase())
    //);
    //setFilteredData(filtered);
  };

  //const [student] = useStudent();
  //console.log(student);
  //const [searchName, setSearchName] = useState("");
  //const [searchResults, setSearchResults] = useState([]);
  //const [error, setError] = useState("");
  //console.log(error, searchResults);
  //const handleSearch = async () => {
  //  //e.preventdefault();

  //  try {
  //    const result = {searchName};
  //    const response = await fetch(
  //      `http://localhost:5000/student/search?${new URLSearchParams(
  //        result
  //      ).toString()}`
  //    );
  //    const json = await response.json();
  //    if (!response.ok) {
  //      setError(json.error);
  //    }
  //    if (response.ok) {
  //      setError("");
  //      setSearchName("");
  //      setSearchResults("");
  //    }
  //    //  // Replace 'your-api-endpoint' with the actual endpoint for searching students
  //    //  const response = await axios.get(
  //    //    `http://localhost:5000/students?name=${searchName}`
  //    //  );
  //    //  setSearchResults(response.data);
  //  } catch (error) {
  //    console.error("Error searching students:", error);
  //  }
  //};
  return (
    <div>
      <h1>Student Search</h1>
      <div className="join">
        <input
          ref={searchRef}
          className="input input-bordered join-item"
          placeholder="Search"
        />
        <button onClick={handleSearch} className="btn join-item rounded-r-full">
          Search Name
        </button>
      </div>
    </div>
  );
};

export default StudentSearch;
