# Password Generator

## User Story

In this weeks bootcamp challenge we were given a code to modify. It is an application that allow the user to generate a random password based on certain criteria that they've selected. The HTML and CSS styling sheet are attacted to the file alongside the Javascript code that neeed to be written. The following criteria for the password are the following;

  * The character length of the password must be within 8 - 120 characters long.
  * The user is prompted a series of questions on whether or not they want to include, lowercase, uppercase, special characters, and/or numbers. 
  * Once all the prompts are answered, the generate button will display a password that matches the criteria.
  
 #Acceptance Criteria
 
 This week, I focused on implementing pseudo coding thinking to break down each criteria that was required on the README document by commenting the scripts.js file that was given. I created variables and arrays to include uppercase, lowercase, numbers and special characters. The variable for the generate button and event listener were already given in the file which I incorperate into the following functions. I coded a funtion to ensure that the password would be displayed in the space given only when the user gives the correct prompts. The prompt function is displayed in lines 53-74 on the script.js (makes the code a little more legible to the reader). If the correct prompts were met, I added a fuction that will randomly select from the arrays that are written in lines 6-9 to generate when the "generate button" is clicked. 
 
 One of the issues that I came across was getting the prompts to keep record of the arrays. The concat feature allowed the code to merge the arrays that the user wanted without changing the original array's to output the password. To simplify the arrays, I created a variable "optionArray" to hold the four variables of requires characters (uppercase, lowercase, numbers, and special characters.)
 
 
 # Assets 
 
 
 * The following images display the deployed page for the password generator. 
 
 
 
 ![FPfnUzYQQAqDnE7gf3N3lA_thumb_7](https://user-images.githubusercontent.com/129324160/236000430-3c3a3ce6-9229-483b-9716-d278f1ccd067.jpg)
 
 
 ![gHyuUvw5TKmXzRzDtP0T%w_thumb_8](https://user-images.githubusercontent.com/129324160/236000489-1923a365-bcbc-4c4a-baa9-a06d40dc6d1d.jpg)

 
 
