import  { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, getDocs, } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

function MyState(props) {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({
    title: '',
    price: '',
    imageUrl: '',
    category: '',
    description: '',
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
  });

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? 'rgb(17, 24, 39)' : 'white';
  };

  const addProduct = async () => {
    try {
      if (!products.title || !products.price || !products.imageUrl || !products.category || !products.description) {
        throw new Error('Please fill all fields');
      }

      const productRef = collection(fireDB, "products");
      setLoading(true);
      await addDoc(productRef, products);
      toast.success("Product added successfully");
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 800);
      getProductData();
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
      setProducts({
        title: '',
        price: '',
        imageUrl: '',
        category: '',
        description: '',
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
      });
    }
  };

  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time")
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const productsArray = [];
        querySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch products');
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const edithandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async () => {
    try {
      setLoading(true);
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product updated successfully");
      getProductData();
      window.location.href = '/dashboard';
    } catch (error) {
      console.error(error);
      toast.error('Failed to update product');
    } finally {
      setLoading(false);
      setProducts({
        title: '',
        price: '',
        imageUrl: '',
        category: '',
        description: '',
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
      });
    }
  };

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product deleted successfully');
      getProductData();
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete product');
    } finally {
      setLoading(false);
    }
  };
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  useEffect(() => {
    getProductData();
    getOrderData()
    getUserData()

  }, []);

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')
  return (
    <MyContext.Provider value={{ 
      mode, toggleMode, loading, setLoading,
      products, setProducts, addProduct, product, edithandle, updateProduct, deleteProduct, order,user
      ,   searchkey, setSearchkey,filterType, setFilterType,
      filterPrice, setFilterPrice
    }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
