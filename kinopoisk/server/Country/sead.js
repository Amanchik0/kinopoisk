const country = require('./country')
const data = [
    'Россия', 
    'СССР', 
    "США", 
    "Франция", 
    "Южная Корея", 
    "Великобритания", 
    "Япония", 
    "Италия", 
    "Испания", 
    "Германия", 
    "Турция",
    "Швеция",
    "Дания",
    "Нормегия",
    "Гонконг",
]
async function writeDataCountry(){ 
    const length = await country.count();
    if (length ==  0 ){ 
        data.map((item , index)=> { 
            new country({ 
                name: item , 
                key: index
            }).save()
        })
    }
}
module.exports = writeDataCountry;