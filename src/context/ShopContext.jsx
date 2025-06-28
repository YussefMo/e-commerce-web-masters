import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo
} from 'react';
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

  // fetching All Products from API
  const getAllData = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const limit = 10;
      const offset = (page - 1) * limit;
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      );
      const { data } = response;
      const totalCount = 52; // Fake total count
      setAllData(data);
      setCurrentPage(page);
      setTotalPages(Math.ceil(totalCount / limit));
    } catch (err) {
      console.error('Error while fetching data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // fetching all Categories from API
  const getAllCategories = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        'https://api.escuelajs.co/api/v1/categories'
      );
      setAllCategories(data);
    } catch (err) {
      console.error('Error while fetching categories:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // filter data by single category
  const getProductsByCategory = useCallback(async (categoryId) => {
    setLoading(true);
    try {
      let url = 'https://api.escuelajs.co/api/v1/products';
      if (categoryId) {
        url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
      }
      const { data } = await axios.get(url);
      setAllData(data);
    } catch (err) {
      console.error('Error while fetching data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // filter data by multiple selected categories
  const getProductsByMultipleCategories = useCallback(
    async ({ selectedCategories }) => {
      setLoading(true);
      try {
        let allProducts = [];
        for (const id of selectedCategories) {
          const { data } = await axios.get(
            'https://api.escuelajs.co/api/v1/products',
            { params: { categoryId: id } }
          );
          allProducts = [...allProducts, ...data];
        }
        setAllData(allProducts);
      } catch (err) {
        console.error('Error fetching category products:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // filter data by price range
  const getFilteredDataByPrice = useCallback(async ({ maxPrice, minPrice }) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        'https://api.escuelajs.co/api/v1/products',
        { params: { price_min: minPrice, price_max: maxPrice } }
      );
      setAllData(data);
    } catch (err) {
      console.error('Error fetching filtered data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // sorting data
  const sortingData = useCallback(
    (e) => {
      const state = e.target.value;
      let sorted = [...allData];

      switch (state) {
        case 'name(A-Z)':
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          setSort('name(A-Z)');
          break;
        case 'name(Z-A)':
          sorted.sort((a, b) => b.title.localeCompare(a.title));
          setSort('name(Z-A)');
          break;
        case 'price(low-high)':
          sorted.sort((a, b) => a.price - b.price);
          setSort('price(low-high)');
          break;
        case 'price(high-low)':
          sorted.sort((a, b) => b.price - a.price);
          setSort('price(high-low)');
          break;
        default:
          setSort('Default');
          getAllData();
          return;
      }

      setAllData(sorted);
    },
    [allData, getAllData]
  );

  // related products
  const relatedProduct = useCallback(async (categoryId, currentProductId) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
      );
      const filtered = data.filter((item) => item.id !== currentProductId);
      setRelatedProducts(filtered);
    } catch (err) {
      console.error('Error fetching related products:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // show selected item
  const getProductById = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setSelectedItem(data);
        relatedProduct(data.category.id, data.id);
      } catch (err) {
        console.error('Error fetching single product:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [relatedProduct]
  );

  // Memoize context value to avoid re-creating object every render
  const contextValue = useMemo(
    () => ({
      allData,
      loading,
      error,
      allCategories,
      getProductsByCategory,
      getProductsByMultipleCategories,
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
    }),
    [
      allData,
      loading,
      error,
      allCategories,
      getProductsByCategory,
      getProductsByMultipleCategories,
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
    ]
  );

  // Initial load
  useEffect(() => {
    getAllData();
    getAllCategories();
  }, [getAllData, getAllCategories]);

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};