import axios from "axios";
import useStudent from "./../hooks/useStudent";
import Swal from "sweetalert2";
import {useRef} from "react";

const Student = () => {
  const [student, , search] = useStudent();
  console.log(student);

  const searchRef = useRef(null);

  const handleDelete = (person) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/student/${person._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleSearch = () => {
    console.log(searchRef.current.value);
    search(searchRef.current.value);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="join">
          <input
            ref={searchRef}
            className="input input-bordered join-item"
            placeholder="Search"
          />
          <button
            onClick={handleSearch}
            className="btn join-item rounded-r-full"
          >
            Search Name
          </button>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>index</th>
              <th>image</th>
              <th>name</th>
              <th>age</th>
              <th>gender</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((person, index) => (
              <tr key={person._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={person?.image} alt="Avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{person?.name}</td>
                <td>{person.age}</td>
                <td>{person.gender}</td>
                <th>
                  <button
                    onClick={() => handleDelete(person)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;
