
# Automated Testing with Playwright

This repository contains automated end-to-end (E2E) tests for the Dydx trading application using TypeScript and Playwright.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Tests Locally](#running-tests-on-testnet)
- [Running Tests on Mainnet](#running-tests-on-mainnet)
- [Continuous Integration (CI)](#continuous-integration-ci)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Test Strategy](#test-strategy)
- [Future Work](#future-work)
## Prerequisites
Before you begin, ensure you have the following installed on your machine:

- Node.js (version 18 or higher)
- npm (Node Package Manager)

## Project Structure

```bash
├── .github/workflows        # CI workflow definitions
├── tests                    # Playwright test files
│   ├── trade-ticket         # Tests related to the trade ticket feature
│   │   ├── stop-order       # Stop order tests
│   │   │   └── stop-order-limit.spec.ts
│   ├── trade-ticket.ts      # Page Object Model for the trade ticket
├── .env.testnet             # Environment variables for testnet
├── .env.mainnet             # Environment variables for mainnet
├── package.json             # Project dependencies and scripts
├── playwright.config.ts     # Playwright configuration
```

## Installation

Clone the repository and install the required dependencies:

```bash
# Clone the repository
git clone https://github.com/Wallace467/dYdX-Ops-SubDAO---QA-Take-home-Assessment.git

# Navigate to the project directory
cd Objective-2-automated-tests

# Install dependencies
npm install

# Install Playwright
npm install playwright

# Install Test Browsers
npx playwright install
```

## Environment Variables

The tests rely on environment variables to run against different networks (testnet or mainnet). Two environment files are used:

- `.env.testnet`: Contains environment variables for the testnet environment.
- `.env.mainnet`: Contains environment variables for the mainnet environment.

### Important Notes:

- **Sensitive Information**: Do not commit `.env` files containing sensitive information (API keys, secrets) to version control.
- **GitHub Secrets**: For CI runs, sensitive environment variables should be stored securely using GitHub Secrets.

## Running Tests on Testnet

By default, the tests run against the testnet environment.

Copy the Testnet Environment Variables:

```bash
cp .env.testnet .env
```

Run the Tests:

```bash
npx playwright test
```

## Running Tests on Mainnet

To run the tests against the mainnet environment:

Copy the Mainnet Environment Variables:

```bash
cp .env.mainnet .env
```

Run the Tests:

```bash
npx playwright test
```

## Additional Playwright Commands

#### Run a Specific Test File

```bash
npx playwright test tests/trade-ticket/stop-order/stop-order-limit.spec.ts
```

#### Run a Specific Test 

```bash
npx playwright test --grep "stop limit trigger price above/below"
```

#### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## Continuous Integration (CI)

### GitHub Actions Workflow

The repository includes a GitHub Actions workflow defined in `.github/workflows/playwright-tests.yml` to automate testing on push and pull request events.

#### Triggering Tests Manually

You can manually trigger the workflow and select the network to run tests against:

1. Navigate to the **Actions Tab**: Go to your GitHub repository and click on the "Actions" tab.
2. Select the Workflow: Choose the "Playwright Tests" workflow from the list.
3. Run the Workflow:
   - Click on the "Run workflow" button.
   - Select the branch and the network (testnet or mainnet).
   - Click "Run workflow" to start the job.

### Workflow Overview

- **Environment Selection**: The workflow allows selecting between testnet and mainnet networks.
- **Environment Variables**: Based on the selected network, the workflow sets up the corresponding environment variables.
- **Secrets Handling**: For sensitive data, use GitHub Secrets to securely pass environment variables.

## Test Strategy:
Please read the e2e test strategy doc, `TEST_STRATEGY.md`

## Writing and Organizing Tests

- **Test Framework**: We use Playwright for E2E testing.
- **Test Files**: Located in the `tests/` directory.
- **Page Object Model (POM)**: The `TradeTicket` class in `tests/trade-ticket.ts` encapsulates interactions with the trade ticket component.

### Test Structure:

- **Describe Blocks**: Group related tests using `test.describe`.
- **Before Each Hook**: Use `test.beforeEach` to set up common preconditions.
- **Assertions**: Use `expect` from Playwright Test for assertions.


## Future Work:

- **Enhance Test Coverage**: Review the application to identify critical user flows and edge cases.
- **Locators**: Create data-testids for elements. Share these test ids across the app and tests so that tests self heal.
- **Connect Wallet**: Create a connect wallet helper that utilises local storage/apis. So that we don't automate unnecessary front ends.
- **Move tests to app repo**: Move tests to app repo. This shift left will bring a lot of improvements to the test reliability and speed of discovering bugs.
- **NullChain**: Run tests against a nullchain or something similar so that we can create a more stable reliable backend.
- **Cross-Browser and Cross-Device Testing**: Extend tests to run on different browsers like Chrome, Firefox, Safari, and Edge to ensure compatibility. Include tests for mobile devices and responsive layouts using device emulation or real devices.
- **Visual Regression Testing**: Snapshot Testing: Implement visual regression tests using tools like Playwright's screenshot comparison to detect unintended UI changes.
- **Logging and Error Handling**: Wrap Helpers and getters etc to improve logging and error handling.

## Additional Notes

- **Playwright Documentation**: Refer to the [Playwright documentation](https://playwright.dev) for more information on using Playwright.
- **Security Practices**: Never commit sensitive information to the repository. Use GitHub Secrets for CI environments.
