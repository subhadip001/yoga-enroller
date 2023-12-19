# Yoga Enroller Form with React and Typescript

Link for the API repository: ["https://github.com/subhadip001/yoga-enroller-api"]


## Description
This is a simple form to enroll for yoga classes. It is built with React and Typescript. The form data is sent to the API and stored in a SQL database. The API repository is linked above. This is deployed on Vercel. The link is given in description of the Repo.

## Tech Stack

- React
- Typescript
- Axios
- Vercel
- Vite

## Installation

1. Clone the repository

```bash
git clone https://github.com/subhadip001/yoga-enroller.git
```

2. Install the dependencies

```bash
npm install
pnpm install
yarn install
```

3. Run the app

```bash

npm run dev
pnpm dev
yarn dev
```

## Usage

1. Enter the details in the form
2. Click on submit
3. The data will be sent to the API and stored in the database
4. The Mock Payment Function will be called and the payment will be simulated
5. Error Messages will be displayed if the form is not filled correctly or any other error occurs


## Possible Errors

1. Form may not be submitted if CORS error occurs
2. Form may not be submitted if the API is not running
3. Form may not be submitted if the database is not running

## Possible Solutions

1. CORS error can be solved by using a CORS extension in the browser
2. API can be run by cloning the API repository and following the instructions in the README
3. After running the API in local machine, the API URL can be changed in the code to the local URL in axiosConfig.ts file inside utils folder


## Screenshots
![image](https://github.com/subhadip001/yoga-enroller/assets/78922392/c79f02c8-c7b6-4046-9c7c-240f977b2c97)

## Future Scope of Improvement

1. Add a Authentication System
2. Add a Dashboard to view the status of enrollment to the user
3. Changing of the Batch by the user can be added in the Dashboard
4. Add a Admin Dashboard to view the status of enrollment of all the users
5. UI can be improved by adding animations and transitions