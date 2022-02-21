class NumberTransformRoman {
    constructor() {
        this.state = {
            roman: ""
        }

        this.valueSplit = (v) => {
            let str = v.toString().replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,")
            return str.split(',')
        }

        this.transformN = (n) => {
            n = n.length == 3 ? n : n.padStart(3, null)
            for (let i = 0; i < n.length; i++) {
                switch (i) {
                    case 0: this.setRoman(n[i], 'C', 'D', 'M'); break;
                    case 1: this.setRoman(n[i], 'X', 'L', 'C'); break;
                    case 2: this.setRoman(n[i], 'I', 'V', 'X'); break;
                }
            }
        }

        this.setRoman = (toRoman, a, b, c) => {
            this.state.roman += this.check(toRoman, a, b, c)
        }

        this.check = (toRoman, a, b, c) => {
            let frequency = parseInt(toRoman)
            if (frequency == 9) return `${a + c}`
            else if (frequency == 0) return `#`
            else if (frequency == 4) return `${a + b}`
            else if (frequency == 5) return `${b}`
            else if (frequency > 5) return `${b + a.repeat(frequency - 5)}`
            else return a.repeat(frequency)
        }
    }
    calculation = (callback) => {
        if (callback) {
            let value = callback()
            return this.transformRoman(value)
        }
    }

    transformRoman = (value) => {
        let nSplit = this.valueSplit(value)
        nSplit.forEach((n, idx) => {
            this.transformN(n)
            if (idx != nSplit.length - 1) this.state.roman += ','
        })
        return this.state.roman
    }
}

module.exports = NumberTransformRoman