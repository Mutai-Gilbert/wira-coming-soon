# Connect with Talent

A platform to connect individuals, companies, and government entities.

## Table of Contents

- [Connect with Talent](#connect-with-talent)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)
  - [Troubleshooting](#troubleshooting)

## Overview

Connect with Talent is a web application designed to facilitate connections between:

* **Talents:** Individuals seeking opportunities.
* **Companies:** Organizations looking to hire.
* **Government Entities:** Government organizations with talent needs or initiatives.

This platform aims to streamline the process of finding the right talent and connecting organizations with the resources they need.

## Features

* **Talent Registration:** Individuals can register their profiles with their skills and experience.
* **Company Registration:** Companies can register their details and hiring needs.
* **Government Entity Registration:** Government organizations can register their details and talent interests.
* **Database Integration:** Uses Supabase for secure and scalable data storage.
* **API Endpoints:** RESTful API for managing talent, company, and government entity data.
* **User Interface:** A user-friendly interface for easy navigation and interaction.
* **Form Validation:** Input validation to ensure data quality and integrity.
* **Responsive Design:** Works seamlessly across various devices.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js:** (Recommended version: v18 or later) - [Download Node.js](https://nodejs.org/)
* **npm** or **yarn:** (Node package managers) - npm is included with Node.js, yarn can be installed separately: [Install Yarn](https://yarnpkg.com/getting-started)
* **Supabase Account:** You'll need a Supabase account to host your database. - [Create Supabase Account](https://supabase.com/)
* **Git:** (For version control) - [Download Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

## Database Setup

1.  **Create a new project in Supabase:**
    * Go to your Supabase dashboard and create a new project.

2.  **Create the necessary tables:**
    * Use the SQL editor in your Supabase dashboard to create the `talents`, `companies`, and `government_entities` tables.
    * You can use the following SQL schema:

3.  **Obtain your Supabase credentials:**
    * Go to your Supabase project settings to find your Supabase URL and API keys (anon or service\_role, depending on your needs).

## Environment Variables

You need to set up environment variables for your application to connect to the Supabase database.

1.  **Create a `.env.local` file** in the root of your project.

2.  **Add the following variables:**

    ```
    NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
    NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
    # If you have other API keys add them here. Example:
    # API_STATS_KEY=<your_api_stats_key>
    ```

    * Replace `<your_supabase_url>` and `<your_supabase_anon_key>` with your actual Supabase credentials.
    * If you have other API keys, add them to this file.

## Running the Application

1.  **Start the development server:**

    Using npm:

    ```bash
    npm run dev
    ```

    Using yarn:

    ```bash
    yarn dev
    ```

2.  **Open your browser:**

    * Go to `http://localhost:3000` to view the application.

## Testing

To run the tests:

1.  **(If you have tests set up) Follow the testing instructions provided in your project.**

## Contributing

Contributions are welcome!

1.  **Fork the repository.**
2.  **Create a new branch** (`git checkout -b feature/your-feature`).
3.  **Make your changes.**
4.  **Commit your changes** (`git commit -am 'Add some feature'`).
5.  **Push to the branch** (`git push origin feature/your-feature`).
6.  **Create a new Pull Request.**

## License

[Specify the license you are using, e.g., MIT License]

## Troubleshooting

* **"fetch failed" Error:**
    * Ensure your Supabase URL and API key are correctly set in the environment variables.
    * Check your network connectivity to the Supabase server.
    * Verify your Supabase project's CORS settings.
* **"Invalid API key" Error:**
    * Double-check the API key in your environment variables.
    * Make sure you are using the correct type of API key (anon or service\_role).
* **UI Styling Issues:**
    * Inspect elements in your browser's developer tools to identify CSS conflicts or missing styles.
    * Ensure your CSS or styling framework is configured correctly.
* **Database Connection Errors:**
    * Verify your Supabase credentials and database setup.
    * Check your Supabase service status.
* **Dropdown Flags Not Displayed:**
    * Inspect the component responsible for the phone number input and country code dropdown.
    * Verify that the data source for the country codes and flags is correctly loaded and accessible.
    * Check if there are any conditional rendering or state management issues.
    * Inspect the CSS styles applied to the dropdown and its content.

If you encounter other issues, please refer to the project's issue tracker or contact the maintainers.