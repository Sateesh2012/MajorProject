
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector from react-redux
import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/herosection/HeroSection';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonials/Testimonial';
import Track from '../../components/track/Track';
// import { addToCart, deleteFromCart } from '../../redux/CartSlice';
import { Link } from 'react-router-dom';

function Home() {
  // const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.items); // Assuming cart.items is where you store the items in your state

  console.log(cartItem);

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // };

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"));
  // };

  return (
    <Layout>
    
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
