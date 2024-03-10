#🚘Rental Car

### 👋 Test task

![Скріншот додатку](/public/readme/test-task_.gif)

## 📝Description

Create an application for a company that provides car rental services in Ukraine
for rent. The application consists of 3 pages:

### 🔍Here is some of the functionality:

📋 **Home Page** - home page with a general description of the services provided
by the the company provides. Styling and design are at your discretion.

📋 **Catalog page** - a page containing a catalogue of cars of various
configurations, which the user can filter by brand, price per hour of car
rental, and the number of kilometres travelled by the car during its operation
(mileage).

📋 **Favorites page** - page with ads that have been added to the user's
favourites The appearance of the application should consist of navigation
(design at your discretion) and the at your discretion and the viewing area.

## 🎯Technical task

✔️According to the layout, implement a car rental ad card.

✔️On the first page of the catalogue, 12 ads should be rendered, and the rest of
them should be rendered after by clicking on the Load more button.

✔️When you click on the heart button on the ad card, it should added to the list
of favourites, and the colour of the button should change.

✔️When refreshing the page, the end result of the user's actions should be
recorded. That is, if you add an ad to your favourites and refresh the page, the
button still still remains in the "favourite ad" state with the corresponding
colour.

✔️If you click on the heart button again, the ad should be removed from the list
of favourites, and the colour of the button should change to its original state.

✔️The modal window should be closed by clicking on the "cross" button, by
clicking on the backdrop or pressing the Esc key.

✔️In the code, the mileage of the car must be written in one value (for example,
4500). В UI - displayed separated by commas (4,500).

✔️The Rental car button should be implemented as a link that will allow the user
to contact the company by calling +380730000000.

✔️Add filtering. Dropdown with car brands makes.json - show ads with cars of the
corresponding brand.

## 🎯 Routing

📋 Create a routing using React Router. The application should have the
following routes: "/" - the home page with a general description of the services
provided by the company "/catalogue" - a page containing a catalogue of cars of
different configurations "/favourites" - a page with ads that have been added to
the user's favourites If a user goes to a route that does not exist, they should
be redirect to the home page.

📋 To work with the list of ads, create your own personal backend for
development using the UI service https://mockapi.io/. Create an adverts
resource. Use the resource constructor and describe the advert object as
described below.

### 🔍Advert:

✔️ Create an advert in Mockapi with the following fields: id, year, make, model,
type, img, description, fuelConsumption, engineSize, accessories,
functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage
(see screenshot below). Do not add new fields! To fill the collection, you can
take adverts.json. If the data is missing or incomplete, please add it by
yourself.

✔️ The database should contain at least 32 ads with different values (at your
discretion). Implemented pagination, where one pagination page should contain 12
ads.Pagination should be implemented on the Mockapi side.

### 🔍Add filtering:

✔️ Dropdown with car brands makes.json - show ads with cars of the corresponding
brand

### 🔍An additional task:

✔️ Dropdown with prices per hour of car rental ($10 increments) - show ads with
cars whose rental price falls within the price range selected by the user.

✔️ A group of inputs to determine the range of mileage within which the user
will search for ads.

### 🔍Performance criteria:

✔️The layout is fixed in the rh, semantic and valid.

✔️Mandatory use of Redux.

✔️The Axios library is used for queries.

✔️Pagination is implemented on the backend.

✔️No errors in the browser console.

✔️Interactivity works in accordance with the terms of reference.

✔️The code is formatted and does not contain unused code.

✔️The README.md must be described in the repository.

✔️The project is available on github pages or netlify.com.

## 🔧 Technologies used in the task:

### **Frontend**:

<p align="left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Skills" width="40" height="40"/>  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Skills" width="40" height="40"/> 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Skills" width="40" height="40"/>  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Skills" width="40" height="40"/>  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Skills" width="40" height="40"/>  
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Skills" width="40" height="40"/> </p>

### **Backend**:

### **💬MockApi.io**

### **Utilits**:

<p align="left" ><img width="40" src="https://vitejs.dev/logo.svg" alt="Vite logo">
<img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma"  width="40" height="40"/>
<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"  width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Skills" align="left" width="40" height="40"/>
