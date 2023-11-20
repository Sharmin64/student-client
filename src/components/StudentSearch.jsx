import {useEffect, useRef, useState} from "react";

const StudentSearch = () => {
  const [search, setSearch] = useState("");

  const searchRef = useRef(null);
  useEffect(() => {
    fetch(`http://localhost:5000/student?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
 
  }, [search]);


  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
 
  };



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
