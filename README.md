# Register Form App

A simple React application featuring a user registration form.

## Overview

This project contains a basic registration form built with React and Material-UI components. The form collects user information such as name, email, and CPF (Brazilian individual taxpayer registry number). It includes form validation for the CPF field and utilizes state management with React hooks.

## Project Structure

- `src/components/RegisterForm.js`: The main component file containing the registration form implementation.
- `src/App.js`: The entry point of the application, where the `RegisterForm` component is rendered.
- `public/index.html`: The HTML template file for the React application.

## Usage

1. Fill in the required information in the registration form.
2. Check and uncheck the "Newsletter" and "Sales" switches to indicate subscription preferences.
3. Click the "Register now!" button to log the user's input in the console.

## Dependencies

- React: https://reactjs.org/
- Material-UI: https://mui.com/

## Validation

- The CPF field has validation to ensure it is 11 characters long.
