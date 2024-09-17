import { test } from "@playwright/test";
import { Side } from '../../../enums';
import { TradeTicket } from '../trade-ticket';

// #region Constants
const ETH_USD_MARKET = process.env.ETH_USD_MARKET;

if (!ETH_USD_MARKET) {
  throw new Error('ETH_USD_MARKET is not defined in the environment variables.');
}

const very_high_price = "999999999";
const very_low_price = "1";

// #endregion

// #region Form Validation and Error Handling Tests

// These tests could be moved to unit tests rather than E2E
test.describe("Stop Limit  Displays Invalid Leverage error", () => {
  let tradeTicket: TradeTicket;

  test.beforeEach(async ({ page }) => {
    tradeTicket = new TradeTicket(page);
    // Arrange
    await tradeTicket.navigateToMarketSelectStopLimit(ETH_USD_MARKET);
  });

  Object.values(Side).forEach((side) => {
    test(`Stop limit displays invalid leverage ${side} error`, async () => {
      const value = side === Side.Sell ? very_low_price : very_high_price;

      // Act
      await tradeTicket.fillOrderForm(side, "1", value, value);

      // Assert
      await tradeTicket.assertErrorMessageText(/invalid leverage/i)
    });
  });
});


test.describe("Stop Limit Trigger Price Above/Below", () => {
  let tradeTicket: TradeTicket;

  test.beforeEach(async ({ page }) => {
    tradeTicket = new TradeTicket(page);
    // Arrange
    await tradeTicket.navigateToMarketSelectStopLimit(ETH_USD_MARKET);
  });

  const testCases = [
    { side: Side.Buy, expectedError: 'Your trigger price must be above the current index price' },
    { side: Side.Sell, expectedError: 'Your trigger price must be below the current index price' },
  ];

  testCases.forEach(({ side, expectedError }) => {
    test(`Stop limit trigger price ${side} error`, async () => {
      // Act
      const value = side === Side.Sell ? very_high_price : very_low_price;
      await tradeTicket.fillOrderForm(side, "1", value, value);

      // Assert 
      await tradeTicket.assertErrorMessageText(expectedError)
    });
  });
});



test.skip("stop limit max size sell", async () => {
  // Enter size larger than max
  // Assert error
});

test.skip("stop limit max size buy", async () => {
  // Enter size larger than max
  // Assert error
});
// #endregion

// TODO: Placeholder tests
// TODO: Implement tests for placing stop limit orders

// - Place Stop Limit Buy Order
//   - connect Wallet
//   - place stop limit order side buy
//   - assert API response matches
//   - assert notification

// - Place Stop Limit Sell Order
//   - connect Wallet
//   - place stop limit order side sell
//   - assert API response matches
//   - assert notification

// Advanced orders:

// - Place Stop Limit Sell Order Good Till Time
//   - connect Wallet
//   - place stop limit order side sell
//   - add good till time
//   - assert API response matches
//   - assert notification

// Placeholder for advanced order execution tests

// - Place Stop Limit Sell Order Execution
//   - For each execution strategy in 'executions' array
//     - connect Wallet
//     - place stop limit order side sell
//     - set execution strategy
//     - assert API response matches
//     - assert notification

// Placeholder for reduce-only execution tests

// - Place Stop Limit Sell Order Execution Reduce Only
//   - For each execution strategy in 'executions_reduce_only' array
//     - connect Wallet
//     - place stop limit order side sell
//     - set execution strategy to reduce only
//     - assert API response matches
//     - assert notification


// TODO: Implement fee calculation and validation tests

// - Verify fee calculation for taker orders
// - Verify fee calculation for maker orders
// - Validate total fee displayed matches expected value


// Placeholder for account-related tests

// TODO: Implement account-related tests

// - Test account balance updates after order execution
// - Test account margin requirements