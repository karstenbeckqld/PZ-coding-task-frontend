import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar.tsx";
import CheeseList from "./CheeseList.tsx";
import Footer from "./Footer.tsx";

// Similar to the AddCheese component, the Home component provides a layout for the CheeseList component, so that the list of
// cheeses can be displayed to the user.

const Home = () => {
    return (
        <div>
            <Grid
                templateAreas={`"nav"
                  "main"
                  "footer"`}
                gridTemplateRows={'auto'}
                gridTemplateColumns={'100%'}
                h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem px='20px' area={'nav'}>
                    <NavBar />
                </GridItem>
                <GridItem px='20px' area={'main'}>
                    <CheeseList />
                </GridItem>
                <GridItem px={'20px'} area={'footer'}>
                    <Footer/>
                </GridItem>
            </Grid>
        </div>
    );
};

export default Home;