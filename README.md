## Introduction
This mobile app is designed by Farell sujanto as a test submission for Pintu.co.id. This mobile app is designed using React Native with react-query as state management / API fetching.
This app has passed linters.

## Getting Started
### Running the app
1. `yarn install`
2. `yarn android` for android & `yarn ios` for ios
3. Emulator / attached device will be run automatically

### Running the tests
1. `yarn install`
2. `yarn test`

### Running linter
1. `yarn install`
2. `yarn lint`

## Features
1. Using react-query as API fetching & state management
2. Using typescript
5. Using memo, useMemo, useCallback as standart for performance
6. Using hooks for state management

## Tradeoffs
1. Using memo, useMemo, useCallback may prove some glitches / bugs that are usually not present if not using so. ex: state not updating
2. Using typescript may prove more efforts for developing & type checking but it is quite essential in this age
3. No design system guidelines means no standardized naming of themes, fonts, colors, etc.
4. No icons provided may increase the app file size, because I'm using library to fetch lots of icons
5. Not tested in iOS devices may break the app on some use cases when installed in an iOS device

## Assumptions
1. No other page than MarketListScreen is made
2. No themes & fonts naming guidelines
3. No search, filter and favorite capabilities
4. No details page for each tokens
5. No Storybook
6. Not tested yet in iOS

## Tests 
- [marketListUtil.test.tsx](/__tests__/marketListUtil.test.tsx) => For testing business logic of decoding the 2 API provided on the .pdf file into a single array of object to be shown on the list

## Improvements that could be made
1. Using design system & namings
2. Use faster list generation for larger lists (Shopify's FlashList for example)
3. Path alias namings (prevent too much `../../../`)
4. More test cases
5. UI testing & e2e testing
6. CI / CD for app distribution, tests, linter checks, etc.
