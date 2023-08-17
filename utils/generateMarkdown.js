// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache-2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL-3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'ISC':
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}  <!-- Include the license badge here -->

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## License
  
  This project is licensed under the ${data.license} license.
  
  ## Questions
  
  For any questions or feedback, please feel free to reach out to me:
  
  GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  Email: [${data.email}](mailto:${data.email})
    `;
  }  

module.exports=generateMarkdown