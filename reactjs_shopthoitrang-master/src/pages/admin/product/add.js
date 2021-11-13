import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import {
  addCate,
  getAllCate,
  removeCate,
  editCate,
} from "../../../api/categoryAPI";
import { Link } from "react-router-dom";
const AddProductForm = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        console.log('aaaa',data)
        setCategories(data);
        console.log('cate',categories);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.price=Number(data.price)
    const newItem = {
      id: Math.random().toString(7).substring(5),
      
      // price: Number(price),
      ...data,
    };
    console.log(newItem);
    props.onAdd(newItem);
    history.push("/admin/product");
  };
  return (
    <>
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Thêm sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
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
            <select id="categoryId" {...register("categoryId", { required: true })}>
              {categories.map((item, index) => (               
                <option key={index}
                  value={item.id}
                  className="form-control"
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
            className="form-control"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
        </div>
        <div className="mb-3">
          <select className="form-control" {...register("status")}>
            <option value="true">Còn hàng</option>
            <option value="false">Hết hàng</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </>
  );
};

export default AddProductForm;
