// class Predictor {
// 	constructor(predictionList, interval) {
// 		this.predictionList = predictionList
// 		this.interval = interval
// 	}
// 	getRandomPredictor() {
// 		const randomIndex = Math.floor(Math.random() * this.predictionList.length)
// 		return this.predictionList[randomIndex]
// 	}
// 	run() {
// 		setInterval(() => {
// 			alert(this.getRandomPredictor())
// 		}, this.interval * 1000)
// 	}
// }
// let a = new Predictor(['Love', 'Money', 'Peace'], 2)
// a.run()

// class Ttime {
// 	constructor(initHours, initMinutes) {
// 		this.hours = initHours
// 		this.minutes = initMinutes
// 	}
// 	increaseHours(value) {
// 		this.hours = (this.hours + value) % 24
// 	}
// 	decreaseHours(value) {
// 		this.hours = (this.hours - value) % 24
// 		this.hours = (this.hours + 24) % 24

// 	}
// 	increaseMinutes(value) {
// 		this.minutes = (this.minutes + value)
// 		this.increaseHours(Math.floor(this.minutes / 60))
// 		this.minutes = this.minutes % 60
// 	}
// 	decreaseMinutes(value) {

// 	}
// 	toString() {
// 		return `${this.hours} : ${this.minutes}`
// 	}
// }
// let t1 = new Ttime(8, 45)
// // t1.increaseHours(25)
// // t1.increaseMinutes(0)
// t1.decreaseHours(519)
// document.write(t1)

// class Pupil {
// 	#userName
// 	#class
// 	#age
// 	#averageScore
// 	constructor(initName, initClass, initAge, initScore, minAge, maxAge) {
// 		this.minAge = minAge
// 		this.maxAge = maxAge
// 		this.UserName = initName
// 		this.Age = initAge
// 		this.Class = initClass
// 		this.AverageScore = initScore
// 	}
// 	get UserName() {
// 		return this.#userName
// 	}
// 	get Class() {
// 		return this.#class
// 	}
// 	get Age() {
// 		return this.#age
// 	}
// 	get AverageScore() {
// 		return this.#averageScore
// 	}
// 	set UserName(newName) {
// 		if (newName.length === 0)
// 			throw new Error('Name can\t be empty')
// 		this.#userName = newName
// 	}
// 	set Class(newClass) {
// 		if (newClass < 1 || newClass > 11)
// 			throw new Error('Class is incorrect')
// 		this.#class = newClass
// 	}
// 	set Age(newAgeValue) {
// 		if (newAgeValue < this.minAge || newAgeValue > this.maxAge)
// 			throw new Error('Not correct')
// 		this.#age = newAgeValue
// 	}
// 	set AverageScore(newVal) {
// 		if (newVal < 0 || newVal > 12)
// 			throw new Error('score is incorrect')
// 		this.#averageScore = newVal
// 	}
// 	get Category() {
// 		if (this.AverageScore < 4) return 'Двійочник'
// 		if (this.AverageScore < 7) return 'Трійочник'
// 		if (this.AverageScore < 10) return 'Хорошист'
// 		return 'Відмінник'
// 	}
// 	get YearsToComplete() {
// 		return 11 - this.Class
// 	}
// }
// a = new Pupil('Ivan', 7, 13, 9, 6, 17)
// console.log(a)
// alert(a.Category)
// alert(a.YearsToComplete)

class Client {
	#accountNumber
	#money = 0
	constructor(name, accountNumber, money) {
		this.name = name
		this.#accountNumber = accountNumber
		this.Money = money
	}
	get AccountNumber() {
		return this.#accountNumber
	}
	get Money() {
		return this.#money
	}
	set Money(val) {
		if (this.#money + val < 0)
			throw new Error('No money')
		this.#money += val
	}
	toString() {
		return `${this.name}, account ${this.AccountNumber}, balance${this.Money}`
	}
}
let user = new Client('Ivan', '453432434', 600)
document.write(user)
user.Money = 100
user.Money = 100
user.Money = -400
document.write(user)
