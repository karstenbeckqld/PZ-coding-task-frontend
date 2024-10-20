import { Text, useColorMode } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const CheeseAdder = () => {

        // First, we declare all required useRef states to read the fields from the form.
        const nameRef = useRef<HTMLInputElement>(null);
        const imageRef = useRef<HTMLInputElement>(null);
        const colourRef = useRef<HTMLInputElement>(null);
        const priceRef = useRef<HTMLInputElement>(null);
        const tagsRef = useRef<HTMLInputElement>(null);
        const descriptionRef = useRef<HTMLInputElement>(null);
        const [newTag, setNewTag] = useState<string>('');
        const [tagList, setTagList] = useState<string[]>([]);

        // Again, we use the useColorMode hook to determine the color mode of the application.
        const {colorMode} = useColorMode();

        // We declare a cheese object to store the data from the form. The cheese object has the following fields:
        const cheese: {
            Name: string;
            Image: string;
            Colour: string;
            Price: number;
            Tags: string[];
            Description: string;
        } = {
            Name: '',
            Image: '',
            Colour: '',
            Price: 0,
            Tags: [],
            Description: ''
        };

        // The handleSubmit function is called when the user submits the form. It prevents the default form submission,
        // so that the page does not reload. It then reads the values from the form fields and stores them in the cheese
        // object. The cheese object is then sent to the API using axios. The image file is uploaded to the server using
        // a FormData object in a separate step as it uses a different endpoint.
        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            // Add fields to formData
            if (nameRef.current !== null) {
                cheese.Name = nameRef.current.value;
            }
            if (colourRef.current !== null) {
                cheese.Colour = colourRef.current.value;
            }
            if (priceRef.current !== null) {
                cheese.Price = parseFloat(priceRef.current.value);
            }
            if (tagsRef.current !== null) {
                cheese.Tags = tagList;
            }
            if (descriptionRef.current !== null) {
                cheese.Description = descriptionRef.current.value;
            }
            if (imageRef.current !== null && imageRef.current.files && imageRef.current.files[0]) {
                const imageFile = imageRef.current.files[0];
                console.log(imageFile);
                cheese.Image = imageFile.name;  // Attach the file name
            } else {
                console.log("No image file selected");
            }

            console.log(cheese);

            // First upload the cheese object to store data in database.
            await axios.post('http://localhost:5009/api/cheese', cheese, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });


            // Then upload the image file to store the image on the server.
            if (imageRef.current === null || !imageRef.current.files) {
                console.log("No image file selected")
            }

            if (imageRef.current !== null && imageRef.current.files && imageRef.current.files[0]) {
                const imageFile = imageRef.current.files[0]; // Get the actual image file
                console.log("Selected image file:", imageFile);

                const formData = new FormData();
                formData.append('imageFile', imageFile);

                await axios.post('http://localhost:5009/api/Image/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                });

                return (<Navigate to="/" />);
            }
        }

        // The handleAddTag function will add a new tag to the tagList array when the user clicks the Add Tag button.
        // It copies the existing tag list and adds the new tag at the end.
        const handleAddTag = () => {
            if (newTag.trim()) {
                setTagList([...tagList, newTag]); // Add cheese to the array
                setNewTag(""); // Clear the input field
            }
        };

        return (
            <div className={colorMode === 'dark' ? 'text-slate-50' : 'text-black'}>
                <Text color={colorMode === 'dark' ? 'white' : 'black'} fontSize="2xl" fontWeight="bold"> Add a New
                                                                                                         Cheese </Text>
                <div className={colorMode === 'dark' ? 'text-gray-50' : 'text-black'}>
                    <form className='cheese-form' onSubmit={handleSubmit} encType='multipart/form-data'>
                        <div className='input-group mb-3'>
                            <span className="input-group-text" id="inputGroup-sizing-default">Cheese Name</span>
                            <input
                                className='form-control'
                                type="text"
                                id="name"
                                name="Name"
                                ref={nameRef}
                            />
                        </div>

                        <div className='input-group mb-3'>
                            <span className="input-group-text" id="inputGroup-sizing-default">Cheese Colour</span>
                            <input
                                className='form-control'
                                type="text"
                                id="Colour"
                                name="Colour"
                                ref={colourRef}
                            />
                        </div>

                        <div className='input-group mb-3'>
                            <span className="input-group-text" id="inputGroup-sizing-default">Cheese Price</span>
                            <input
                                className='form-control'
                                type="number"
                                step="0.01"
                                id="Price"
                                name="Price"
                                ref={priceRef}
                            />
                        </div>

                        <div className='input-group flex-row mb-3'>
                            <span className="input-group-text" id="inputGroup-sizing-default">Tags</span>
                            {/*<label htmlFor="tags">Tags:</label>*/}
                            <input
                                className='form-control'
                                type="text"
                                name="Tags"
                                ref={tagsRef}
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                placeholder="Enter Tag"
                            />
                            <button className='btn btn-success' type="button" onClick={handleAddTag}>
                                Add Tag
                            </button>
                        </div>
                        <ul className='tags-list'>
                            {tagList.map((cheese, index) => (
                                <li key={index}>{cheese}</li>
                            ))}
                        </ul>

                        <div className='input-group mb-3'>
                            <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                            <input
                                className='form-control'
                                type="text"
                                id="Description"
                                name="Description"
                                ref={descriptionRef}
                            />
                        </div>

                        <div className='input-group mb-3'>
                            <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                name='Image'
                                placeholder='Cheese Image'
                                ref={imageRef}
                            />
                        </div>

                        <button className='btn btn-primary sbmt-btn' type="submit">Add Cheese</button>
                    </form>
                </div>
            </div>
        );
    }
;

export default CheeseAdder;