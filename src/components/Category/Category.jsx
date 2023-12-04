import React from "react";

const Category = ({ category }) => {
  const { id, logo, category_name, availability } = category;

  return (
    <>
      <div className="card card-compact dark:border dark:bg-gray-800 dark:border-gray-700 shadow-xl w-[311px] h-[243px] p-6 bg-purple-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src={logo}
            alt=""
            className="bg-purple-100 p-3 align-item-start rounded-md w-16 h-16"
          />

        <div className="card-body">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {category_name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {availability}
          </p>
        </div>
      </div>
    </>
  );
};

export default Category;
