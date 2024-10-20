import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from '/src/assets/react.svg';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import { Link } from "react-router-dom";

// The NavBar component is a simple component that displays the navigation bar at the top of the page. It contains links
// to the Home and Add Cheese pages, as well as a color mode switch.

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