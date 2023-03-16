function sortCarByYearAscendingly(cars) {
  let years = []
	cars.map((car) => {
		if(!years.includes(car.year)) years.push(car.year)
	})
	
	for(let i = 0; i < years.length; i++) {
		for(let j = i + 1; j < years.length; j++) {
			if(years[i] > years[j]) {
				let tmp = years[i]
				years[i] = years[j]
				years[j] = tmp
			}
		}
	}

	let mobil = []

  years.map((year) => {
		cars.map((car) => {
			if(year == car.year) {
				mobil.push(car)
			}
		})
	})

  console.log(mobil)
	return mobil;
}
