import { lazy } from "react";

const Home = lazy(()=> import('../router/Home'));
const About = lazy(()=> import('../router/About'));
const Shop = lazy(()=> import('../router/Shop'));
const Contact = lazy(()=> import('../router/Contact'));
const Blogs = lazy(()=> import('../router/Blogs'));
const Cart = lazy(()=> import('../router/Cart'));
const CheckOut = lazy(()=> import('../router/CheckOut'));
const SingleProduct = lazy(()=> import('../router/SingleProduct'));
const ProductComparison = lazy(()=> import('../router/ProductComparison'));



export const routeData = [
    {
        id: 1,
        to: '/',
        text: 'Home',
        element: <Home />
    },
    {
        id: 2,
        to: '/shop',
        text: 'Shop',
        element: <Shop />
    },
    {
        id: 3,
        to: '/about',
        text: 'About',
        element: <About />
    },
    {
        id: 4,
        to: '/contact',
        text: 'Contact',
        element: <Contact />
    },
    {
        id: 5,
        to: '/blogs',
        text: 'Blogs',
        element: <Blogs />
    },
    {
        id: 6,
        to: '/cart',
        text: 'Cart',
        element: <Cart />
    },
    {
        id: 7,
        to: '/singleproduct',
        text: 'Single Product',
        element: <SingleProduct />
    },
    {
        id: 8,
        to: '/Productcomparison',
        text: 'Product comparison',
        element: <ProductComparison />
    },
    {
        id: 9,
        to: '/Checkout',
        text: 'Check Out',
        element: <CheckOut />
    }
]