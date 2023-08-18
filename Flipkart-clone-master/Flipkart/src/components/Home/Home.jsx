import { useEffect } from 'react'
import { Box, styled } from "@mui/system";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
const Component = styled(Box)`
padding:10px 10px;
background:#f2f2f2;
`

const Home = () => {
    const getProduct = useSelector(state => state.getProducts);
    const { products } = getProduct; //object destructuring concept
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                {
                    products && products.length !== 0 &&
                    <>
                        <MidSlide products={products} title="Deal of the day" timer={true}
                            multi={true} />

                        <MidSection />

                        <Slide
                            products={products}
                            title='Discounts for You'
                            timer={false}
                            multi={true}
                        />
                        <Slide
                            products={products}
                            title='Suggested Items'
                            timer={false}
                            multi={true}
                        />
                        <Slide
                            products={products}
                            title='Top Selection'
                            timer={false}
                            multi={true}
                        />
                        <Slide
                            products={products}
                            title='Recommended Items'
                            timer={false}
                            multi={true}
                        />
                    </>
                }
            </Component>
        </>
    )
}
export default Home;