import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const categories = [
  {
    id: 87,
    name: 'Clothes',
    image: '/cloth.jpeg'
  },
  {
    id: 88,
    name: 'Electronics',
    image: '/elc.jpeg'
  },
  {
    id: 89,
    name: 'Furniture',
    image: '/furn.jpeg'
  },
  {
    id: 90,
    name: 'Shoes',
    image: '/sho.jpeg'
  },
  {
    id: 91,
    name: 'Miscellaneous',
    image: '/miscell.jpg'
  }
];

function Category() {
  const navigate = useNavigate();

  const { getProductsByCategory } = useContext(ShopContext);

  const handleCategoryClick = (categoryId) => {
    getProductsByCategory(categoryId);
    navigate(`/shop?category=${categoryId}`);
  };

  return (
    <div className="my-10 grid grid-cols-3 md:grid-cols-5 border-1 border-gray-300">
      {categories.map((category) => (
        <div
          key={category.id}
          className="cursor-pointer border-1 border-gray-300 py-5 text-center"
          onClick={() => handleCategoryClick(category.id)}
        >
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="mx-auto mb-2 w-8/10 rounded-lg"
          />
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default Category;
