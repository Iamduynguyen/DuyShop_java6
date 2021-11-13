import { useEffect, useState } from "react";
import { addCate, getAllUser, removeUser, editCate } from "../../../api/userAPI";
import { Link } from "react-router-dom";

export default function ListUser(props) {
  const [users,setUsers] = useState([]);

  useEffect(() =>{
    const getUser = async () => {
      try {
        const { data } = await getAllUser();
        setUsers(data);
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  const onRemoveUser = async (id) => {
    try {
      const { data } = await removeUser(id);
      const user = users.filter((item) => item.id !== id);
      setUsers(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <hr />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom text-center">
        <h2 className="h2">Quản lý tài khoản</h2>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/admin/category/add" className="btn btn-sm btn-outline-primary">
            Thêm tài khoản
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) =>{
              return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email} </td>
                <td></td>
                <td></td>
                <td className="text-right">
                  <Link
                    className="btn btn-primary btn-sm ms-1"
                    to={`/admin/category/${item.id}/edit`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm ms-1"
                    onClick={() =>onRemoveUser(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}
