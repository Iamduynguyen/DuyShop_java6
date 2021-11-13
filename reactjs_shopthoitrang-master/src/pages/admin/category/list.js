import { useEffect, useState } from "react";
import { addCate, getAllCate, removeCate, editCate } from "../../../api/categoryAPI";
import { Link } from "react-router-dom";

export default function ListCategory(props) {
  const [categories,setCategories] = useState([]);

  useEffect(() =>{
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data);
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);
  const onRemoveCate = async (id) => {
    try {
      const { data } = await removeCate(id);
      const newProducts = categories.filter((item) => item.id !== id);
      setCategories(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <hr />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom text-center">
        <h2 className="h2">Quản lý danh mục</h2>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/admin/category/add" className="btn btn-sm btn-outline-primary">
            Thêm danh mục
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              
              <th scope="col">Ảnh</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            
            {categories.map((item, index) =>{
              return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td><img src={item.image} width="100px" height="120px"></img>
                  </td>
                <td className="text-right">
                  <Link
                    className="btn btn-primary btn-sm ms-1"
                    to={`/admin/category/${item.id}/edit`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm ms-1"
                    onClick={() =>onRemoveCate(item.id)}
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
