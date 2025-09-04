# QA Automation Practice - XAcademy Program

## Overview

This repository contains automated testing practices developed as part of the XAcademy QA Automation Program. The tests are focused on the Ticketazo website, implementing comprehensive end-to-end testing scenarios using Cypress.

## Project Description

Ticketazo is a ticket purchasing platform where users can register, browse events, and buy tickets. This project demonstrates QA automation best practices through real-world testing scenarios on the platform's user registration and core functionalities.


## Installation Guide

1. Prerequisites
* Git installed
* A code editor (VS Code sugested)
* Access to a command-line terminal (Terminal on macOS/Linux or PowerShell on Windows)

2. Install Node.js

* Download the latest LTS version from the official Node.js website
* Follow the installer steps and make sure npm (Node Package Manager) is included.
* Verify the installation by running:

node -v
npm -v

This should display the installed versions of Node.js and npm.


45. Project Setup

Clone the repository:

git clone https://github.com/ceurrutia/TicketazoQA.git
cd TicketazoQA


6. Install project dependencies using the command

* npm install
* Verify the installation: npx cypress -v

This will display the installed Cypress version.

7. Install mochawsome

To generate HTML reports from Cypress test results, install Mochawesome and related tools:

npm install mochawesome mochawesome-merge mochawesome-report-generator

8. Run Cypress

* To open the Cypress Test Runner:npx cypress open
* To run tests in headless mode: npx cypress run
