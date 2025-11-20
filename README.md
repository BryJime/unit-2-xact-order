# X-Act Order

## Table of Contents
- [About](#about)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation Requirements](#installation-requirements)
- [Installation Instructions](#installation-instructions)
- [API Endpoints](#api-endpoints)
- [Wireframes](#wireframes)
- [Database Structure](#erd-database-structure)
- [Future Improvements](#future-improvements)
- [Creator](#creator)
<br>

# About
X-Act Order was built to reduce confusion on imaging orders by providing medical staff, patients and providers with accurate exam metadata, helping streamline exam ordering, decrease callbacks on ordering errors, and making workflows more efficient. 

It serves as an educational tool for radiology students, patients or ANYONE that wants to know more about radiology procedures!

<details>
    <summary>Who it's for </summary> 
    <ul> 
        <li> Physicians </li>
        <li> Nurses </li>
        <li> Rad Techs </li>
        <li> Students </li>
        <li> Anyone </li>
    </ul>
</details> 
<details>
    <summary>Why it matters </summary> 
    <ul> 
        <li> Incorrect imaging orders slow down workflow. Every department should have a consistent naming standard that matches how exams are actually performed at that facility. </li>
        <li> Staff and patients should have quick and accessible information about an exam to improve outcomes of procedures. </li>
    </ul>
</details> 
<details>
    <summary>What it solves </summary> 
    <ul> 
        <li> Exams ordered with incorrect names or projections </li>
        <li> Patients with confusion or questions relating to an exam </li>
        <li> Rad Techs that need a quick reference guide </li>
        <li> Students lacking accessible learning tools for the specific facility </li>
    </ul>
</details> 

<img width="2535" height="1396" alt="Image" src="https://github.com/user-attachments/assets/e9a1c1b0-6e3e-4a2b-bd4e-34d3973f0619" />

# Key Features:

## Search Feature:
### Search Bar - Search for exams by their names or keywords/aliases that are associated with the procedure. 
### Interactive Skeleton - Search for exams with selections that dynamically highlight regions on a skeleton.
<details>
    <summary>Click to see Search Feature </summary> 
    <img width="2536" height="1397" alt="Image" src="https://github.com/user-attachments/assets/f7ec9fa8-f31b-470d-bbe9-67838ec44aa2" />
</details> 

## Exam Display:
### Displays all or filtered Exams containing their name, views, and CPT Code. When the Exam card is clicked on, it displays relevant information pertaining to that procedure.
<details>
    <summary>Click to see Exam Display </summary> 
    <p> Collapsed Exam Card: </p>
    <img width="2535" height="1393" alt="Image" src="https://github.com/user-attachments/assets/a0e5dcf6-21a0-4f43-8674-b52d1f07bb9a" />
    <p> Expanded Exam Card: </p>    
    <img width="2535" height="1402" alt="Image" src="https://github.com/user-attachments/assets/29dc961d-0f3e-4889-8ef3-38b71e8199e5" />
</details> 

## Shortcuts: 
### Shortcuts gives the user the ability to quickly view exams without having to search for them. They can save an exam to the shortcuts page with the click of a button to view them for a later time. 

## Exam Add: 
### Allows for the user to add their own exam and/or view all exams that are in the database. Specific data can be directly edited or deleted from the database that updates the frontend in real-time. 
<details>
    <summary>Click to see Exam Add Feature </summary> 
    <img width="2537" height="1390" alt="Image" src="https://github.com/user-attachments/assets/be0bef53-e6e3-4b0a-a9c2-ebd9b83f122b" />
</details>

# Tech Stack:
## Front End 
-   JavaScript
-   React
-   Vite
-   React Router
-   Framer Motion
-   CSS
-   JSX
## Back End 
-   Java
-   Spring Boot
-   Maven
-   Hibernate
-   MySQL

# Installation Requirements

## These are the following requirements in order to run the project locally. 
* Node.js
* npm via (npm install). Use (npm run dev) to run locally. 
* Framer Motion via (npm install framer-motion)
* .env file to store SQL username and password saved under DB_USERNAME and DB_PASSWORD. 
* Java Development Kit (JDK) 17
* MySQL Server (version 8.0+)
* To avoid CORS errors, update `CrossOrigin(origins = "http://localhost:5173")` in the backend if the frontend runs on a different port.

# Installation Instructions
## Front End
* Clone the repo via `git clone https://github.com/BryJime/unit-2-xact-order.git`
* Navigate to front end directory `cd unit-2-xact-order/xact-order-front-end`
* Install npm and framer motion via `npm install` and
`npm install framer-motion`
* Use `npm run dev` to run front end
## Back End
* Create new schema in MySQL named `xact_order_db` and configure username and password in Users and Privileges
* Create a .env in `java-spring-boot-back-end-app` root and store username under `DB_USERNAME` and password under `DB_PASSWORD`
* Add the .env to your .gitignore!
* Change `spring.datasource.url` in `application.properties` if your Schema is in a different port.
* Update CrossOrigin annotation in `src/main/java/com/example/java_spring_boot_back_end_app/controllers/ExamController.java` if needed to match front end port. 

# API Endpoints
| HTTP Method   | Endpoint         | Description                 |
| :-----------: | :------------:   | :-------------------------: |
| GET           | /exams/all       | Fetches a list of all exams |
| GET           | /exams/id        | Retrieves individual exam   |
| PUT           | /exams/update/id | Edits individual exam 
| POST          | /exams/add       | Adds an exam to database    |
| DELETE        | /exams/delete/id | Deletes an individual id.   |



# Wireframes
<details>
    <summary>Click to see Wireframes </summary> 
    <img width="2201" height="1200" alt="Image" src="https://github.com/user-attachments/assets/c3736926-7daa-49c4-ad7f-e811f8d84df4" />
</details>

# ERD (Database Structure)
<details>
    <summary>Click to see ERD </summary> 
    <img width="1726" height="1256" alt="Image" src="https://github.com/user-attachments/assets/d25057a2-50bd-4fc0-b6db-5d49c5eff73f" />
</details>

# Future Improvements
* Implement Login page with Backend Authentication
* Add filter options to find exam types faster
* Store x-ray Images and display them for each exam

## Creator
Bryan Jimenez R.T.(R) - [LinkedIn](https://www.linkedin.com/in/bryan-jim/) - [GitHub](https://github.com/BryJime)
