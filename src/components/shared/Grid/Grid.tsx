import React from "react";

interface GridProps {
  goToPreviousPage?: () => void;
  goToNextPage?: () => void;
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  children,
  goToPreviousPage,
  goToNextPage,
}) => (
  <div className="container mx-auto">
    <div className="grid grid-cols-3 gap-6 mx-auto ">{children}</div>

    <div className="flex justify-center mt-4 gap-5">
      {goToPreviousPage && (
        <button
          onClick={goToPreviousPage}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
          focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
          me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
         dark:border-gray-700"
        >
          Previous
        </button>
      )}
      {goToNextPage && (
        <button
          onClick={goToNextPage}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
          focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
          me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 
          dark:border-gray-700"
        >
          Next
        </button>
      )}
    </div>
  </div>
);
