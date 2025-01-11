# Form Builder Application

## Description

This is a form builder application created as part of an assignment from 6sense Technologies. The project allows the dynamic creation of input fields and select boxes with validation, allowing users to input data and manage multiple entries. Each input field and select box is accompanied by validation, ensuring that no field is left empty before submission. The app displays the current state of the form in a table format, making it easy to track the values entered by the user.

## Why I Built This Project

The goal of this project was to create a dynamic form that not only collects user data but also includes validation and allows for the addition and removal of input fields and select boxes. The application showcases handling form states, managing dynamic form fields, and integrating proper error handling—all while working with a modern tech stack like React, TypeScript, and CSS.

## Technology Used

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **UI Components**: ShadCN UI, React Icons
- **State Management**: React Hook Form for handling form validation
- **Form Validation**: React Hook Form with Zod

## How to Run the Project

1. **Clone the repository:**

    ```bash
    git clone https://github.com/farhan-sadik247/form-challange.git
    ```


2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Preview

![merged (2)](https://github.com/user-attachments/assets/6f12b1d8-ae4b-46f6-a5fb-56646433fc66)



## Functional Requirements

The form builder application meets the following requirements:

#### Form Creation:
- A form with an input field and a select box, displayed side by side.

#### Field Validation:
- All fields are required. Error messages will be displayed below the input and select boxes if the form is submitted with empty fields.

#### State Display:
- The state of the form is displayed below the form using `<h3>` tags for easy visibility.

#### Dynamic Field Addition:
- A plus button (+ Add Field) that adds one input field and one select box to the form.

#### OnChange Handling:
- The `onChange` event of the input field and select box is handled, updating the state to store the current values entered.

#### Field Deletion:
- Each field pair (input field + select box) has a delete button. Clicking the button removes the corresponding input field and select box.

#### Validation:
- All fields are required, and if left empty, an error message will appear below the field after the form is submitted.

#### Form State Table:
- The state of the form is displayed in a table format below the form, listing all input values and their corresponding select values.
