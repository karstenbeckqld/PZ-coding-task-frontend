
// TypeScript needs to know which type of data to expect from the API. Hence, we define the Cheese interface to reflect
// all received data from the API.
export interface Cheese {
    Id: string;
    Name: string;
    Image: string;
    Colour: string;
    Price: number;
    Tags: string[];
    Description: string;
}