import instance from "./instance";

export const getAll = () => {
  const url = "/products?_expand=category";
  return instance.get(url);
};
export const getAllNext = (index) => {
  const url = `/products?_expand=category&_page=${index}&_limit=4`;
  return instance.get(url);
};
export const getProductSearch = (value) => {
  const url = `/products?name_like=${value.name}`;
  return instance.get(url);
};
export const getAllCateId = (id) => {
  const url = `/products?_expand=category&categoryId=${id}`;
  return instance.get(url);
};
export const getAllCateIdNe = (categoryId,id) => {
  const url = `/products?_expand=category&categoryId=${categoryId}&id_ne=${id}`;
  return instance.get(url);
};
export const getAllLimit = () => {
  const url = "/products?_expand=category&_sort=price&_order=desc&_limit=4";
  return instance.get(url);
};
export const getAllSort = () => {
  const url = "/products?_expand=category&_sort=price&_order=asc";
  return instance.get(url);
};
export const getAllRevert = () => {
  const url = "/products?_expand=category&_sort=price&_order=desc";
  return instance.get(url);
};
export const get = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const getExpand = (id) => {
  const url = `/products?categoryId=${id}`;
  return instance.get(url);
};
export const remove = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
export const edit = (item) => {
  const url = `/products/${item.id}`;
  return instance.put(url, item);
};
export const add = (item) => {
  const url = "/products";
  return instance.post(url, item);
};
