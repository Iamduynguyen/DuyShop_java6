import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {getAll} from "../../../api/productAPI";
export default function ListProduct(props) {
  console.log('props',props)
  const [products,setProducts] = useState([]);
  useEffect(() =>{
    const getProduct = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
        console.log('pro',data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [props]);
  return (
    <div>
      <hr />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Quản lý sản phẩm</h2>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/admin/product/add" className="btn btn-sm btn-outline-primary">
            Thêm sản phẩm
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm " >
        {/* style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} */}
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng thái</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody >
            {products.map((item, index) => (
              <tr key={index} >
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category.name}</td>
                <td>
                  <img src={item.image} width="100px" height="120px"></img>
                  </td>
                <td>{item.price}</td>
                
                <td>{item.status === "true" ? "còn hàng" : "hết hàng"}</td>

                <td className="text-right">
                  <Link
                    className="btn btn-primary btn-sm ms-1"
                    to={`/admin/product/${item.id}/edit`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm ms-1"
                    onClick={() => props.onRemove(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
