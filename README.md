<img width=150px height=150px alt="React Mini Challeges Logo" src="https://github.com/josephclander/react-mini-challenges/assets/19231569/5288fb62-9209-4f5d-ba3c-006803c4f5b3" />

# React Mini Challenges

**A bank of React UI challenges in one repo.** It's Great for practising, and you can even track your attempts. Follow the instructions to set up and edit the relevant solution component, as you see me doing in the video.

## In Action

<img width="400" alt="ReactMiniChallengesScreenshot" src="https://github.com/josephclander/ReactMiniChallenges-PERSONAL/assets/19231569/af031b43-0405-409c-abe0-0f20d16b8886">

### To Install

Follow these steps to set up the environment and start developing:

1.  **Clone or Fork the Repository:**
    If you haven't already, clone or fork the repository to your local machine.
    and move into the folder where you will see two directories, 'frontend' and 'backend'.

2.  **Database Setup**

    Before installing dependencies and running the application, set up your database:

    **Install Database Software:**

    Make sure PostgreSQL is installed on your machine. I installed via Homebrew on mac with:

    ```bash
    brew install postgresql
    brew services start postgresql
    ```

    I used [PGAdmin4](https://www.pgadmin.org/) to be able to navigate more easily.

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

<img width="400" alt="ReactMiniChallengesScreenshot" src="https://github.com/josephclander/ReactMiniChallenges-PERSONAL/assets/19231569/280163b9-fa32-4003-8d52-a905472de302">

<img width="400" alt="ChallengeScreenshot" src="https://github.com/josephclander/ReactMiniChallenges-PERSONAL/assets/19231569/17d1eee2-fd9a-4f80-9742-d2a81692e6eb">

<img width="400" alt="Code Screenshot" src="https://github.com/josephclander/ReactMiniChallenges-PERSONAL/assets/19231569/00814854-7a5c-4a12-a0ec-01b23c850d55">

**This version contains solutions that I have implemented in practice. If you wish to use it yourself, follow the instructions and remove the code in the components of my solutions.**

1. **Select a Challenge:**

   Browse through the list of available challenges in the UI.

2. **Implement the Solution:**

   Go to `/src/solutions` and select the relevant component. Complete the component to match the task requirements.
