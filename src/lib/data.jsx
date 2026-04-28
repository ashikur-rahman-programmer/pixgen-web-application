export const fetchData = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};
export const fetchCategories = async () => {
  const res = await fetch("http://localhost:3000/category.json");
  const data = await res.json();
  return data;
};
