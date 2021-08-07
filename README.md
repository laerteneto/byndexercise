# Bynd exercice

In this exercice we are going to use the Cypress framework [Cypress](https://www.cypress.io/).
The API documentation is available [here](https://docs.cypress.io/api/api/table-of-contents.html).

### Dependencies

You will need to install the Node.js to execute the project. Download the latest Node available version [here](https://nodejs.org/pt-br/download/).

After the completed node's installation, you will need to clone this current repo.

> ```bash
> # Git Links
> git clone
> ```

### Installing the dependencies

Open the repo folder and install all dev dependencies using:

> ```bash
> yarn
> ```

You will see the following messages:

> ```bash
> yarn install v1.15.2
> info No lockfile found.
> [1/4] 🔍  Resolving packages...
> [2/4] 🚚  Fetching packages...
> [3/4] 🔗  Linking dependencies...
> [4/4] 🔨  Building fresh packages...
> success Saved lockfile.
> ```

### How to Run the tests with Cypress Interface

To run the specs with headed GUI and have a way to debug the tests:

> ```bash
> yarn cypress open
> ```

With the last command above, Cypress interface will be open and you can select the browser and the exactly file that you want to run. In addition, you are able to select to run all files directly clicking on "Run All Specs" Button.

Also, you can run in headless and follow all tests using the command below:

> ```bash
> yarn cypress run
> ```
