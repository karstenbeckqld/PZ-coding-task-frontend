import { Text, useColorMode } from "@chakra-ui/react";

const Footer = () => {

    const {colorMode} = useColorMode();

    return (
        <div>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Text color={colorMode === 'dark' ? 'white' : 'black'} className="nav-link px-2">Home</Text></li>
                    <li className="nav-item"><Text color={colorMode === 'dark' ? 'white' : 'black'} className="nav-link px-2">Cheeses</Text></li>
                    <li className="nav-item"><Text color={colorMode === 'dark' ? 'white' : 'black'} className="nav-link px-2">Pricing</Text></li>
                    <li className="nav-item"><Text color={colorMode === 'dark' ? 'white' : 'black'} className="nav-link px-2">Contact</Text></li>
                    <li className="nav-item"><Text color={colorMode === 'dark' ? 'white' : 'black'} className="nav-link px-2">About</Text></li>
                </ul>
                <Text color={colorMode === 'dark' ? 'white' : 'black'} className="text-center">&copy; 2024 Company, Inc</Text>
            </footer>
        </div>
    );
};

export default Footer;