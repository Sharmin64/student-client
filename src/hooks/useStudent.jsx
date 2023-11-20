import {useEffect, useState} from "react";

const useStudent = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/student?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudent(data);
        setLoading(false);
        setSearch(data);
      });
  }, [search]);
  return [student, loading, search];
};

export default useStudent;
