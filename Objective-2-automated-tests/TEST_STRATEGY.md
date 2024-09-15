
# Test Strategy

Our test strategy focuses on using E2E tests as a last resort while prioritizing faster and more reliable unit and integration tests. The approach ensures test isolation, small and focused tests, granular assertions, and the ability to bypass unnecessary UI steps when possible.

## 1. Emphasize Unit and Integration Tests

- **Unit Tests**: These tests are fast, reliable, and provide immediate feedback on specific areas of the codebase.
  
- **Integration Tests**: Test the interaction between components or services to ensure that the different parts of the system work together as expected.

- **Approach**: Engineers are encouraged to write comprehensive unit and integration tests for all features and critical components, ensuring that most of the testing happens at these levels rather than at the E2E level.

## 2. Use E2E Tests Strategically

- **Purpose of E2E Tests**: E2E tests should focus on verifying critical user flows and high-risk areas that cannot be covered adequately by unit or integration tests.
  
- **Limit Scope**: E2E tests should cover only essential functionalities, reducing the overall number of end-to-end scenarios. This keeps them lean and minimizes execution time.

## 3. Test Isolation

- **Independent Tests**: Each E2E test should run independently, without relying on the state left by previous tests. This ensures that tests can run in any order without interference.
  
- **State Management**: Reset the application state before each test by using backend API calls or test fixtures to set up data and tear down any state left by the test. This prevents flakiness due to shared state.


## 4. Small, Focused E2E Tests

- **Decompose Scenarios**: Break down longer E2E journeys into smaller, focused tests. This approach helps to verify individual pieces of functionality while ensuring you can pinpoint exactly where a test failure occurs.

- **Backend Setup**: Use backend APIs or database scripts to perform pre-test setup and post-test teardown steps. This reduces the need for lengthy UI interactions to prepare test data or reset the state.

**Example**: Instead of using the UI to create a user account for each test, directly call the API to create the account, and then proceed to the specific part of the test that needs to be verified.

## 5. Granular Assertions

- **Step-by-Step Verification**: Include assertions after each significant action in a test to verify intermediate states. This allows for more fine-grained control and helps quickly identify where failures occur.

- **Fail Fast Principle**: By having multiple assertions within a test, failures will happen at the earliest point where an issue occurs, making debugging simpler and faster.

- **Test Reporting**: Ensure that test reports provide detailed information on which assertions passed and which failed, so it's clear what part of the test journey encountered issues.

## 6. Skipping Through the UI

- **Direct Navigation**: When possible, bypass repetitive UI interactions by navigating directly to specific URLs. This speeds up tests and ensures that you're testing the exact functionality needed.

- **State Injection**: Set the application state directly using methods like cookies, local storage, or URL parameters to simulate different scenarios.

**Example**: If testing a feature that requires a logged-in user, set the authentication token directly in local storage instead of going through the login UI each time.

By adhering to this strategy, we ensure our tests are efficient, reliable, and focused on the highest priority areas. This helps reduce the execution time and increases the maintainability of the test suite.
