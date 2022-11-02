const sell = [
    {
        Id : 51,
        ProductName : "Corek",
        Price: 3
    },
    {
        Id : 52,
        ProductName : "Seker",
        Price: 8
    },
    {
        Id : 53,
        ProductName : "Un",
        Price: 2
    },
    {
        Id : 54,
        ProductName : "Kola",
        Price: 4
    },
    {
        Id : 55,
        ProductName : "Saqqiz",
        Price: 1
    },
]


let say = 0
let cem = 0
for (let i = 0 ; i<sell.length; i++){
    if (sell[i].Id % 2 == 1   ){
        say += 1
        cem=cem+sell[i].Price
    }
}
console.log("Orta=" + cem/say)