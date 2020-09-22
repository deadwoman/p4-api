# Grocery Budget & Shopping List

This is the API for the Grocery Budget & Shopping List web app.

![image](https://i.imgur.com/92nfIoF.png)

![image](https://i.imgur.com/O5mSxHI.png)

# Important Links

[Client Repository](https://github.com/deadwoman/p4-client)

[Deployed Client](https://deadwoman.github.io/p4-client/)

[API Repository](https://github.com/deadwoman/p4-api)

[Deployed API](https://enigmatic-fortress-92738.herokuapp.com/)

# Setup & Installation

1. Download this template.
2. Move the .zip file to your sei/projects/ directory and Unzip it (creating a folder) -- NOTE: if the folder was already unzipped, use the mv command line to move it to the sei/projects/ directory.
3. Rename the directory from p4-api -> your-app-name.
4. Empty README.md and fill with your own content.
5. Move into the new project and git init.
6. Replace all instances of 'express-api-template' with your app name.
7. Install dependencies with npm install.
8. Ensure that you have nodemon installed by running npm install -g nodemon.
9. Ensure the API is functioning properly by running npm run server.
10. Once everything is working, make an initial commit.
11. Follow the steps in express-api-deployment-guide

# Planning Story

Day 1: Wrap Up Planning, Begin API & Client Setup
Day 2: Page design/layout, continue working on back-end, start front-end
Day 3: Continue working on the API & front end
Day 4: Final Edits, Read Me, and Deploying

# User Stories

- As an unauthorized user I want to be able to sign-in, sign-up, change password, and logout
- As a user I want to be able to add a budget amount
- As a user I want to view my grocery list
- As a user I want to be able to add a product name and it's expense amount
- As a user I want to be able to update the budget amount
- As a user I want to be able to update a product name and amount
- As a user I want to be able to delete a a product/expense

# Technologies Used

- Mongodb & Mongoose
- Express
- jQuery
- Javascript

# Wireframes:

![image](https://i.imgur.com/iwqx6Eb.jpg)
![image](https://i.imgur.com/g5aS3zQ.jpg)

# ERD:

![image](https://i.imgur.com/wCtTcxE.jpg)

# Routes:

Verb URI Pattern
GET /foods
POST /add-food
PATCH /foods/:id/
DELETE /foods/:id
