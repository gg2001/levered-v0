# [Levered.finance](https://levered.finance/) - Decentralized margin trading protocol

Open long and short positions on any tokens listed on [Aave](https://aave.com/) with up to 5x leverage. [Levered](https://levered.finance/) uses [Aave](https://aave.com/) for borrowing and [1inch.exchange](https://1inch.exchange/) for trading.

This table shows the maximum leverage possible for each asset ([source](https://docs.aave.com/risk/asset-risk/risk-parameters)):

| Name                  | Symbol   | Loan To Value | Liquidation Threshold | Maximum Leverage |
| --------------------- | -------- | ------------- | --------------------- | ---------------- |
| DAI                   | DAI      | 75.00%        | 80.00%                | 4                |
| True USD              | TUSD     | 75.00%        | 80.00%                | 4                |
| USDC                  | USDC     | 80.00%        | 85.00%                | 5                |
| Aave                  | AAVE     | 50.00%        | 65.00%                | 2                |
| Basic Attention Token | BAT      | 70.00%        | 75.00%                | 3.333333333      |
| Curve DAO             | CRV      | 40.00%        | 55.00%                | 1.666666667      |
| Enjin                 | ENJ      | 55.00%        | 60.00%                | 2.222222222      |
| **Ethereum**/Wrapped ETH  | **ETH**/WETH | 80.00%        | 82.50%                | **5**                |
| Kyber Network         | KNC      | 60.00%        | 65.00%                | 2.5              |
| Chainlink             | LINK     | 70.00%        | 75.00%                | 3.333333333      |
| Decentraland          | MANA     | 60.00%        | 65.00%                | 2.5              |
| Maker                 | MKR      | 60.00%        | 65.00%                | 2.5              |
| Republic Protocol     | REN      | 55.00%        | 60.00%                | 2.222222222      |
| Synthetix             | SNX      | 15.00%        | 40.00%                | 1.176470588      |
| Uniswap               | UNI      | 60.00%        | 65.00%                | 2.5              |
| Wrapped BTC           | WBTC     | 70.00%        | 75.00%                | 3.333333333      |
| Yearn YFI             | YFI      | 40.00%        | 55.00%                | 1.666666667      |
| 0x                    | ZRX      | 60.00%        | 65.00%                | 2.5              |

The maximum leverage for an asset can be calculated with the formula `max_leverage = 1/(1 - loan_to_value)`, where `loan_to_value` is the Loan To Value column in the chart.