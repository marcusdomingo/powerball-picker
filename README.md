# `powerball-picker`
_A simple Powerball 5 ticket picker that uses Random.org true randomness_

[Random.org](https://www.random.org) is a truly random number generation service.
You will need an API Key from Random.org to use this module.

## Installation
Install through npm:
```shell
$ npm install powerball-picker
```

## Usage
```javascript
var powerball = require('powerball-picker');
var apiKey = "123456789-123456-apiKey" // obtained from Random.org API
powerball.pickPowerball({ apiKey: apiKey });
```

## Disclaimer
This module uses the api provided by
Random.org.
As such, I can't guarantee the availability or randomness of their service.
Also, I can't guarantee that the numbers given will be winning numbers.

## License
[MIT](./LICENSE).
