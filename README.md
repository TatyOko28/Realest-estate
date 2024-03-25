# About Bouesso_Service (essaise)

In this project, I would like to present my know-how as a full stack developer. To begin with, this project is designed to allow a group of real estate agents in different locations to promote their business on a digital platform by selling or renting houses. From building it to deploying it on github, it took me about 8 days.

## Types of backend technologies used
To do this, at the backend level, I used various technologies such as: django, djangorestframework, django-cors-headers, djangorest framework-simplejwt, pillow, psycopg2.

## Importance of these technologies
djangorestframework: allows the junction between the server side (django) and the frontend side (React). If we only had html templates, we shouldn't use it.
django-cors-headers: allows communication between the backend and frontend during requests AJAX made from a domain different from that where the Django application is hosted.
djangorestframework-simplejwt: it allows to obtain tokens (access or refresh django-web-token) during authentication.
Pillow: is a Python library that provides powerful image processing and manipulation capabilities.
psycopg2: allows communication with the postgresql database.


## Types of frontend technologies used
At the frontend level, we used different technologies such as: react-router-dom, Redux, redux-thunk, react-redux, redux-devtools-extension, uuid, react-loader-spinner

## Importance of these technologies
react-router-dom: a routing library for React applications. It makes navigation easier to manage, allowing your application to switch between different "pages" without reloading the entire page.
Redux: helps you write applications that behave consistently, run in different environments (client, server, and native)
redux-thunk:  it allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
react-redux:  it lets your React components read data from a Redux store, and dispatch actions to the store to update state.
redux-devtools-extension: allows us to display a table for managing the behavior of our app at the time of authentication or at the time of other action that causes the frontend and the database to react;
uuid: allows unique identification;
react-loader-spinner: allows you to display the loading signal when waiting for an async or wait function.

To install the dependencies we used the package managers for each language. for example: `npm install` for node.js libraries or `python manage.py install` for pythons libraries.
