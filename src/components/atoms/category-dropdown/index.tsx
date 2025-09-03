"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface CategoryDropdownProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  className?: string;
}

const videoCategories = [
  "Video category 01",
  "Video category 02",
  "Video category 03",
  "Video category 04",
  "Video category 05",
  "Video category 06",
  "Video category 07",
];

export function CategoryDropdown({
  selectedCategory = "Video category 01",
  onCategoryChange,
  className = "",
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategorySelect = (category: string) => {
    onCategoryChange?.(category);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, category?: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (category) {
        handleCategorySelect(category);
      } else {
        setIsOpen(!isOpen);
      }
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className={`dropdown-header ${className}`}>
      <div className="container mx-auto px-4">
        <div className="dropdown-header__inner">
          <div
            ref={dropdownRef}
            className="relative inline-block text-left max-w-[634px] w-full"
          >
            {/* Dropdown Toggle */}
            <button
              type="button"
              className={cn(
                "dropdown-select__toggle inline-flex items-center !justify-between w-full min-w-[200px] px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:border-1 focus:border-border-color transition-all duration-200",
                isOpen && "!rounded-b-none !rounded-t-2xl !bg-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
              onKeyDown={(e) => handleKeyDown(e)}
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <span className="text-gray-800">{selectedCategory}</span>
              <ChevronDown
                className={`ml-2 h-4 w-4 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown List */}
            {isOpen && (
              <div className="dropdown-list absolute left-0 z-10 w-full !min-w-full origin-top-left rounded-b-[20px] !bg-white shadow-lg border-t-1 border-border-color focus:outline-none">
                <div
                  className="px-2 my-1 !min-w-full"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {videoCategories.map((category, index) => (
                    <button
                      key={category}
                      type="button"
                      className={`block w-full px-4 py-[10px] rounded-full text-left text-base leading-8 transition-colors duration-150 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${
                        category === selectedCategory
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-700"
                      }`}
                      role="menuitem"
                      onClick={() => handleCategorySelect(category)}
                      onKeyDown={(e) => handleKeyDown(e, category)}
                      tabIndex={0}
                    >
                      <span className="block truncate">{category}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
