## Task Management App

This project is a simple task management application designed to showcase a basic integration between React.js for the frontend and Django for the backend.

### Overview

- **Frontend**: Built with React.js, the application features a user interface for managing tasks. Users can view, add, and mark tasks as completed.
- **Backend**: Developed with Django, the backend provides API endpoints to handle task operations. It supports:
  - **Fetching Tasks**: Retrieve a list of tasks.
  - **Adding Tasks**: Create new tasks.
  - **Updating Tasks**: Toggle the completion status of tasks.
  - **Deleting Tasks**: Remove tasks from the list.

### How to Use

Here’s a brief explanation of how to run your frontend and backend servers, assuming you have a project with a React.js frontend and a Django backend.

### Running `npm start` in `/frontend/`

1. **Navigate to the Frontend Directory:**
   Open your terminal and change to the directory where your React.js application is located. Typically, this is a subdirectory named `/frontend/`.

   ```bash
   cd frontend/
   ```

2. **Install Dependencies:**
   Before starting the React application, ensure that all dependencies are installed. Run:

   ```bash
   npm install
   ```

   This installs the packages listed in the `package.json` file, which includes React and other libraries your project depends on.

3. **Start the React Application:**
   Once dependencies are installed, you can start the React development server with:

   ```bash
   npm start
   ```

   This command starts a development server and opens your React application in the default web browser. The development server usually runs at `http://localhost:3000`, and it will automatically reload the page when you make changes to your code.

### Running `python3 manage.py runserver` in `/backend/`

1. **Navigate to the Backend Directory:**
   Open a new terminal window or tab, and change to the directory where your Django project is located. Typically, this is a subdirectory named `/backend/`.

   ```bash
   cd backend/
   ```

2. **Set Up a Virtual Environment (if not done already):**
   It’s common to use a virtual environment to manage Python dependencies. Create and activate a virtual environment with:

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install Dependencies:**
   Ensure all required Python packages are installed. Usually, these are listed in a `requirements.txt` file. Install them with:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Django Development Server:**
   Start the Django server with:

   ```bash
   python3 manage.py runserver
   ```

   This command starts the Django development server, which listens for requests on `http://localhost:8000` by default. The server will handle API requests and serve the backend logic for your application.