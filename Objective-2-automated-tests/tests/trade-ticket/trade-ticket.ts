import { Page, expect } from '@playwright/test';
import { Side } from '../../enums';

export class TradeTicket {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Public Methods (Actions)
  // ------------------------

  /**
   * Clicks the Stop Limit button on the trade ticket.
   */
  async clickStopLimitButton(): Promise<void> {
    await this.getButton("Stop Limit").click();
  }

  /**
   * Fills the order form with the provided details.
   * @param side - The side of the trade ('Buy' or 'Sell').
   * @param amount - The amount to trade.
   * @param triggerPrice - The trigger price for the order.
   * @param limitPrice - The limit price for the order.
   */
  async fillOrderForm(
    side: Side,
    amount: string,
    triggerPrice: string,
    limitPrice: string
  ): Promise<void> {
    await this.page.click(`[role="button"]:has-text("${side}")`);
    await this.amountInput().fill(amount);
    await this.triggerPriceInput().fill(triggerPrice);
    await this.limitPriceInput().fill(limitPrice);
  }

  /**
   * Selects the order type on the trade ticket.
   * @param orderType - The type of order to select (e.g., "Stop").
   */
  async selectOrderType(orderType: string): Promise<void> {
    await this.page.click(`[role="button"]:has-text("${orderType}")`);
  }
  /**
   * Navigates to a market and selects stop limit order type
   * @param market - URL for the market
   */
  async navigateToMarketSelectStopLimit( market: string): Promise<void> {
    await this.page.goto(market);
    await this.selectStopOrderType();
    await this.clickStopLimitButton();
  }

  /**
   * Selects the Stop order type and waits for list to appear.
   */
  async selectStopOrderType(): Promise<void> {
    await this.selectOrderType('Stop');
    await expect(this.getButton("Stop Limit")).toBeVisible();
  }

  /**
   * Asserts error message is displayed and text matches.
   */
  async assertErrorMessageText(errorText: RegExp | string): Promise<void> {
      await expect(this.errorMessageLocator()).toBeVisible();
      await expect(this.errorMessageLocator()).toContainText(errorText);
  }

  // Locators (Getters)
  // ------------------
  // Ideally these locators would be moved over to data-test-IDS. We could then share these IDs from the app itself which will create more robust and self healing tests

  amountInput() {
    return this.page
      .locator('div:has-text("Amount")')
      .locator('input[inputmode="decimal"]')
      .first();
  }

  errorMessageLocator() {
    return this.page.locator('[class*="alert-message"]');
  }

  limitPriceInput() {
    return this.page
      .locator('div:has-text("Limit Price")')
      .locator('input[inputmode="decimal"]')
      .nth(3);
  }

  getButton(name:string){
    return this.page.getByRole('button', { name: name, exact: true });
  }

  triggerPriceInput() {
    return this.page
      .locator('div:has-text("Trigger Price")')
      .locator('input[inputmode="decimal"]')
      .nth(2);
  }
}
