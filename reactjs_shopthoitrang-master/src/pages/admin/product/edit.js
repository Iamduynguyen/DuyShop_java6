import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";
import { getAllCate } from "../../../api/categoryAPI";
const EditProductForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        reset(data);
      } catch (error) {}
    };
    getProduct();
  }, []);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        console.log("aaaa", data);
        setCategories(data);
        console.log("cate", categories);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);
  const onSubmit = (data) => {
    const newItem = {
      id,
      ...data,
    };
    console.log(newItem);
    props.onEdit(newItem);
    history.push("/admin/product");
  };

  return (
    <>
      {/* {JSON.stringify(product)} */}
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">cập nhật sản phẩm</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            defaultValue={product.name}
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
        </div>
        <div className="mb-3">
          <div className="form-group">
            <label>Tên danh mục</label>
            <br />
            <select defaultValue={"categoryId"}
              id="categoryId"
              {...register("categoryId", { required: true })}
            >
              {categories.map((item, index) => (
                <option
                  key={index}
                  value={item.id}
                  className="form-control"
                  // {item.id==product.categoryId ? selected:item.name}
                  // selected
                  
                  
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Ảnh</label>
          <input
            type="text"
            defaultValue={product.image}
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            type="number"
            defaultValue={product.price}
            className="form-control"
            {...register("price", { required: true })}
          />
          {errors.price && <span className="">required </span>}
        </div>
        <div className="mb-3">
          <select
            className="form-control"
            {...register("status")}
            defaultValue={product.status}
          >
            <option value="true">Còn hàng</option>
            <option value="false">Hết hàng</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </>
  );
};
export default EditProductForm;
