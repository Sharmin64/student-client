import {useEffect, useState} from "react";

const useStudent = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/student")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudent(data);
        setLoading(false);
      });
  }, []);
  return [student, loading];
};

export default useStudent;
