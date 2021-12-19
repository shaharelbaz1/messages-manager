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

Name | Type | Description
--- | --- | --- 
_id | ObjectId | uniqu ID, created by mongo
message | String | message content
sender | String | sender number
recipient | String | recipient number
palindrome | Boolean | true if message is palindrome, else false
createAt | Date | message created date
updatedAt | Date | message updated date

###### Get messages list:
```GET /api/messages```
curl example:
``` curl --location --request GET 'URL/api/messages' ```

###### Get message by ID:
```GET /api/messages/:id```
curl example:
``` curl --location --request GET 'URL/api/messages/61bbafc1fd8923005900d909' ```

###### Create message:
```POST /api/messages```
curl example:
``` curl --location --request POST 'URL/api/messages' \ --header 'Content-Type: application/json' \ --data-raw '{ "message": "Hello World", "sender": "0544336331", "recipient": "0547903133"}' ```

###### Update message:
```PUT /api/messages/:id```
curl example:
``` curl --location --request PUT 'URL/api/messages/61bf7f0fa78a8e2c3b1692b5' \ --header 'Content-Type: application/json' \ --data-raw '{ "message": "123454321", "sender": "0544336331", "recipient": "05479031332"}' ```

###### Delete message:
```DELETE /api/messages/:id```
curl example:
``` curl --location --request DELETE 'URL/api/messages/61bf7f0fa78a8e2c3b1692b5' ```
 
 Before and after each request, message will print to the logs.

## Create and run Docker image
run commands in project path:
```docker build --tag message-manager .```
```docker-compose up .```