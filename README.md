# [Levered.finance](https://levered.finance/) - Decentralized margin trading protocol

![CI](https://github.com/gg2001/levered/workflows/CI/badge.svg)

Contracts will be deployed to mainnet by February 13th. The frontend at https://levered.finance/ will be available once the contracts are deployed.

Open long and short positions on any tokens listed on [Aave](https://aave.com/) with up to 5x leverage. [Levered](https://levered.finance/) uses [Aave](https://aave.com/) for borrowing and [1inch.exchange](https://1inch.exchange/) for trading. Each position is automatically represented as an NFT that can be transferred to other accounts. Every position is isolated in its own address so users can have multiple positions that don't affect each other.

This table shows the maximum leverage possible for each asset ([source](https://docs.aave.com/risk/asset-risk/risk-parameters)):

| Name                  | Symbol   | Loan To Value | Liquidation Threshold | Theoretical Maximum Leverage | Allowed Maximum Leverage |
| --------------------- | -------- | ------------- | --------------------- | ---------------- | ----------------
| Aave                  | AAVE     | 50.00%        | 65.00%                | 2                | 1.8
| Basic Attention Token | BAT      | 70.00%        | 75.00%                | 3.333333333      | 3
| Curve DAO             | CRV      | 40.00%        | 55.00%                | 1.666666667      | 1.5
| DAI                   | DAI      | 75.00%        | 80.00%                | 4                | 3.6
| Enjin                 | ENJ      | 55.00%        | 60.00%                | 2.222222222      | 2
| **Ethereum**/Wrapped ETH  | **ETH**/WETH | 80.00%        | 82.50%                | **5**                | **4.5**
| Kyber Network         | KNC      | 60.00%        | 65.00%                | 2.5              | 2.25
| Chainlink             | LINK     | 70.00%        | 75.00%                | 3.333333333      | 3
| Decentraland          | MANA     | 60.00%        | 65.00%                | 2.5              | 2.25
| Maker                 | MKR      | 60.00%        | 65.00%                | 2.5              | 2
| Republic Protocol     | REN      | 55.00%        | 60.00%                | 2.222222222      | 2
| ~~Synthetix~~             | ~~SNX~~      | 15.00%        | 40.00%                | 1.176470588      | 1.058
| True USD              | TUSD     | 75.00%        | 80.00%                | 4                | 3.6
| Uniswap               | UNI      | 60.00%        | 65.00%                | 2.5              | 2.25
| USDC                  | USDC     | 80.00%        | 85.00%                | 5                | 4.5
| Wrapped BTC           | WBTC     | 70.00%        | 75.00%                | 3.333333333      | 3
| Yearn YFI             | YFI      | 40.00%        | 55.00%                | 1.666666667      | 1.5
| 0x                    | ZRX      | 60.00%        | 65.00%                | 2.5              | 2.25

The theoretical maximum leverage for an asset can be calculated with the formula `theoretical_max_leverage = 1/(1 - loan_to_value)`, where `loan_to_value` is the Loan To Value column in the table. The allowed maximum leverage is `0.9 * theoretical_max_leverage`. 

The frontend will only allow you to use up to the allowed maximum leverage since using leverage close to the theoretical maximum results in high liquidation risk, and a high chance of the transaction reverting. Note that `SNX` is not available in the frontend since it has a very low allowed maximum leverage.

## Install

```
git clone https://github.com/gg2001/levered.git
cd levered
yarn install
```

If `yarn install` gives the error `The engine "node" is incompatible with this module.` or `error Found incompatible module.`, try running `yarn install --ignore-engines` instead.

## Compile

```
yarn build
```

## Test

Before testing, make an account on [Alchemy](https://www.alchemyapi.io/) and get a mainnet API key (`https://eth-mainnet.alchemyapi.io/v2/<your api key>`). Create a `.env` file with the API key:

```
ALCHEMY_API_KEY=<your api key>
```

Optionally add a CoinMarketCap API key or an Etherscan API key if you want to view gas costs in USD or if you want to verify the contracts on Etherscan:

```
COINMARKETCAP=<your api key>
ETHERSCAN=<your api key>
```

Then run:

```
yarn test
```

