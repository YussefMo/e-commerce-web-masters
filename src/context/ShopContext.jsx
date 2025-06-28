import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // fetching All Products form api
  const getAllData = async (page = 1) => {
    setLoading(true);
    try {
      const limit = 10;
      const offset = (page - 1) * limit;
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      );
      const { data } = response;

      // Fake total count since the API doesn't provide it
      const totalCount = 52;
      setAllData(data);
      setCurrentPage(page);
      setTotalPages(Math.ceil(totalCount / limit));
    } catch (err) {
      console.error('Error while fetching data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }

  };

  // fetching all Categories from api
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        'https://api.escuelajs.co/api/v1/categories'
      );
      setAllCategories(data);
    } catch (err) {
      console.error('Error while fetching data:', err);
      setError(err);
    } finally {
      setLoading(false);


    // filterData by Category
    const getProductsByCategory = async (categoryId) => {
        setLoading(true);
        try {
            let url = "https://api.escuelajs.co/api/v1/products";
            if (categoryId) {
                url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
            }
            const { data } = await axios.get(url);
            setAllData(data);
        } catch (err) {
            console.error("Error while fetching data:", err);
            setError(err);
        } finally {
            setLoading(false);
        }

    }
  };

  // filterData by Category
  const getProductsByCategory = async ({ selectedCategories }) => {
    try {
      let allProducts = [];

      // لكل categoryId اعمل طلب بيانات
      for (const id of selectedCategories) {
        const { data } = await axios.get(
          'https://api.escuelajs.co/api/v1/products',
          {
            params: { categoryId: id }
          }
        );
        allProducts = [...allProducts, ...data];
      }

      setAllData(allProducts);
    } catch (err) {
      console.error('Error fetching category products:', err);
    }
  };

  // filterData by Price Range
  const getFilteredDataByPrice = async ({ maxPrice, minPrice }) => {
    try {
      const { data } = await axios.get(
        'https://api.escuelajs.co/api/v1/products',
        {
          params: {
            price_min: minPrice,
            price_max: maxPrice
          }
        }
      );
      setAllData(data);
    } catch (err) {
      console.error('Error fetching filtered data:', err);
    }

  };

  // this function to sorting data in select
  function sortingData(e) {
    const state = e.target.value;

    switch (state) {
      case 'name(A-Z)':
        allData.sort((a, b) => {
          return a.title > b.title ? 1 : -1;
        });
        setSort('name(A-Z)');
        setAllData([...allData]);
        break;

      case 'name(Z-A)':
        allData.sort((a, b) => {
          return a.title < b.title ? 1 : -1;
        });
        setSort('name(Z-A)');
        setAllData([...allData]);
        break;

      case 'price(low-high)':
        allData.sort((a, b) => {
          return a.price - b.price;
        });
        setSort('price(low-high)');
        setAllData([...allData]);
        break;

      case 'price(high-low)':
        allData.sort((a, b) => {
          return b.price - a.price;
        });
        setSort('price(high-low)');
        setAllData([...allData]);
        break;

      default:
        setSort('Default');
        getAllData();
    }
  }

  //show selected item
  const getProductById = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setSelectedItem(data);
      setRelated(data.category.id);
    } catch (err) {
      console.error('Error fetching single product:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  //related products
  const relatedProduct = async (categoryId, currentProductId) => {
    try {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
      );

      const filtered = data.filter((item) => item.id !== currentProductId);
      setRelatedProducts(filtered);
    } catch (err) {
      console.error('Error fetching related products:', err);
      setError(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        allData,
        loading,
        error,
        allCategories,
        getProductsByCategory,
        getFilteredDataByPrice,
        sort,
        sortingData,
        getAllData,
        currentPage,
        totalPages,
        selectedItem,
        getProductById,
        relatedProduct,
        relatedProducts
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};



    useEffect(() => {
        getAllData();
        getAllCategories();
    }, []);

    return (
        <ShopContext.Provider value={{ allData, loading, error, allCategories, getProductsByCategory, getFilteredDataByPrice, sort, sortingData, getAllData, currentPage, totalPages }}>
        {children}
        </ShopContext.Provider>
    )
}

