import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 my-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 shadow-md rounded-md ${
          currentPage === 1
            ? "dark:text-colors-white text-colors-dark-blue cursor-not-allowed "
            : "bg-colors-very-light-gray text-gray-700 dark:text-colors-white hover:bg-gray-100 dark:bg-colors-dark-blue"
        }`}
      >
        Previous
      </button>
      <span className="text-colors-dark-blue dark:text-colors-very-light-gray">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 shadow-md rounded-md ${
          currentPage === totalPages
            ? "text-colors-white cursor-not-allowed "
            : "bg-colors-very-light-gray text-gray-700 dark:text-colors-white hover:bg-gray-100 dark:bg-colors-dark-blue"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
