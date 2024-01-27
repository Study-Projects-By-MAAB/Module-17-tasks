const age = 19;
let isStudent = true;
let ticketFee = 800;
if (age< 10) {
    console.log('no need any ticket, its free for you.')
}
else if (isStudent){
    discount = ticketFee*50/100;
    ticketFee = ticketFee - discount;
    console.log(ticketFee)
}

else if(age>= 60) {
    discount =ticketFee*15/100
    ticketFee = ticketFee-discount;
    console.log(ticketFee)
}
else{
    console.log('ticket fare 800 tk')
}