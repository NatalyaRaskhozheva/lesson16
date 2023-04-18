class TDate {
	#day = 0
	#month = 0
	#year = 0
	constructor(day, month, year) {
		this.Day = day
		this.Mounth = month
		this.Year = year
	}
	get Day() {
		return this.#day
	}
	get Mounth() {
		return this.#month
	}
	get Year() {
		return this.#year
	}
	set Day(day) {
		if (day < 1 || day > 30)
			throw new Error('Error')
		this.#day = day
	}
	set Mounth(month) {
		if (month < 1 || month > 12)
			throw new Error('Error')
		this.#month = month
	}
	set Year(year) {
		if (year <= 0)
			throw new Error('Error')
		this.#year = year
	}
	daysIncrease(newDay) {
		const val = this.Day
		this.Day = ((this.Day - 1 + newDay) % 30 + 1)
		this.mounthIncrease(Math.floor((val - 1 + newDay) / 30))
	}
	daysDecrease(newDay) {
		const val = this.Day
		if (newDay < this.Day) this.Day -= newDay
		else {
			this.Day = ((this.Day - 1 - newDay) % 30 + 1) + 30
			this.mounthDecrease(-Math.floor((val - 1 - newDay) / 30))
		}
	}
	mounthIncrease(newMounth) {
		const val = this.Mounth
		this.Mounth = (this.Mounth - 1 + newMounth) % 12 + 1
		this.yearIncrease(Math.floor((val - 1 + newMounth) / 12))
	}
	mounthDecrease(newMounth) {
		const val = this.Mounth
		if (newMounth < this.Mounth) this.Mounth = this.Mounth - newMounth
		else {
			this.Mounth = ((this.Mounth - 1 - newMounth) % 12 + 1) + 12
			this.yearDecrease(-Math.floor((val - 1 - newMounth)/12))
		}
	}
	yearIncrease(newYear) {
		this.Year = this.Year + newYear
	}
	yearDecrease(newYear) {
		this.Year -= newYear
	}
	toString() {
		return `День -${this.Day}, місяць - ${this.Mounth}, рік - ${this.Year}`
	}
}
let date = new TDate(3, 11, 2005)
document.write(date)
document.write('<br></br>')
date.daysIncrease(27)
document.write(date)
document.write('<br></br>')
date.mounthIncrease(13)
date.yearIncrease(5)
document.write(date)
document.write('<br></br>')
date.daysDecrease(3)
document.write(date)
document.write('<br></br>')
date.mounthDecrease(13)
document.write(date)
document.write('<br></br>')


