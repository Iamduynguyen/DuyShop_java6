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
const AddCategoryForm = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        
        try {
          const newItem = {
            id: Math.random().toString(7).substring(5),
            
            // price: Number(price),
            ...data,
          };
            const { data1 } = await addCate(newItem)
            
            setCategories([...categories, data1]);
            
        } catch (error) {
            console.log(error);
        }       
        history.push("/admin/category");

    };
  
  return (
    <>
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Thêm Danh mục</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên danh mục</label>
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
        <button type="submit" className="btn btn-primary">
          Thêm danh mục
        </button>
      </form>
    </>
  );
};

export default AddCategoryForm;
