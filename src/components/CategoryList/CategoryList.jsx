import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
}, [])

  return (
    <>
      <div className="my-10">
      <h2 className="text-5xl text-center font-semibold">Job Category List</h2>
      <p className="text-center my-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex flex-wrap gap-5 justify-around">
      {
        categories.map(category => <Category key={category.id} category={category}></Category>)
      }
      </div>
      </div>
    </>
  );
};

export default CategoryList;
