# 💻 HexaMotion Control Panel
HexaMotion is a web-based control panel designed to manipulate a robotic arm with six degrees of freedom (6 DOF). The interface allows users to adjust servo motor angles using intuitive sliders, then perform key actions like saving a pose, resetting values, or running the robotic movement. Each saved pose is stored in a MySQL database and displayed in a dynamic table, where users can easily load or delete individual entries. This project combines HTML, CSS, JavaScript, PHP, and MySQL to provide real-time interaction and data management, making it an ideal tool for robotic motion testing and automation tasks..

# 🖼️ Preview

![HexaMotion Interface](hexamotion-interface.jpg)
# 📌 Project Overview

HexaMotion enables real-time control of six servo motors with the following features:
- Interactive sliders to set each motor's angle.
- Run the robotic arm with current settings.
- Save current motor positions to the database.
- View a table of saved motor configurations.
- Load or delete individual configurations from the table.


# ⚙️ Technologies Used

- 💻 PHP (backend logic)  
- 🗃 MySQL (database)  
- 🎨 HTML, CSS & JavaScript (frontend, design, and UI interaction)  
- 🧪 XAMPP (Apache server + MySQL service)  
- 🌐 Localhost (browser-based testing)
-  🗃️ Database Structure

# 🚀 Setup Instructions

## 1️⃣ Install & Run XAMPP
- Download and install XAMPP.
- Open the XAMPP Control Panel.
- Start both Apache and MySQL services.

## 2️⃣ Create the Database
- Go to [localhost/phpmyadmin](http://localhost/phpmyadmin)
- Create a new database called: motor_data
- Inside it, create a table named: motor_values with the following columns:

| Column  | Type | Extra                        |
|---------|------|------------------------------|
| id      | INT  | PRIMARY KEY, AUTO_INCREMENT  |
| motor1  | INT  | –                            |
| motor2  | INT  | –                            |
| motor3  | INT  | –                            |
| motor4  | INT  | –                            |
| motor5  | INT  | –                            |
| motor6  | INT  | –                            |

## 3️⃣ Project Files

Place the following files in your htdocs/motor-task folder inside the XAMPP directory:

| File                    | Description                                      |
|-------------------------|--------------------------------------------------|
| index.html            | Main interface with sliders and output box      |
| style.css             | Styling for layout and table                    |
| script.js             | Handles slider values, saving, loading, output  |
| update_motor_data.php | Saves motor values to the database               |
| get_motor_data.php    | Retrieves all saved motor values                 |
| delete_motor_data.php | Deletes a specific saved row                     |
| run_pose.php          | Outputs saved values in format sXXX            |

## 4️⃣ Run the Web App

Visit the following URL in your browser:
localhost/HexaMotion/

# 📂 task Files

| File                  | Description                              |
|-----------------------|----------------------------------------|
| db.php              | Handles database connection             |
| delete_motor_data.php | Deletes a saved motor configuration    |
| get_motor_data.php   | Fetches all saved motor data            |
| run_pose.php         | Runs the current motor positions        |
| update_motor_data.php | Saves or updates motor positions in DB |
| index.html          | Main control panel interface             |
| script.js           | JavaScript logic for interaction         |
| style.css           | Page styling and design                  |


# ⚙️How to Use
 1. Open the project in a local PHP environment (like XAMPP).
 2. Use the sliders to set each motor’s angle.
 3. Click:
 • Run: to execute the current pose.
 • Save: to store the pose in the database.
 • Reset: to reset all values to 0.
 4. At the bottom of the interface, a table displays all saved poses with:
 • A Load button to apply a saved pose.
 • A Delete button to remove a pose.
