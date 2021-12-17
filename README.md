# Messages Manager Service
Messages manger REST API that implement CRUD operations on messages and stored them on mongoDB database.

## Requirements
For development, you will only need Node.js installed in your environement and MongoDB (in any evniroment).

## Getting started with the API

- run ```git clone https://github.com/shaharelbaz1/messages-manager.git``` to clone the project (or download the zip file).
- run ```cd messages-manager``` to get into the clone project.
- run ```npm install``` to install the dependencies.


Next you'll need to edit config.js file with your connection string to your mongoDB.

Now, startup up server with the command ```npm start```, and you should see the messages below:

	Database connecting
	Message manager is running on: localhost:3000..
	Database connection established

If you don't see those messages, double check the connection string to your database in your config file.

At this point your API should be running on [http://localhost:3000] and you can start testing it out:)

## Tests
To run palindrome tests, please use the cmmand ```npm test```

## Operations

###### Message details object:
{_id, message, sender, recipient, palindrome (true/false), createdAt (date), updatedAt (date)}

- GET "/api/messages/getMessagesById/:id" - input: message id, return message details.
- GET "/api/messages/getMessagesBySender/:sender" - input: sender phone, return messages details the belong to current sender.
- GET "/api/messages/getMessagesList" - return all messages details.
- POST "/api/messages/createMessage" - input: body object {message, sender, recipient}, create the message and return success message.
- PUT "/api/messages/updateMessage/:id" - input: message id and body object {message, sender, recipient}, find message and edit, return success message.
- DELETE "/api/messages/deleteMessage/:id" - input: message id, find message and delete it, return success message.
 
 Before and after each request, message will print to the logs.
