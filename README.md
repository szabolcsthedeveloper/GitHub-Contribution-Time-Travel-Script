# GitHub Contribution Time Travel Script

This repository contains a script that automates GitHub contributions by making daily commits to a JSON file and pushing the changes to a remote repository. This can be used to add future commits ahead of time.

## Usage

Follow the steps below to download and use the GitHub Contribution Bot:

### Prerequisites

- [Node.js](https://nodejs.org) installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/szabolcsthedeveloper/github-contribution-bot.git
 	```
    
2. Navigate to the project directory:
	```bash
	cd github-contribution-bot
	```

2. Install the dependencies:
	```bash
	npm install
	```
  
  
### Configuration
Before running the script, make sure to configure the repository URL and other settings.

1. Open the index.js file in a text editor.
2. Update the filePath variable with the desired file path of the JSON file to be modified.
3. Modify the data object to include the desired data structure and content for your JSON file.
4. Update the remoteUrl variable inside the pushChanges function to the URL of your remote repository.

### Usage
To run the script and make daily commits to the JSON file, follow these steps:
1. Open a terminal or command prompt in the project directory.
2. Run the following command:

	```bash
	node index.js
	```
	The script will generate a commit with the current date and push the changes to the remote repository.

3. Schedule the script to run automatically daily using a task scheduler or a cron job. This ensures regular commits and updates to your GitHub profile.

### Customization
Feel free to customize the script according to your needs:
- Adjust the data structure and content in the data object to match your desired JSON file format.
- Modify the commit message and commit date format to your preferences.
- Explore the options provided by the jsonfile, moment, and simple-git libraries to extend the functionality of the script.
### License
This project is licensed under the MIT License.
