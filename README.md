# Nebulas Polling App

A decentralized polling application built on the Nebulas blockchain in 2018.

> **Status:** Historical source only. [Nebulas ended its mainnet service](https://www.nebulas.io/) in December 2024, so creating polls and casting votes no longer works against the original network.

## What the application did

- Created polls with two required choices and up to two optional choices.
- Assigned each poll a sequential ID.
- Stored poll topics, choices, and vote totals in contract storage.
- Limited each wallet address to one vote per poll.
- Retrieved poll data through read-only contract calls.
- Displayed results in a Google Charts pie chart.

## How it worked

```text
Browser + Nebulas wallet
        |
        v
NebPay transaction
        |
        v
voterV2.js smart contract -> persistent polls and vote totals
```

Creating a poll or voting submitted a blockchain transaction. Reading a poll used a simulated contract call and did not change chain state.

## Important files

- `voterV2.js` — latest polling smart contract.
- `presVoter.js` — earlier contract iteration.
- `main.html` — poll creation flow.
- `inputPoll.html` and `pollView.html` — poll lookup, voting, and results.
- `nebPay.js` and `dist/nebPay.js` — original Nebulas payment integration.

## Technology

- JavaScript
- Nebulas smart contracts and NebPay
- HTML and Bootstrap
- Google Charts

## Historical note

This repository is preserved to explain the original contract model and browser integration. Its bundled wallet libraries, faucet links, and network endpoints are obsolete and should not be used for current cryptocurrency activity.
