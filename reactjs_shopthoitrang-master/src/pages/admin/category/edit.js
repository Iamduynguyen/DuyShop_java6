import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { getCate,editCate } from "../../../api/categoryAPI";

const EditCategoryForm = (props) => {
    const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const history = useHistory();
  const [categories, setCategories] = useState({});
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getCate(id);
        setCategories(data);
        console.log('cate',categories);
        console.log('id',id);
        reset(data);
      } catch (error) {}
    };
    getCategory();
  }, []);

  const onSubmit = async (data) => {
    const newItem = {
      id,
      ...data
    };
    console.log(newItem);
    try {
        const { data } = await editCate(newItem)
        setCategories([...categories, data]);
        reset(data)
    } catch (error) {
        console.log(error);
    }       
    history.push("/admin/category");
  };
  return (
    <>
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Sửa Danh mục</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên danh mục</label>
          <input
            type="text"
            defaultValue={categories.name}
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
            defaultValue={categories.image}
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
export default EditCategoryForm;