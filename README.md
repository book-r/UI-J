Bookr is a social media platform for Text Book reviews.

This project was done for Lambda School's User Interface Build Week.

The scope and pitch of the project is defined below;

```
Pitch: Bookr is your source for all things Text Book. Picture the AirBNB of text books, a social platform for peer reviewed text books. 

MVP: As a user I can log in, and see a list of text books. Each book will have a 5 star rating I can browse from. As a user I can review each book. 
Login Page - After a user logs in, they'll be directed to a home page.
Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.
Home Page - Contains a list of Books laid out in a grid format.
Single Book Page - Loads information about the book, Author, Name, Publisher and a scrolling list of reviews. Add review and delete book buttons present.
Single Book Add Review Page - Clicking add review brings up a form (could be modal, could be its own page) where a user can add their review of the book. Clicking submit adds the review to the books information.
Delete Book - Modal confirming the action, on confirmation user is routed back to the home page and book is gone from the list of books. 
Data Modeling: Each book has a Title - String, Author - String, Publisher - String and Reviews- Array of Objects field. The reviews object shape should be Reviewer - String, Review - String. 

Stretch Goal: A link to each book will take me to a site where I can purchase a book and compare prices.
```

The pages feature layouts for Desktop, Tablet, and Mobile views.

The style guide can be referenced from; https://bookr.frontify.com/d/QFPS5knpEWqA/bookr-style-guide#/basics/logo

The main Page features images from https://www.pexels.com/ and https://undraw.co/

This project uses the LESS watch compiler, the command is; `less-watch-compiler less css index.less`

This project uses the Jquery library Turn.js, the documentation can be referenced at http://www.turnjs.com/

The scripting for the book element in the `about.html` page is located in the `scripts`, it is titled `about-book.js`

Components are housed in the Components folder.

Here's a list of our team members;
Team Lead-
Kelli Ray Hanson - https://github.com/kelliraehanson

iOS Developer;
Hector S Villasano - https://github.com/hectorsvill

Front End Developers;
Ming Liu - https://github.com/skysthelimit68
Arron Marshall -  https://github.com/arronm

Back End Developer;
Henry Blevins - https://github.com/Blevs

UI Developers;
Samantha Egge- https://github.com/SamanthaEgge
Jacob McGrath - https://github.com/JakeGrath
Isaias Garcia-Ariza - https://github.com/isaiasGA

The website is deployed on Netlify- https://relaxed-meitner-e72685.netlify.com/index.html