class Banknote {
	constructor(nominal, value) {
		this.nominal = nominal
		this.value = value
	}
}
class TBankomat {
	constructor(banknotes) {
		this.banknotes = banknotes
	}
	get totalSum() {
		return this.banknotes.reduce((prevEl, element) => prevEl + element.nominal * element.value, 0)
	}

	get minSum() {
		const minNominal = this.banknotes.reduce((prevEl, element) => element.nominal < prevEl ? element.nominal : prevEl, this.banknotes[0].nominal)
		return minNominal
	}

	get maxSum() {
		return this.banknotes.reduce((prevEl, element) => prevEl + element.nominal * element.value, 0)
	}


	withdrawMoney(sum) {
		if (typeof sum !== 'number' || sum <= 5) throw new Error('Некоректна сума')

		let remainingSum = sum
		const result = {}

		this.banknotes.forEach((banknote) => {
			console.log(remainingSum)
			console.log(banknote.nominal)
			console.log(banknote.value)
			console.log(remainingSum >= banknote.nominal && banknote.value > 0)
			if (remainingSum >= banknote.nominal && banknote.value > 0) {
				const count = Math.min(Math.floor(remainingSum / banknote.nominal), banknote.value)
				console.log(Math.floor(remainingSum / banknote.nominal), banknote.value)
				console.log(count)
				result[banknote.nominal] = count
				console.log(count)
				remainingSum -= banknote.nominal * count
				banknote.value -= count
			}
		});

		if (remainingSum === 0) {
			return result
		} else {
			throw new Error('Запитана сума не може бути відпущена.')
		}
	}

}

const banknotes = [
	new Banknote(200, 38),
	new Banknote(100, 67),
	new Banknote(50, 20),
	new Banknote(20, 1),
	new Banknote(10, 87),
	new Banknote(5, 56),
]

const a = new TBankomat(banknotes)

console.log(`Загальна кількість грошей в банкоматі: ${a.totalAmount}`)
console.log(`Мінімальна сума для зняття грошей: ${a.minSum}`)
console.log(`Максимальна сума для зняття грошей: ${a.maxSum}`)

const result = a.withdrawMoney(45);
console.log('Банкноти, які ви отримали:')
console.log(result)
console.log(`Грошей в банкоматі залишилось: ${a.totalSum}`)