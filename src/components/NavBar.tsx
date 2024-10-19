import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from '/src/assets/react.svg';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import { Link } from "react-router-dom";


const NavBar = () => {

    const { colorMode } = useColorMode();

    return (
        <HStack justifyContent='space-between' padding='10px' textColor={colorMode === 'dark' ? 'white' : 'black'}>
            <Image src={logo} alt="Logo" boxSize={20} />
            <HStack justifyContent='space-evenly' alignContent='center' gap={10} >
                <Link to='/'>Home</Link>
                <Link to='/add'>Add Cheese</Link>
                <ColorModeSwitch />
            </HStack>
        </HStack>
    );
};

export default NavBar;