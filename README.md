# Axon Client

<img alt="Axon Client" src="./src/assets/logo.png" title="Axon" width="200"/>

User interface that consumes a REST API matching the USER contract (POST here: https://github.com/mauriciovalencia/axon-user-service) and its endpoints.

<img width="1653" alt="image" src="https://github.com/user-attachments/assets/c4121fa1-9d54-4fa4-ba01-ada377d0fb67" />

**Table of Contents**
- [Environment requirements](#markdown-header-environment-requirements)
- [Environment Variables](#markdown-header-environment-variables)
- [Installation](#markdown-header-installation)
- [Execution](#markdown-header-execution)

## Environment requirements
```
- Node v22.12.x or more
- Pnpm 9.15.x or more
```

Then, on local environment case, just cloning the repo in your local environment, and make a `.env`
file with the mandatory variables mentioned in [.env.example](/.env.example)
and described in detail in this document.

## Environment Variables

Operational

| Name           | Type     | Options    | Default | Description                    |
|----------------|----------|------------|---------|--------------------------------|
| VITE_DEBUG     | Boolean  | true/false | true    | Running on dev/prod environment |
| VITE_APP_NAME  | String   | AxonClient| AxonClient| Name of application            |
| VITE_PORT | Number | 5173 | 5173 | Port react application running |

Functional

| Name                     | Type    | Options | Default | Description                         |
|--------------------------|---------|---------|---------|-------------------------------------|
| VITE_API_USERS_URL       | String  |         |    [http://localhost:8080/users ](http://localhost:8080/api/v1/users)  | User API service url                |
| VITE_API_USER_KEY        | String  |         |    nowayjose     | Security API Key value              |


## Installation

```bash
# Step by Step

git clone https://github.com/mauriciovalencia/axon-client.git

# copy .env values to .env execution
cp .env.example .env

# install web application libs
pnpm install

# run application
pnpm run dev

# load in the web browser
# * copy url eg:http://localhost:5173/ and paste in url box from the web-browser, by default Google Chrome.

## Remember!, pnpm install, install libs for the web aplication could run
```

## Execution react application

```bash
# installation
pnp install

# development (prefereable)
pnpm run dev

# production
pnpm run build
```

## Future Improvements
Some UX details were not covered:

- Alerts when a user attempts to delete a user.
- Notifications when a user is successfully created or edited.
- Alerts for certain validation errors.
- Improvements to function parameters, perhaps using more accurate models like DTOs (Data Transfer Objects) or similar.
- Consideration of an event-driven approach in React to avoid the dreaded coupling.
- Possibly using React Context, though I'm unsure how this application will scale.
  However, it is a good practice for maintaining best practices as the app scales and to ensure better maintainability.

All of this, and many more improvements, could be included in a future version—possibly version 1.3.0 or beyond.



