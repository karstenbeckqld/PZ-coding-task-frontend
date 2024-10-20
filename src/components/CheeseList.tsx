import useCheeses from "../hooks/useCheeses.ts";
import { SimpleGrid } from "@chakra-ui/react";
import CheeseCard from "./CheeseCard.tsx";

const CheeseList = () => {

    const {cheeses, error} = useCheeses();

    return (
        <div>
            {error && <div>{error}</div>}
            <SimpleGrid
            columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 3
            }} spacing={10}
        >
            {cheeses.map(cheese => (
                <CheeseCard key={cheese.Id} cheese={cheese} />
            ))}
        </SimpleGrid>
        </div>
    );
};

export default CheeseList;

// Camembert Image: Image by bublikhaus on Freepik
// Edam: Image by freepik
// Gruillere: Image by jcomp on Freepik
// Cheddar: Image by freepik
// Brie: https://www.gettyimages.com.au/detail/photo/brie-cheese-royalty-free-image/640177074?adppopup=true
// Goat on a Hot Rin Roof: https://upload.wikimedia.org/wikipedia/commons/9/94/Ziegenkaese_Rolle_II.jpg
// Cottage Cheese: https://media.gettyimages.com/id/1202525766/photo/tvorog-cottage-cheese-or-curd-cheese.jpg?s=612x612&w=0&k=20&c=1izrAik4WXaMRPMz697BILvrOJrfsFMC0NlgJJimnK4=