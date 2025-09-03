"use client";

import { useState } from "react";
import { CategoryDropdown } from "./index";

const CategoryDropdownWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState("Video category 01");
  return (
    <CategoryDropdown
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
    />
  );
};

export default CategoryDropdownWrapper;
