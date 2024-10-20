import { Button, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Cheese } from "../types/CheeseTypes";
import styles from './CheeseCard.module.css';
import { ImSpoonKnife } from "react-icons/im";
import Calculator from "./Calculator.tsx";

// The CheeseCard component is a component that receives the data from one cheese and displays it on the screen. It uses
// the Cheese type to define the data structure of the cheese object. The component displays the cheese name, price, color,
// image, tags, and description. It also includes a calculator component to calculate the price based on the weight entered.

interface Props {
    cheese: Cheese;
}

const CheeseCard = ({cheese}: Props) => {

    const imagePath = 'http://localhost:5009/public/images/';

    return (
        <Card overflow='hidden' borderRadius={10} position='relative'>
            <Image src={imagePath + cheese.Image} alt={cheese.Name} boxSize={500} width="100%" />
            <Button className={styles.btn} colorScheme='blue' size='sm' mt={2} position='absolute'>Edit</Button>
            <CardBody>
                <Heading marginBottom={10} fontSize='2xl'>{cheese.Name} (${cheese.Price}/kg) - Color: {cheese.Colour}</Heading>
                <Calculator cheeseData={cheese} />
                <div className={styles.flexColumn}>
                    {cheese.Tags.map((item) => (
                        <div key={item} className={[styles.listElement, styles.flex].join(' ')}>
                            <ImSpoonKnife /> {item}
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className={styles.descriptionHeader}>Description</h2>
                    {cheese.Description}
                </div>
            </CardBody> </Card>
    );
};

export default CheeseCard;