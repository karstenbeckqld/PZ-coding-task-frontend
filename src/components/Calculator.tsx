import { Cheese } from "../types/CheeseTypes.ts";
import React, { useState } from "react";
import { Text, useColorMode } from "@chakra-ui/react";

interface CalculatorProps {
    cheeseData: Cheese;
}

const Calculator = ({cheeseData}: CalculatorProps) => {
    const {colorMode} = useColorMode();
    const [price, setPrice] = useState<number>(0);
    const [weight, setWeight] = useState<number | string>('');


    const calculatePrice = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Calculate the price only if weight is a valid number
        const weightValue = parseFloat(weight.toString()); // Convert weight to number
        if (!isNaN(weightValue)) {
            setPrice(cheeseData.Price * weightValue);
            console.log(cheeseData.Price + ' weight: ' + weightValue);
        }

        // Reset the weight value after the calculation
        setWeight(''); // Reset the input field
    }

    return (
        <div className='flex flex-col flex-wrap mb-3'>
            <Text color={colorMode === 'dark' ? 'white' : 'black'}>Calculate your cost</Text>
            <form className='flex flex-row flex-nowrap gap-3.5' onSubmit={calculatePrice}>
                <div className="input-group">
                    <span className="input-group-text">Weight (kg)</span>
                    <input
                        id='weight'
                        type="number"
                        step='0.001'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="form-control"
                    />
                    <span className="input-group-text">$</span>
                    <input
                        id='price'
                        type="number"
                        step='0.001'
                        value={price.toFixed(2)}
                        className="form-control"
                        readOnly
                    />
                    <button className='btn btn-info' type="submit">Calculate</button>
                </div>

            </form>
        </div>
    );
};

export default Calculator;