import useCheeses from "../hooks/useCheeses.ts";
import { SimpleGrid } from "@chakra-ui/react";
import CheeseCard from "./CheeseCard.tsx";

const CheeseList = () => {

    const {cheeses, error} = useCheeses();

    return (
        <div>
            {error && <div>{error}</div>} <SimpleGrid
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