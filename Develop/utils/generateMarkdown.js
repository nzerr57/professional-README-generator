// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (answers) => {
  switch (answers) {
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
      break;
    case 'Apache 2.0':
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
      break;
    case 'BSD 3-Clause':
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
      break;
      case 'None':
        return ""
        break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (answers) => { 
  switch (answers) {
  case 'MIT':
    return `[MIT License](https://opensource.org/licenses/MIT)`
    break;
  case 'Apache 2.0':
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
    break;
  case 'BSD 3-Clause':
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`
    break;
    case 'None':
      return ""
      break;
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (answers) => { 
  if (answers !== 'None') {
    return `## License`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) =>
  `# ${answers.title}

${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Questions](#Questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ${renderLicenseSection(answers.license)}
  ${renderLicenseLink(answers.license)}

  ## Contributors
  ${answers.contributors}

  ## Questions
  If you have any questions please reach out at github.com/${answers.github} or ${answers.email}
`;

module.exports = generateMarkdown;
