const Random = require('random-org')
const mutexify = require('mutexify')

const lock = mutexify()

exports.pickPowerball = function ({ apiKey: apiKey }) {
    const random = new Random({ apiKey: apiKey })

    for (let i = 0; i < 5; i++) {
        lock(release => {
            random.generateIntegers({ min: 1, max: 69, n: 5, replacement: false })
                .then(res => {
                    console.log("Numbers:", res.random.data.sort((a, b) => { return a - b }).toString())
                    random.generateIntegers({ min: 1, max: 26, n: 1, replacement: false })
                        .then(res => {
                            console.log("Powerball:", res.random.data.toString())
                            console.log()
                            release()
                        })
                })
        })
    }
}
