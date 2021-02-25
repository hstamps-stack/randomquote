// use query selector to access button 
 const quoteBtn = document.querySelector(".btn");

 const user = document.querySelector(".userQuote");
 // use query selector to access element id to show quote
const show = document.querySelector("#showQuote")
// add eventListener to button 
// Onclick add to the button  
quoteBtn.addEventListener("click", quoteGenerator);


// Array with quotes

const arr = [' “Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs',
             ' “Get busy living or get busy dying.” — Stephen King',
             ' “The big lesson in life, baby, is never be scared of anyone or anything.”– Frank Sinatra',
             '“Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.” — Kevin Hart',
             '“Everything negative – pressure, challenges – is all an opportunity for me to rise.” — Kobe Bryant',
             ' “Too many of us are not living our dreams because we are living our fears.” – Les Brown',
             ' “Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow.” —Jay-Z',
             '“My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.” – Maya Angelou',
             
            ];

// get the length of the array
const max = arr.length;



// Generator function

function quoteGenerator(){
    // MATH.random Will generate a random quote
    // Math Floor will round the number down to a whole number
     const arrNum = Math.floor(Math.random() * max );

     // use arrNum to get a random index from the array
    show.innerHTML = ` <div class = "card-body bg-dark p-3 mb-5">${arr[arrNum]} </div>`;

}












