import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { DarkModeContext } from "../context/DarkModeContext";

const Home = () => {
    const [productsData, setProductsData] = useState([]);
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProductsData(data?.products);
        }
        fetchData();
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <button
                    className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold"
                    onClick={toggleDarkMode}
                >
                    Toggle Dark Mode
                </button>
                <h1 className="dark:bg-gray-700 dark:text-white text-center text-[30px] font-[700] py-[20px] text-blue-500"> Trending Products </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
                    {productsData?.slice(0, 10)?.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <a className="dark:bg-gray-700 dark:text-white px-4 py-3 text-[15px] text-white bg-blue-400 hover:bg-blue-600 rounded-md shadow-md my-5" href="/products">All Products</a>
                </div>
            </div>
        </>
    );
}

export default Home;
