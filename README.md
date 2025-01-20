# ExploreUsers

This is a React-based application that allows users to explore a list of users, view their details, and sort them alphabetically. It uses the JSONPlaceholder API for user data and Material UI for styling and components.

## Features

- *User Listing:* Displays a paginated list of users.
- *Alphabetical Sorting:* Allows users to sort the user list by A-Z or Z-A order.
- *User Details:* Displays detailed information about a selected user, including their company and address.
- *Responsive Design:* The application is designed to be responsive and work well on different screen sizes.
- *Dark Mode Support:* Provides a toggle to switch between light and dark modes for better readability.
- *Error Handling:* Handles API errors and displays an appropriate failure view.
- *Loading Indicators:* Displays skeleton loaders while the application fetches user data.
- *Search:* Functionality to search and filter users.

## Tech Stack

- *React:* JavaScript library for building user interfaces.
- *Material UI:* Component library for implementing UI elements.
- *React Router DOM:* For routing within the application.
- *uuid:* To generate unique IDs.
- *reactjs-popup:* Library for modals and tooltips.
- *JSONPlaceholder API:* To get the user data.
- *CSS:* For styling.

## Folder Structure

- *public/*: Contains static files such as HTML, logos, and other images.
- *src/*: Contains the application source code:
    - *components/*: Reusable UI components:
        - *Home/*: Main page component displaying all user list.
        - *Navbar/*: The navigation bar with the dark mode switch.
        - *PageNotFound/*: A page for when a route doesn't match.
        - *Tabs/*: Component for switching between user tabs.
        - *UserCard/*: Component to display a user in a list.
        - *UserDetails/*: Component to display details of a user.
    - *context/*: Contains theme and user context files:
        - *theme.js*: Configurations for the dark/light mode theme.
        - *userContext.js*: User context.
    - *App.js*: Main application component.
    - *index.js*: Entry point of the application.
    - *style.js*: Contains reusable components.
- *.gitignore*: Specifies intentionally untracked files that Git should ignore.
- *FETCH_HEAD*: The local storage location for the last git fetch.
- *LICENSE*: Information about the license the project is using.
- *README.md*: The project's instructions file.
- *package-lock.json*: Contains the dependency information for the project.
- *package.json*: Contains information such as the app name, versions, and scripts.



### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
``

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/nani1920/ExploreUsers.git
   ```
2. Navigate to the project directory
   ```sh
   cd ExploreUsers
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm start
   ```
5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.


## Contributing

Feel free to contribute by submitting pull requests or reporting issues. Contributions are welcome!
