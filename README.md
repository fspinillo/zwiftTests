## Getting Started

### Prerequisites

#### Node
This has been tested on Node 15, but should work on earlier versions. To check if node is installed run `node -v` from your terminal. If nothing returns you will need to install node. I recommend us [node-nvm](https://github.com/nvm-sh/nvm) as it simplifies installing and swapping node versions.

#### Browsers
The latest version of Chrome and Firefox must be installed locally.

### Set-up
1. Download or clone the GitHub repo
2. Navigate to the folder and install the node modules `npm -i`

### Running tests

Tests have been pre-configured in the `package.json` to streamline ease of use. There is a configuration for Chrome, Firefox, and Chrome in headless mode. To run each test enter the following from the root of the folder.

```javascript
npm run test:chome
npm run test:firefox
npm run test:headless
```

### Viewing test report

The test framework uses Allue to manage reporting, and files will be auto-generated at the end of the test run. Allure supports historical data of up to the last 5 runs. Viewing the report is built into `package.json` and can be accessed using `npm run report:open`.

*Note*
This will spawn a lightweight Java server to allow you to view the assests. The page will auto-load in your default browser. Depending on your OS version it could present a warning to allow Java access to the reporter. The server does not close when the page is closed. You most go back to the terminal and quit the server with `control-c`.

#### Understanding the report

Allure reports are verbose in their information, but quite easy to understand.

##### Homepage
This is an overview of the most current run and historical trends that are going on

##### Suites
This is the top level of each `describe` present in the frame work with each `it` nested below.

##### Graphs
Presents an overview of different data for the suite.

##### Timeline
Breakdown of the time for the overall test run that lets you narrow in time to identify the slowest or fastest tests

##### Behaviors
This title is misleading, but it's really more like 'Features'. Each test is identified with a feature and they're grouped into this cateogry.

##### Individual tests
Each individual test presents steps, history and retries if present. To view this data just click on a test and it will show the data.