# Country-Search WebApp
This repository contains an Angular application that allows users to swiftly search through countries in a given list. 

## Tech Stack
Angular Version 10.0.14

## API Data Source
This application makes use of a third party API, currently only one endpoint is being used that is documented as follows: <br>

GET : https://restcountries.eu/rest/v2/all (No Authentication) <br><br>

Response (example of single country data)
```
[{
	"name": "Afghanistan",
	"topLevelDomain": [".af"],
	"alpha2Code": "AF",
	"alpha3Code": "AFG",
	"callingCodes": ["93"],
	"capital": "Kabul",
	"altSpellings": ["AF", "Afġānistān"],
	"region": "Asia",
	"subregion": "Southern Asia",
	"population": 27657145,
	"latlng": [33.0, 65.0],
	"demonym": "Afghan",
	"area": 652230.0,
	"gini": 27.8,
	"timezones": ["UTC+04:30"],
	"borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
	"nativeName": "افغانستان",
	"numericCode": "004",
	"currencies": [{
		"code": "AFN",
		"name": "Afghan afghani",
		"symbol": "؋"
	}],
	"languages": [{
		"iso639_1": "ps",
		"iso639_2": "pus",
		"name": "Pashto",
		"nativeName": "پښتو"
	}, {
		"iso639_1": "uz",
		"iso639_2": "uzb",
		"name": "Uzbek",
		"nativeName": "Oʻzbek"
	}, {
		"iso639_1": "tk",
		"iso639_2": "tuk",
		"name": "Turkmen",
		"nativeName": "Türkmen"
	}],
	"translations": {
		"de": "Afghanistan",
		"es": "Afganistán",
		"fr": "Afghanistan",
		"ja": "アフガニスタン",
		"it": "Afghanistan",
		"br": "Afeganistão",
		"pt": "Afeganistão",
		"nl": "Afghanistan",
		"hr": "Afganistan",
		"fa": "افغانستان"
	},
	"flag": "https://restcountries.eu/data/afg.svg",
	"regionalBlocs": [{
		"acronym": "SAARC",
		"name": "South Asian Association for Regional Cooperation",
		"otherAcronyms": [],
		"otherNames": []
	}],
	"cioc": "AFG"
}]
```

## Contributing 
Please ensure to clone the staging branch and commit to this branch. When code is ready  ake a pull request to master branch for a review.
