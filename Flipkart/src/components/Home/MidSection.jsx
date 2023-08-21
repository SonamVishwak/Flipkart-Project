import { Grid, styled } from '@mui/material';
import { imageURL } from "../../constants/data";


const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`;

const Image = styled('img')(({ theme }) => ({
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));
const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Wrapper item lg={12} md={12} xs={12} container>
                {
                    imageURL?.map((image, index) => (
                        <Grid key={index} item lg={4} ms={4} sm={12} xs={12}>
                            <img key={index} src={image} alt="image" style={{ width: "100%" }} />
                        </Grid>
                    ))
                }
            </Wrapper>
            <Image src={url} alt="covid" />
        </>
    )
}
export default MidSection;