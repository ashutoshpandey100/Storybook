# React Component Library

This project contains two reusable UI components, `InputField` and `DataTable`, built with React, TypeScript, and TailwindCSS. It also includes Storybook for component visualization and Jest for testing.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd isassignment
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Run Storybook:**
    ```bash
    npm run storybook
    ```

5.  **Run tests:**
    ```bash
    npm run test
    ```

## Approach

### InputField

The `InputField` component is designed to be flexible and accessible. It uses `class-variance-authority` to manage different variants and sizes, and `tailwind-merge` to handle class name conflicts. It also includes features like a password toggle and a clear button.

### DataTable

The `DataTable` component is a generic component that can display any type of data. It supports sorting, row selection, and loading/empty states. It is designed to be accessible and responsive.
