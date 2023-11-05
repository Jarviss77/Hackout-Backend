# Hackout-Backend
## Tech Stack Used

- **NodeJS** - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

- **ExpressJS** - Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.

- **MongoDB** - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

-  **Redis** - Redis is an open-source, in-memory data store and cache that is often used for fast data retrieval and storage, commonly employed in applications requiring low-latency data access, such as caching, real-time analytics, and task queuing.

-  **Websocket** - WebSocket is a communication protocol that provides full-duplex, real-time, two-way communication between a client and a server over a single, long-lived connection. It's commonly used in web applications for interactive features, like real-time chat and live updates.

## Dependencies
You npm/yarn installed in your device to run this project.

## How to Setup this project

- Make sure your Machine is having internet connection.
- Fork this repository.
- Open shell (which ever your OS support) on your PC.
- Change the directory to the location where you want to clone this repository.
- Clone the repository
```bash
git clone <repo-link>
```
- Once cloned, Run the following command in the root directory of the project
```bash
npm install
```
- Run the project
```bash
npm start
```
- Make sure you have required enviornment variables saved in the ```.env``` file in the root of the project.

## Reference Links 
- [Download and install the latest version of Git.](https://git-scm.com/downloads)
- [Set your username in Git.](https://help.github.com/articles/setting-your-username-in-git)
- [Set your commit email address in Git.](https://help.github.com/articles/setting-your-commit-email-address-in-git)
- [Setup Nodejs](https://nodejs.org/en/blog/release/v16.18.1/)

## Project Structure 

```
/
|-- controllers/
    |-- dashboard.controller.js     
    |-- sellproduct.controller.js     
    |-- sellservice.controller.js    
|
|-- middlewares/                  
    |-- uploadimage.middleware.js     
|
|-- models/                    
    |-- user.model.js          
    |-- posts.model.js         
    |-- story.model.js         
|
|-- routes/                   
    |-- product.routes.js       
    |-- service.routes.js
|-- utils/
    |-- cloudinary.util.js
|-- config/
    |-- redis.js
|-- Sockets
    |-- socket.js            
|-- app.js
|-- Dockerfile

```
## Live Deployment 

- The backend of this project is deployed on Render.com and can be accessed using the following (Link to be added soon)
