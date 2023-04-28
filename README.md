# Course Evaluations Project Workshop 2

## Workshop Instructions

In this workshop, you will learn to create your own free tier database in MongoDB Atlas Database, connect the backend to the Atlas, put some evaluations data in the database and connect the backend with the frontend application. At the end of the workshop, you should be able to search courses and look up evaluations information about them.

**First step: clone this repository!**

### Scraping the course evaluations

1. Navigate to the `/scraper` directory and follow the instructions to scrape the course evaluations.
2. When done scraping, move the whole `/data` directory to `../backend`; **this is important, the further steps will not work without this**.

### Setting up the database

In this step, you will setup the MongoDB database and start the server application.

1. Create a free tier MongoDB Atlas server (https://www.mongodb.com/atlas/database)
2. Navigate to `backend`, do `cp .env.example .env` and set the `ATLAS_URI` env variable to your database's connection string URI (https://www.mongodb.com/docs/manual/reference/connection-string/)
3. Make sure that you have installed all the dependencies in the `backend` directory - run `npm install`
4. Once you have installed the dependencies and have placed the connection string URI in the dotenv file, run `npm run seed` - this will seed your Atlas database with the course evaluations data by creating `courseEvaluations` collection
5. Make sure that everything works - run `npm run dev` and play around with the endpoint `/search`. This endpoint returns all the courses that match the search phrase (looks over the class description and instructors fields). Try to run the following queries in your browser bar:
  1. `http://localhost:3002/search?phrase=computer+science&perPage=20&currPage=1`
  2. `http://localhost:3002/search?phrase=econ&perPage=5&currPage=4`
  3. `http://localhost:3002/search?phrase=econ` (should give you a cryptic error message)
6. Also, you can play around with the other endpoint `/course/:courseId` that returns more detailed information about a given course. In order for this endpoint to work, you will need to get an `_id` property from one of the previous queries of `/search`. Once you chose an `_id` to use for this query, do `http://localhost:3002/course/<place _id here>`.
7. At this point, your backend should be working. If not, ask questions. If it works, keep it running with `npm run dev` and move onto the next part in the instructions.

### Connecting the frontend with backend

In this step, you will connect the React frontend application with the server that you just completed.

1. Start the frontend application with `npm run dev`.
2. Navigate to `/frontend/src/lib/api.ts` and complete the `searchCourses` and `getCourseById` functions (use the provided `fetchApi` function to call the server).
3. Navigate to `/frontend/src/components/Root/Root.tsx` and complete the component
4. Navigate to `/frontend/src/components/Root/CourseModal/CourseModal.tsx` and complete the component

### Additional information

If you have any questions during or after the workshop, feel free to ask any of the Bugs members IRL or through the Discord server. Also, feel free to enhance the course evaluations application fork and share it with the others on the Discord server. Hope you had fun and learnt something new!! 🤓

