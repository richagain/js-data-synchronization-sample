# Javascript Data Synchronization Example

This sample codes demonstrates data synchronization using a web worker, local storage, and periodic data updates. The application fetches data from an API, stores it in local storage, and updates the displayed data at regular intervals.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- A web browser (e.g., Chrome, Firefox)
- A local web server (e.g., [http-server](https://www.npmjs.com/package/http-server) from npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/richagain/js-data-synchronization-sample.git
   cd js-data-synchronization-sample
   ```

2. Serve the project using a local web server:

   If you have http-server installed, you can use the following command:

   ```bash
   npx http-server
   ```

   Alternatively, you can use any other method to serve the files locally.

   Open your web browser and navigate to the local server address (e.g., <http://127.0.0.1:3000>).

## Project Structure

- index.html: The main HTML file containing the layout and JavaScript to render data and handle user interactions.

- worker.js: The web worker script that fetches data from the API, processes it, and posts updates back to the main thread.

## Usage

- The top bar displays the current interval, current index, list items count, and the timestamp of the last data update.
- The data list is displayed below the top bar, with the current item highlighted.
- Use the "Previous" and "Next" buttons to navigate through the data manually.
- The data updates automatically every 5 seconds, with new data being fetched and processed by the web worker.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
