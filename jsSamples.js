//let-cost tanımı

let value=0

{
    var age = 0
    const name = 'Emre'
    
}

value = "emre"

console.log(value)
console.log(age)

//fonksiyonlar
function first(){

}

const second = () => {

}

//value tipleri
//string
let sampleString =""
let sampleString2 =''
let sampleNumber= 28
let sampleBoolen = true

let sampleArray=['merhaba',27,true,[],['23',22]]
let sampleObject = {}

let sampleObject2 = {
    key : value,
    personel : "cevahir",
    age: 27,
    hobbies: ['runnig',27,'coding'],
    adress:{
        city:'istanbul',
        cityCode : 34,
        street: ['büyükçekmece','19 mayıs']
    },
    sayHello : () => {
        console.log('deneme js deneme')
    return 'merhaba js'
}

}
console.log(sampleObject2.adress.cityCode)

let selam = sampleObject2.sayHello()
console.log(selam)




app.get("/products",(req,res)=>{
    res.send("Burası product")
})
