import { Box, Button, Badge, styled, Typography } from "@mui/material";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../Login/LoginDialog";
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from "./Profile";
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '49px !important',
        fontSize: '16px',
        // textDecoration: 'none',
        // // color: '#FFFFFF',
        alignItem: 'center',

    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }

}));


const LoginButton = styled(Button)`
background:#fff;
color:#2874f0;
text-transform:none;
// padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
`


const CustomButton = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {account ?
                <Profile account={account} setAccount={setAccount} />
                :
                <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }

            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}
export default CustomButton;