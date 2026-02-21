# Check it out:

https://vin-test-task.vercel.app/

# Project Description

This project is a VIN Decoder web application built with React and Vite. The application allows users to:

- Enter a VIN (Vehicle Identification Number)
- Fetch decoded vehicle data from the NHTSA API
- View available variables
- View details for a specific variable

# The app demonstrates:

- API integration
- Client-side routing
- Form handling
- Conditional rendering
- Error handling
- Basic UI structure
- Basic unit tests

# Tech Stack

- React 19
- Vite
- React Router
- Formik
- Vitest

# How to Run the Project Locally

## 1. Clone the repository

git clone https://github.com/tanyagrr/vin-test-task.git
cd vin-test-task

## 2. Install dependencies

npm install

## 3. Start development server

npm run dev

# Application Routes

## / — Main Page

● Contains VIN input form
● Sends request to NHTSA API
● Displays decoded vehicle information

## /variables

● Displays a list of available variables

## /variables/:variableId

● Displays detailed information about a selected variable

! npm audit reports a known ReDoS vulnerability in ajv, used
transitively by ESLint (dev dependency only). ESLint does not
process untrusted input at runtime, and the advisory currently
has no upstream fix. Production code is unaffected.
