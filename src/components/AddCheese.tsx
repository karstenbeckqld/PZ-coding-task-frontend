import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar.tsx";
import CheeseAdder from "./CheeseAdder.tsx";
import Footer from "./Footer.tsx";

const AddCheese = () => {
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
                    <CheeseAdder />
                </GridItem>
                <GridItem px={'20px'} area={'footer'}>
                    <Footer />
                </GridItem>
            </Grid>
        </div>
    );
};

export default AddCheese;