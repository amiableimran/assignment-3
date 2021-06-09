// Convertion kilometerToMeter 

function kilometerToMeter(kilometer){
  var meter = kilometer * 1000;
  return meter;
}
var finalMeter = kilometerToMeter(2);
console.log(finalMeter);

// budgetCalculator

function budgetCalculator(ghori,phone,laptop){
  priceOfGhori = 50 * ghori;
  priceOfPhone = 100 * phone;
  priceOfLaptop = 500 * laptop;

  totalPrice = priceOfGhori + priceOfPhone + priceOfLaptop;

  return totalPrice;
}
var price = budgetCalculator(20,10,2);
console.log(price);

// hotelCost

function hotelCost(day){
if(day <= 10){
  cost = day * 100;
}
else if(day > 10 && day <=20){
  var firstCost = 10 * 100;
  day = day - 10;
  var secondCost = day * 80;
  cost = firstCost + secondCost;
}
else{
  var firstCost = 10 * 100;
  var secondCost = 10 * 80;
  day = day - 20;
  var thirdCost = day * 50;
  cost = firstCost + secondCost + thirdCost;
}
return cost;
}
var totalCost = hotelCost(21);
console.log(totalCost);

// megaFriend

var friend1 = 0;
function megaFriend(name){
  for(var i = 0; i < name.length; i++){
    if(name[i].length > friend1){
      friend1 = name[i].length;
      friendName = name[i];
    }
  }
  return friendName;
}
var friend = megaFriend(["Imran", "Arif", "Shishir", "Pranto", "Abdullah"]);
console.log(friend);                                                                                                                                                                                                                                                                                                                   