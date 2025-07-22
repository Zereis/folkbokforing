# Folkbokföringssystem

A full-stack Population Registration System built with React (frontend) and Spring Boot (backend).

## Features

- **Create person:** Add new individuals with personal details.
- **Get all persons:** View a searchable list of all registered persons.
- **Update person:** Edit existing person information.
- **Delete person:** Remove a person from the registry.
- **Search person:** Search by name or personal identification number.
- **History log:** View a log of all changes (create, update, delete) for auditing.

## Person Fields

- Personal identification number
- First name
- Last name
- Address
- Postal code
- City
- Marital status
- Date of birth

## Tech Stack

- **Frontend:** React, TypeScript, Axios
- **Backend:** Spring Boot, Java, JPA/Hibernate
- **Database:** H2 (in-memory, can be changed)
- **Build Tools:** Gradle

## How to Run

### Backend

1. Go to the backend folder:
   ```
   cd folkbokforing-backend
   ```
2. Build and run the Spring Boot application:
   ```
   ./gradlew bootRun
   ```
   or on Windows:
   ```
   gradlew.bat bootRun
   ```

### Frontend

1. Go to the frontend folder:
   ```
   cd folkbokforing-frontend
   ```
2. Install dependencies and start the React app:
   ```
   npm install
   npm start
   ```

The frontend will be available at [http://localhost:3000](http://localhost:3000) and connects to the backend at [http://localhost:8080](http://localhost:8080).

## Screenshots

![Screenshot](https://i.imgur.com/Fdn82JU.png)

## License

MIT (or your preferred license)
