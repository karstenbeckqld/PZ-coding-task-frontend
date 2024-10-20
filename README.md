# React + TypeScript + Vite Project for PZ coding task
The cheese application consists of a .NET web API and React front end. The data for the cheeses is stored in a MongoDB 
and the cheese images on the API server in the public/images folder.

React is used with Typescript and most of the components are commented so that you can see how they work.

The application is located in two GitHub repositories:

Backend (API): https://github.com/karstenbeckqld/PZ-coding-task-backend

Frontend (React): https://github.com/karstenbeckqld/PZ-coding-task-frontend

The database content is in Database.json in the backend repository. 

Both parts can be run locally. 
The React frontend needs to first run npm install to install all the dependencies and then npm run dev to start the 
development server.

The backend can be run in Visual Studio or from the command line using dotnet run.

The application uses Chakra-UI, Bootstrap and custom CSS for styling.

What would have been done differently if I had more time:
- Add a search function to search for cheeses by name
- Add a filter function to filter cheeses by type/origin/colour...
- Implement the edit functionality depicted in the application design
- Implement the delete functionality available in the API
- Add a loading spinner while the data is being fetched
- Focus on one UI library (currently Chakra-Ui and Bootstrap, plus custom CSS) and make the design more consistent
- Add more tests
- Use as different approach for the Tags, as the current one is not very user-friendly and difficult to handle in the form
- Maybe use SQL instead of MongoDB
- Optimise Dockerfile for better performance
