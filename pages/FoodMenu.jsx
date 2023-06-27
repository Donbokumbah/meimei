import { useState } from 'react';

const menuData = [
  { id: 1, name: 'Pizza', price: '$10' },
  { id: 2, name: 'Burger', price: '$8' },
  { id: 3, name: 'Salad', price: '$6' },
  { id: 4, name: 'Pasta', price: '$12' },
  { id: 5, name: 'Sushi', price: '$15' },
  { id: 6, name: 'Steak', price: '$20' },
  { id: 7, name: 'Soup', price: '$5' },
  { id: 8, name: 'Sandwich', price: '$7' },
];

const FoodMenu = () => {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(menuData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = menuData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Food Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FoodMenu;
