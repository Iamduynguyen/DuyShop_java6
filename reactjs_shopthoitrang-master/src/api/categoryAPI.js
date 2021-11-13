import instance from "./instance";

export const getAllCateLimit = () => {
  const url = "/categories?_sort=id&_order=desc&_limit=3";
  return instance.get(url);
};
export const getAllCate = () => {
    const url = "/categories";
    return instance.get(url);
  };
export const getCate = (id) => {
  const url = `/categories/${id}`;
  return instance.get(url);
};
export const removeCate = (id) => {
  const url = `/categories/${id}`;
  return instance.delete(url);
};
export const editCate = (item) => {
  const url = `/categories/${item.id}`;
  return instance.put(url, item);
};
export const addCate = (item) => {
  const url = "/categories";
  return instance.post(url, item);
};
