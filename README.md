<img width=150px height=150px alt="React Mini Challeges Logo" src="https://github.com/josephclander/react-mini-challenges/assets/19231569/5288fb62-9209-4f5d-ba3c-006803c4f5b3" />

# React Mini Challenges

A bank of React UI challenges all in one repo.

**Feel free to copy this repo and adapt it however you wish.**

<img width="400" alt="ReactMiniChallengesScreenshot" src="https://github.com/josephclander/react-mini-challenges/assets/19231569/ec25d348-82a4-4dce-be34-df95ead5183e">

<img width="400" alt="ChallengeScreenshot" src="https://github.com/josephclander/react-mini-challenges/assets/19231569/19f1d289-b2fc-44de-ada8-df4e91426050">

### To Install

Follow these steps to set up the environment and start developing:

1.  **Clone or Fork the Repository:**
    If you haven't already, clone or fork the repository to your local machine.

    ```bash
    git clone https://github.com/josephclander/react-mini-challenges.git
    cd react-mini-challenges
    ```

2.  **Database Setup**
    
    Before installing dependencies and running the application, set up your database:

    **Install Database Software:**
    
    Make sure PostgreSQL is installed on your machine. I used PGAdmin4 to be able to navigate more easily.

    **Create a Database:**
    
    Create a new database that will be used by the application.

    **Configure Database Settings:**
    
    Update the database configuration settings in the backend with this new information. The config file can be found at `config/config.json`.

    **_note_**: This project only runs in development mode.

3.  **Install Dependencies:**
    
    Run the following command to install all necessary dependencies for both the frontend and backend. This ensures both parts of the application are ready to use.

    ```bash
    npm run install:all
    ```

4.  **Initialize the Database**
    
    Perform database migrations and seed the database with initial data:

    ```bash
    npm run backend:setup-db
    ```

5.  **Start the Application**
    
    Start both the client (frontend) and the server (backend) with a single command. This command uses `concurrently` to run multiple npm scripts simultaneously.

    ```bash
    npm start
    ```

### To Use

1. **Select a Challenge:**
   Browse through the list of available challenges.
2. **Implement the Solution:**
   Go to `/src/solutions` and develop the component according to the challenge specifications. Complete the component to match the task requirements.
