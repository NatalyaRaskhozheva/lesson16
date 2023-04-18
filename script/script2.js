class TMoney {
	#balance = 0
	static Dollar = 39
	constructor(balance) {
		this.Balance = balance
		this.DollarBalance = this.grivnaToDolar()
		this.Grivna100ToDollar = this.grivnaPlus100toDollar()
	}
	get Balance() {
		return this.#balance
	}
	set Balance(balance) {
		this.#balance = balance
	}
	grivnaToDolar() {
		return this.DollarBalance = (this.Balance / TMoney.Dollar).toFixed(2)
	}
	grivnaPlus100toDollar() {
		return this.Grivna100ToDollar = (TMoney.Dollar * (this.Balance + 100) / this.Balance).toFixed(2)
	}
	deduction(value) {
		this.Balance = this.Balance - value
		this.grivnaToDolar()
		this.grivnaPlus100toDollar()

	}
	addition(value) {
		this.Balance = this.Balance + value
		this.grivnaToDolar()
		this.grivnaPlus100toDollar()
	}
	toString() {
		return `Баланс у гривнях - ${this.Balance}, баланас у доларах - ${this.DollarBalance}, який має бути курс, щоб отримат + 100 грн - ${this.Grivna100ToDollar}`
	}
}

let a = new TMoney(3900)
a.deduction(500)
document.write(a)
