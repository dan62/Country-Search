/*
Country interface that defines the response for a 
single country, this allows us to access the data 
from the API returned data like follows:

EXAMPLE:
---------
let name  = data.name ;

if you do not specify a model from the api then there
is a chance that Angular may not find the feild you are 
referencing as this is not predefined

- Daniel Goncalves
*/

export interface country {
    name: String,
    topLevelDomain: [],
    alpha2Code: String,
    alpha3Code: String,
    callingCodes: [],
    capital: String,
    altSpellings: [],
    region: String,
    subregion: String,
    population: Number,
    latlng: [],
    demonym: String,
    area: Number,
    gini: Number,
    timezones: [],
    borders: [],
    nativeName: String,
    numericCode: String,
    currencies: [{
        code: String,
        name: String,
        symbol: String
    }],
    languages: [{
        iso639_1: String,
        iso639_2: String,
        name: String,
        nativeName: String
    }, {
        iso639_1: String,
        iso639_2: String,
        name: String,
        nativeName: String
    }, {
        iso639_1: String,
        iso639_2: String,
        name: String,
        nativeName: String
    }],
    translations: {
        de: String,
        es: String,
        fr: String,
        ja: String,
        it: String,
        br: String,
        pt: String,
        nl: String,
        hr: String,
        fa: String
    },
    flag: String,
    regionalBlocs: [{
        acronym: String,
        name: String,
        otherAcronyms: [],
        otherNames: []
    }],
    cioc: String
}