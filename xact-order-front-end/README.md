

# X-ACT ORDER
X-Act Order was built to reduce confusion on imaging orders by providing medical staff, patients and providers with accurate exam metadata, helping streamline exam ordering, decrease callback on ordering errors, and making workflows more efficient. It allows for users to search for exams via search bar, or interactive skeleton, and displays information about the exams such as the exam name, views, cpt code and descriptions that can contain exam purpose, indications and other information relavent medical workers. It also serves as an educational tool for radiology students or patients that want to know more about radiology procedures!

![Homepage](/Images/HomepageScreenshot.png)

# Key Features:

## Search Feature:
### Search Bar - Search for exams by thier names or keywords/aliases that are accociated with the procedure. 
### Interactive Skeleton - Search for exams with selections that dynamically highlight regions on a skeleton.
<details>
    <summary>Click to see Search Feature </summary> 
    <img src="![Search](/Images/SearchScreenshot.png)" alt="Search Screenshot" />
</details> 

## Exam Display:
### Displays all or filtered Exams containing thier name, views, and CPT Code. When the Exam card is clicked on, it displays relavent information pertaining to that procedure.
<details>
    <summary>Click to see Exam Display </summary> 
    <img src="![Exam Display](/Images/ExamDisplayScreenshot.png)" alt="Exam Display Screenshot" />
    <img src="![Exam Card](/Images/ExamScreenshot.png)" alt="Exam Card Screenshot" />
</details> 

## Shortcuts: 
### Shortcuts gives the user the ability to quickly view exams without having to search for them. They can save an exam to the shortcuts page with the click of a button to view them for a later time. 

## Exam Add: 
### Allows for the user to add their own exam and/or view all exams that are in the database. Specific data can be directly edited or deleted from the database that updates the frontend in real-time. 
<details>
    <summary>Click to see Exam Add Feature </summary> 
    <img src="![Exam Add](/Images/ExamAddScreenShot.png)" alt="ExamAdd Screenshot" />
</details>

## Tech Stack:
## Front End - 
-   JavaScript
-   React
-   Vite
-   React Router
-   Framer Motion
-   CSS
-   JSX
## Back End - 
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
* To avoid CORS error, CrossOrigin(origins = "http://localhost:5173")
Needs to be changed in Java if frontend is being hosted on a different port.


# API Endpoints
| HTTP Method   | Endpoint         | Description                 |
| :-----------: | :------------:   | :-------------------------: |
| GET           | /exams/all       | Fetches a list of all exams |
| GET           | /exams/id        | Retreives individual exam   |
| PUT           | /exams/update/id | Edits individual exam 
| POST          | /exams/add       | Adds an exam to database    |
| DELETE        | /exams/delete/id | Deletes an individual id.   |



# Wireframes
<details>
    <summary>Click to see WireFrames </summary> 
    <img src="![WireFrames](/Images/WireFramesScreenShot)" alt="WireFrames Screenshot" />
</details>

# ERD (DataBase Structure)
<details>
    <summary>Click to see ERD </summary> 
    <img src="![ERD](/Images/ERDScreenshot.png)" alt="ERD Screenshot" />
</details>

# Future Improvments
* Implement Login page with Backend Authentication
* Add filter options to find exam types faster
* Store x-ray Images and display them for each exam

## Creator
Bryan Jimenez R.T.(R) - [LinkedIn](https://www.linkedin.com/in/bryan-jim/) - [GitHub](https://github.com/BryJime)



