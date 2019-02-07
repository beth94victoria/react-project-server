# REACT App
### Michelle Bryant, James Hicks, Beth Callanan, Thanh Dao, Jaouad Sourour

##### Deployed live on heroku at https://quiet-hamlet-48198.herokuapp.com
##### visit our repo at https://github.com/thanhthedev/react-project-server

## Description of Project
#### This is a web-app for Troys five star mowing business where viewers can see: 
  *Services
  *Feedback
  *Location 
  *Form to request a quote.

### Problem definition / purpose
Our client was relying soley on facebook and word of mouth to attract potential clients for his lawn mowing business. The purpose of the web application is to display the services Troy has to offer, his location and travel limitations as well as a form for potentials to fill out to request a free quote.

### Functionality / features


### Screenshots

#### Mock up of homepage
![home-page-mock](https://user-images.githubusercontent.com/38389703/52257675-6d156600-2967-11e9-8e36-d51ad5304b7e.png)

#### Landing page 
![landing-page](https://user-images.githubusercontent.com/38389703/52313738-620c1580-29fb-11e9-9ae3-30c6c80134ec.png)

#### Services on homepage
![sevices-home-page](https://user-images.githubusercontent.com/38389703/52313752-6fc19b00-29fb-11e9-8e5b-e052a3547133.png)

#### Home page map
![map footer-homepage](https://user-images.githubusercontent.com/38389703/52313760-77813f80-29fb-11e9-9078-47642be462ac.png)

#### feedback page
![feedback-page](https://user-images.githubusercontent.com/38389703/52313767-7d772080-29fb-11e9-82fa-cab8d1b69060.png)

#### Quote form
![quote-form](https://user-images.githubusercontent.com/38389703/52313841-d5ae2280-29fb-11e9-8c76-a141704fd56a.png)

#### Form interaction
![site-form](https://user-images.githubusercontent.com/38389703/52313854-dfd02100-29fb-11e9-9c7f-b5376b0f98c8.png)

#### About page
![about-page](https://user-images.githubusercontent.com/38389703/52314004-697fee80-29fc-11e9-9979-0710b4b53c32.png)

#### Services page
![services-page](https://user-images.githubusercontent.com/38389703/52313847-da72d680-29fb-11e9-8981-2f46882be35c.png)

### Tech stack (e.g. html, css, deployment platform, etc)


### Instructions on how to setup, configure, deploy and use your App.


## Design 
### Design process
### User stories

#### As anonymous I can: 

1. View a homepage with before and after shots of lawns 
2. See a map of where mower man is placed with surrounding areas
3. Navigate site using nav-bar links including:
  *Home
  *About
  *Feedback
  *Quote
4. View  his contact details 

#### As anonymous when Quote is clicked I can:

1. Fill out details that will include:
  *Address and Suburb
  *Property type
  *Email
  *Name
  *Date of potential booking
  *Time of potential booking
  *Pick the services wanted from a dropdown list
  *Phone number
  *Personalise with a message


###  Workflow diagram of the user journey/s.
![user-flow-diagram](https://user-images.githubusercontent.com/38389703/52314238-908af000-29fd-11e9-9b35-61daf7332329.png)

### Wireframes

![home-page-wireframe](https://user-images.githubusercontent.com/42559562/52311383-77307680-29f2-11e9-95f2-ce4da939f55a.png)

![about-page](https://user-images.githubusercontent.com/42559562/52311391-7c8dc100-29f2-11e9-8002-c47c6e29bcce.png)

![services](https://user-images.githubusercontent.com/42559562/52311396-83b4cf00-29f2-11e9-926f-d4d373cdac64.png)

![form-wireframe](https://user-images.githubusercontent.com/42559562/52311399-87e0ec80-29f2-11e9-95c5-491595847777.png)

![homepage-smallmobile](https://user-images.githubusercontent.com/42559562/52311405-8c0d0a00-29f2-11e9-88ee-2f84cbf37fa5.png)

### Database Entity Relationship Diagrams

![entity relationship diagram - team 4](https://user-images.githubusercontent.com/42559562/52311127-ab576780-29f1-11e9-974c-03e246921f82.png)


### Data Flow Diagram

![data flow diagram](https://user-images.githubusercontent.com/42559562/52323525-140e0680-2a29-11e9-8f15-42f7a8471f0a.jpg)

### OO design documentation

The design of this project in React required numerous components to be used across the site. The layout of the website, including the navbar, footer and home page and the quote form are built utilising components.

Navbar, footer and home page are individual components which define the layout of each page with classes. 


Quote Form Components

The quote form utilises both a component, which defines the layout of the form, as well as a form container which determines the actions required for the form to complete.
This was the design layout required for utilising the Redux Form library. 

The components designed for each field input of the form are:

Text

A simple text input field for the user to enter information. Simple validation of the text input is also implemented.
The text component utilises input as a props, which change depending on the value of what the user inputs.

Select

‘Select’, allows the user to choose from a list of predefined values in filling out the quote form. 
The select component is utilised in the for the ‘property type’ and the ‘inspection time’.

Select utilises option as a prop, as well as a key and index for the  options rendering.The data input for the predefined select values are hardcoded as an array in the form.component


Multi select
The ‘multi select’ component, utilises rendering capabilities from the React widgets library. This component allows the user to select or deselect possible service options. 

‘Multi select’ also requires logic from the React widgets library , which will pull in values for input, data, value field and textfield. 

Unlike the ‘Select’ component which utilises an array for the data, ‘Multi select’ requires Axios GET to retrieve the services data which are stored in the database. 


Date picker

‘Date picker’ is also a React widget. It also required a localiser library, ‘Moment’ to help define the states within the component. ‘Date picker’ utilises state to define the date as well as the date changes. 










## Project Management & Planning process including,
### Project plan & timeline
### Client communications

### Screenshots of Trello board(s)

## Short Answer questions 
### 1. What are the most important aspects of quality software?

Functionality, structural quality and the process of development for apps greatly contribute to creating quality software.
Functionality is defined as how easy the app is to use. In consumer applications, if the app has a well defined user workflow, complete with a good aesthetic, the consumer will be more inclined to use said app.  If an app has a convoluted workflow, regardless of its aesthetics, it will prevent the user from utilising the apps full functionality.  

A way to ensure the functionality of an application can be through writing automate tests for the app. This will assist in identifying any issues that can occur when a user is operating the app. 


By making sure the code is readable and understandable for others can make the application flow from legacy code to new written code with little confusion.   
Having a strong structure for the code also assists in developing security for the app. 

Developing code that guards against accidental security vulnerabilities such as logic flaws or defects can be helped by identifying previous flaws and taking proactive steps that can reduce the vulnerabilities.  

Lastly, the quality of the development process will affect the longevity of the app. By making the app development process repeatable will ensure that there can be further iterations of the product or future developments on it. A repeatable development process includes the project management of the app, such as meeting deadlines and budgets. 

### 2. What libraries are being used in the app and why?

  *Bootstrap 4 – is a CSS framework used for styling responsive, mobile-first websites. This made it easier to style all our pages in a global format.
  *React.js – is a Javascript library use for building efficient and flexible user interfaces. We used it for its component feature, allowing us to easily structure our code and have it built to maximise extensibility.
  * Nodemailer – is a module for Node.js for ‘easy as cake’ email sending. We used it to forward an email to the business owner from a form on the website which can be filled out by any visitor.
  * Redux – is a state container for javascript applications which helps you manage the stored and displayed data and how you respond to user actions.
  * Axios - is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API
  * Concurrently – is a node.js package used to run multiple commands conurrently. It allows for easier testing during development, as there is only one terminal needed to run the servers.
  * Cors - is a node.js package for providing a middleware that can be used to enable cross-origin resource sharing with various options
  * Express - is a node.js framework that facilitates the rapid development of web and mobile applications. It allows the setup of middlewares to respond to http requests, defines a routing table to perform actions and allows dynamic rendering of html pages based on arguments and templates.
  * Express-router – is a library for organising the back-end routes of an express application. It helps us set up and use routes quickly and effectively.
  * React-router-dom – is an extended version of react-router library, which enables dynamic route matching to keep your UI in sync with your URL
  * React-reveal - is an animation framework for React. It's MIT licensed, has a tiny footprint and written specifically for React in ES6. It is used to create various reveal-on-scroll animations in your application.
  * React-slick – is an image carousel component used to display a gallery of images in an animated slider.
  * Cloudinary – is a cloud-based image and video management platform used to store and serve content to web applications.
  * Moment – is a date library for parsing, validating, manipulating and formatting dates.
  * React-widgets – is a set of extensible and accessible form inputs built for react

### 3. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?


### 4. Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

<<<<<<< HEAD
###2. What libraries are being used in the app and why?

#### • Bootstrap 4 – is a CSS framework used for styling responsive, mobile-first websites. This made it easier to style all our pages in a global format.
  *React.js – is a Javascript library use for building efficient and flexible user interfaces. We used it for its component feature, allowing us to easily structure our code and have it built to maximise extensibility.
  *Nodemailer – is a module for Node.js for ‘easy as cake’ email sending. We used it to forward an email to the business owner from a form on the website which can be filled out by any visitor.
  *Redux – is a state container for javascript applications which helps you manage the stored and displayed data and how you respond to user actions.
  *Axios - is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API
  *Concurrently – is a node.js package used to run multiple commands conurrently. It allows for easier testing during development, as there is only one terminal needed to run the servers.
  *Cors - is a node.js package for providing a middleware that can be used to enable cross-origin resource sharing with various options
  *Express - is a node.js framework that facilitates the rapid development of web and mobile applications. It allows the setup of middlewares to respond to http requests, defines a routing table to perform actions and allows dynamic rendering of html pages based on arguments and templates.
  *Express-router – is a library for organising the back-end routes of an express application. It helps us set up and use routes quickly and effectively.
  *React-router-dom – is an extended version of react-router library, which enables dynamic route matching to keep your UI in sync with your URL
  *React-reveal - is an animation framework for React. It's MIT licensed, has a tiny footprint and written specifically for React in ES6. It is used to create various reveal-on-scroll animations in your application.
  *React-slick – is an image carousel component used to display a gallery of images in an animated slider.
  *Cloudinary – is a cloud-based image and video management platform used to store and serve content to web applications.
  *Moment – is a date library for parsing, validating, manipulating and formatting dates.
  *React-widgets – is a set of extensible and accessible form inputs built for react

###3. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
###4. Within your own project what knowledge or skills were required to complete your project, and overcome challenges?


###5.Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

### James:
#### I understand the individual libraries and frameworks but have difficulty with the configuration between them. Also, when I see something built with different syntax as to how we learnt it in class I feel very lost. For example, I was referencing the slides and lectures for react and redux to work out how to get information from the store state, but the configuration was completely different in the store and reducer files so I had no idea how it was working. I had a similar issue with an onSubmit function and handleSubmit function, where I could see where they were initially defined, so could not distinguish how to manipulate their functionality. The projects themselves I think are good. I think more class time could be spent on understanding HTTP requests and how to deconstruct pre-defined functions and classes in APIs/ middleware/ imported libraries.
=======
### 5.Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?
>>>>>>> 52a084867dd3bb9796393ec1199a9076d5326335
