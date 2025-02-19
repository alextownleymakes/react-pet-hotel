# Pet Hotel Management System

A local pet hotel needs your help to improve their ability to serve their customers. They want to be able to keep track of the furry friends who stay with them and ensure that the staff has the appropriate level of access for their role.

## Assignment

You will be implementing basic authentication and authorization for the pet hotel management system as well as some read-only features. Approach this assignment as if you were working on a real-world project, including any planning and testing that you would normally do.

You are welcome to look up documentation for the language and libraries you use, but please disable any AI tools before you begin.

### Login Page

    - The login form should have an input for a username and a submit button.
    - If the username exists in the user data, the login is succesful, and the user is redirected to the Home page.
    - If the username does not exist, the login fails, and the user should see a relevant error message.

### Home Page

    - Redirect to the Login Page if the user is not logged in; otherwise, display the Pet List.
    - The user should also be able to logout from the Home Page.

#### Pet List

    - If the user has the `admin` role, the page should display the Pet List with the following data:
        - pet name
        - owner name
        - favorite toys
        - checked in status
    - If the user has the `staff` role, the page should display the Pet List with only the pets that are checked in.
    - The pets should be returned alphabetically by first name.
    - The user should be able to filter the list by pet or owner name.

## Notes

login page - only needs username field & button, conditional error message
redirect based on auth
pet list with data fetch, auth role check & conditional data disp, sort function

### UI/UX

- Please use semantic HTML.
- For the purpose of this assignment, there is no need to use an external component library.
- You can use CSS or Tailwind for basic layout and styling.

### Data Fetching & Server State Management

- You can use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) or your library of choice to fetch the data.
- [Tanstack React Query](https://tanstack.com/query/latest/docs/framework/react/overview) is installed if you are familiar with it and would like to use it.

### Routing

- You can use the `wouter` library to handle routing. [Wouter Docs](https://github.com/molefrog/wouter)

### Mocking

- The API is mocked with `msw`. This will run in both the browser and the test environment, so you can write tests without needing to mock fetch calls. [MSW Docs](https://mswjs.io/docs/)

### Testing

- You can use `vitest` and `@testing-library/react` to write tests. [Vitest Docs](https://vitest.dev/docs/) | [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
