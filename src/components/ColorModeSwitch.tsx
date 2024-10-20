
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

// A simple component that allows the user to switch between light and dark mode.

const ColorModeSwitch = () => {

    const {toggleColorMode, colorMode} = useColorMode();

    return (
        <HStack alignContent='center' justifyContent='space-between'>
            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text color={colorMode === 'dark' ? 'white' : 'black'} marginTop={4}>
                {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </Text>
        </HStack>
    );
};

export default ColorModeSwitch;