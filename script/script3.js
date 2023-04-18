class Firma {
	#name
	#year
	#mounth
	#services = []
	#addresses = []
	constructor(name, year, mounth) {
		this.Name = name
		this.Year = year
		this.Mounth = mounth
	}
	addService(name, price, deadline) {
		this.#services.push({ name, price, deadline })
	}
	addAddresses(country, city, street, numberHouse) {
		this.#addresses.push({ country, city, street, numberHouse })
	}
	getAge() {
		return 2023 - this.#year
	}
	getCityFilial(userCiti) {
		let newArr = []
		for (const adress of this.#addresses) {
			if (adress.city === userCiti) newArr.push(adress)
		}
		return newArr
	}
	getServices(userPrice, userTime) {
		let newArrService = []
		for (const service of this.#services) {
			if (service.price <= userPrice && service.deadline >= userTime) newArrService.push(service)
		}
		return newArrService
	}
	get Name() {
		return this.#name
	}
	get Year() {
		return this.#year
	}
	get Mounth() {
		return this.#mounth
	}
	set Name(name) {
		if (name.length === 0) throw new Error('ЗНАЧЕННЯ НЕДОПУСТИМЕ')
		return this.#name = name
	}
	set Year(year) {
		if (year < 0 || year > 2023) throw new Error('ЗНАЧЕННЯ НЕДОПУСТИМЕ')
		return this.#year = year
	}
	set Mounth(mounth) {
		if (mounth < 1 || mounth > 12) throw new Error('ЗНАЧЕННЯ НЕДОПУСТИМЕ')
		return this.#mounth = mounth
	}
	toString() {
		return `${this.Name}, ${this.Year}, ${this.Mounth}, ${this.#services} ,${this.getAge()}`
	}
}
let a = new Firma('SEMA', 2014, 10)
a.addService('Manikur', 100, 3)
a.addService('Pedikur', 400, 4)

a.addAddresses('UA', 'Kharkiv', 'Sumska', 8)
console.log(a)
document.write(a)
console.log(a.getCityFilial('Kharkiv'))
console.log(a.getServices(600, 3))


