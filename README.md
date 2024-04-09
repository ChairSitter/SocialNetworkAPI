# Social Media API 

## Description

This application is the back-end structure for a small social media site. The site features users who can be added as other users' friends, post "thoughts", and react to each other's thoughts. This application lacks front-end functionality and must be utilized through a back-end route program such as Insomnia or Postman. 

- This application uses a semi-structured Mongoose (MongoDB) database and was useful in practicing noSQL concepts relevant to the use case of a social media site with a need for less-structured data and associations. 
- This project provided practice with the Mongoose platform and various combinations of url parameters to perform CRUD commands on users, thoughts, and reactions data.
- This application uses a semi-structured MongoDB noSQL database but leverages the Mongoose model to provide some structure to the data. It allows the creation of data associated by nesting which makes accessing related data more efficient than with the use of a SQL database.
- I learned how Mongoose and MongoDB function and how to write semi-structured schema rules. I learned concepts relevant to popular social media database technology, as well as concepts related to proper population of nested associated data.

## Installation/Usage

This application must be leveraged using Insomnia or another program to access back-end routes for thoughts, users, reactions, and friends. Run the project in terminal using "node server" command, then access routes in controllers/api folder following JSON formatting rules laid out in the thought, reaction and user models.

## Credits

This project is made with proprietary code

## License

See MIT license documentation in this repository.