# 🎭 Playwright TypeScript Example 🎭

![twitter](https://img.shields.io/twitter/follow/NirTal2)
![YouTube Channel](https://img.shields.io/youtube/channel/subscribers/UCQjS-eoKl0a1nuP_dvpLsjQ?label=YouTube%20Channel)
![dev run](https://github.com/nirtal85/playwright-typescript-example/actions/workflows/devRun.yml/badge.svg)
![nightly](https://github.com/nirtal85/playwright-typescript-example/actions/workflows/nightly.yml/badge.svg)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)

## 📃 Articles written about this project

* [Test Automation - Accelerating Playwright TypeScript Tests with Parallel Execution in GitHub Actions and Allure Reporting](https://www.test-shift.com/posts/test-automation-accelerating-playwright-typescript-tests-with-parallel-execution-in-github-actions-and-allure-reporting)
* [Test Automation - How to Use Dynamic Base URLs with Playwright TypeScript in GitHub Actions](https://www.test-shift.com/posts/test-automation-how-to-use-dynamic-base-urls-with-playwright-typescript-in-github-actions)
* [Test Automation - How To Attach Public IP Address to Allure Report using Playwright TypeScript Auto Fixtures](https://www.test-shift.com/posts/test-automation-how-to-attach-public-ip-address-to-allure-report-using-playwright-typescript-auto-fixtures)
* [Test Automation - Data-Driven Testing (DDT) with Playwright TypeScript Using Excel](https://www.test-shift.com/posts/test-automation-data-driven-testing-ddt-with-playwright-typescript-using-excel)
* [Test Automation - Efficient Element Selection with Playwright Typescript using Test IDs](https://www.test-shift.com/posts/test-automation-efficient-element-selection-with-playwright-typescript-using-test-ids)
* [Test Automation - Optimizing Playwright Test Reports: Automating Allure Results Merging with GitHub Actions](https://www.test-shift.com/posts/test-automation-optimizing-playwright-test-reports-automating-allure-results-merging-with-github-actions)
* [Test Automation – Unleashing the Power of AI with Playwright and TypeScript](https://www.test-shift.com/posts/test-automation-unleashing-the-power-of-ai-with-playwright-and-typescript)

## 🛠️ Tech Stack

| Tool                                                                 | Description                                                                                                  |
|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| [@types/node](https://www.npmjs.com/package/@types/node)             | TypeScript definitions for Node.js                                                                           |
| [allure-playwright](https://www.npmjs.com/package/allure-playwright) | Allure framework integration for Playwright Test framework                                                   |
| [dotenv](https://www.npmjs.com/package/dotenv)                       | Loads environment variables from a `.env` file into `process.env`                                            |
| [husky](https://www.npmjs.com/package/husky)                         | Git hooks for enforcing rules in commits and push events                                                     |
| [lint-staged](https://www.npmjs.com/package/lint-staged)             | Run linters on git staged files                                                                              |
| [Playwright](https://www.npmjs.com/package/@playwright/test)         | A framework for Web Testing and Automation                                                                   |
| [TypeScript](https://www.npmjs.com/package/typescript)               | A typed superset of JavaScript                                                                               |
| [xlsx](https://www.npmjs.com/package/xlsx)                           | Library to parse and write Excel files                                                                       |
| [Biome](https://www.npmjs.com/package/@biomejs/biome)                | A toolchain for web projects, aimed to provide developer tools for verifying code and boosting productivity. |

For the best development experience, we recommend installing
the [Biome IntelliJ plugin](https://plugins.jetbrains.com/plugin/22761-biome).

## ⚙️ Setup Instructions

### Clone the project

```bash
git clone https://github.com/nirtal85/playwright-typescript-example.git
cd playwright-typescript-example
```

### Install dependencies

```bash
corepack enable
pnpm install
```

### Install playwright browsers

```bash
playwright install --with-deps
```

### Create .env File

Create a `.env` file in the project root directory to securely store project secrets and configuration variables. This file will be used to define key-value pairs for various parameters required by the project. Add the following properties to the `.env` file:

#### General Configuration

| Parameter          | Description                                                               | Example Value                 |
|--------------------|---------------------------------------------------------------------------|-------------------------------|
| DOMAIN             | Current execution environment (e.g., DEV, CANARY, PROD). Defaults to DEV. | "DEV"                         |
| BASE_URL           | The base URL for the application                                          | "https://example.com"         |
| MAILINATOR_API_KEY | API Key for Mailinator service                                            | "your_mailinator_api_key"     |
| MAILINATOR_DOMAIN  | Domain name for Mailinator                                                | "your_mailinator_domain"      |
| LD_TOKEN           | LaunchDarkly API access token.                                            | "api-xxxxxxxxxxxxxxxxxxxx"    |

#### Visual Regression Tracker (VRT) Configuration

These variables are required if using the `VisualTrackerService`.

| Parameter      | Description                                  | Example Value                 |
|----------------|----------------------------------------------|-------------------------------|
| VRT_APIURL     | Visual Regression Tracker API URL            | "https://vrt.example.com/api" |
| VRT_PROJECT    | Visual Regression Tracker Project ID         | "project_id"                  |
| VRT_CIBUILDID  | Visual Regression Tracker Build Number       | "build_number"                |
| VRT_BRANCHNAME | Visual Regression Tracker Branch Name        | "main"                        |
| VRT_APIKEY     | Visual Regression Tracker API Key            | "your_api_key"                |

#### Database Configuration

These variables are required if using the `DatabaseService`.

| Parameter   | Description                                           | Example Value             |
|-------------|-------------------------------------------------------|---------------------------|
| DB_HOST     | Hostname or IP address of the MySQL database server.  | "db.dev.example.com"      |
| DB_PORT     | Port number for the MySQL database server (optional). | 3306                      |
| DB_USER     | Username for connecting to the database.              | "your_db_user"            |
| DB_PASSWORD | Password for the database user.                       | "your_secret_db_password" |
| DB_DATABASE | Default database/schema name to use (optional).       | "my_application_schema"   |

#### SFTP Configuration

These variables are required if using the `SftpService`.

| Parameter     | Description                        | Example Value              |
|---------------|------------------------------------|----------------------------|
| SFTP_HOST     | Hostname or IP for SFTP server.    | "sftp.example.com"         |
| SFTP_USER     | Username for SFTP connection.      | "sftp_user"                |
| SFTP_PASSWORD | Password for SFTP user.            | "sftp_password_secret"     |

#### Secure API Service Configuration

These items are required if using the `SecureApiService` for mutual TLS (mTLS) authentication.

1.  **Client Certificate Files:**
    *   Place your client certificate file named `cert.pem` in the `./resources/certificate/` directory.
    *   Place your corresponding private key file named `private-key.pem` in the `./resources/certificate/` directory.

2.  **Bearer Token Environment Variable:**
    *   Add the following variable to your `.env` file:

    | Parameter | Description                                    | Example Value                 |
    |-----------|------------------------------------------------|-------------------------------|
    | BEARER    | The Bearer token for API Authorization header. | "your_very_long_bearer_token" |

## 🏃‍♂️ Running Tests

Run all tests:

```bash
playwright test
```

Run tests via UI mode:

```bash
playwright test --ui
```

## 📊 Viewing Test Results

### Install Allure Commandline To View Test results

#### For Windows:

Follow the instructions [here](https://scoop.sh/) to install Scoop.<br>
Run the following command to install Allure using Scoop:

```bash
scoop install allure
```

#### For Mac:

```bash
brew install allure
```

### View Results Locally:

```bash
allure serve allure-results
```

### View Results Online:

[View allure results via Github pages](https://nirtal85.github.io/Playwright-Typescript-Example/)

## ℹ️ View Help And Other CLI Options

```bash
playwright test --help
```

## ☕ Support

If you find this project helpful, you can support my work by buying me a coffee:

 <p><a href="https://www.buymeacoffee.com/nirtal"> 
 <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="Buy Me A Coffee" />
 </a></p><br><br>