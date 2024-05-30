var quoet = document.getElementById("quote");
console.log(quoet);
var quoet1 = document.getElementById("quote-1");
console.log(quoet1);
var quoet2 = document.getElementById("quote-2");
console.log(quoet2);

// var arr = [2, 4, 6, 8, 19, "a", "b"];

//

// arrar = ["a", 10, 50, 70];

// function click() {
//   var ran = Math.floor(Math.random() * arrar.length);

//   document.getElementById("quote-2").innerHTML = arrar[ran];
// }

// // quoet.onclick = click;
// var arrar = ["a", 10, 50, 70];
// console.log(arrar.lastIndexOf());
// var lastIndex = -1;
// function click() {
//   for (var i = 0; i < arrar.length; i++) {
//     var ran = Math.floor(Math.random() * arrar.length);
//     if (ran !== lastIndex) {
//       break;
//     }
//   }
//   lastIndex = ran;
//   console.log(ran);
//   lastIndex = ran;
// }

// quote.onclick = click;
var Quotes = [
  {
    author: " Oscar Wilde",
    quote: "Be yourself; everyone else is already taken",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
  },
  { author: " Frank Zappa", quote: "So many books, so little time." },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
  {
    author: "Robert De Niro",
    quote: "Any time Any where",
  },
  {
    author: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
  },
];
// اخر INDEX =-1
console.log(Quotes.lastIndexOf());
// عملنا متغير سوناه =-1
var lastIndex = -1;
function click() {
  // عملنا LOOP علشان لما نوصل يقف
  for (var i = 0; i < Quotes.length; i++) {
    // متغير علشان نعرف نجيب رقم عشوائي
    var ran = Math.floor(Math.random() * Quotes.length);
    //INDEX STOP عملنا شرط وهوا لما الرقم العشوائي مبقاش بيساوي اخر
    if (ran !== lastIndex) {
      break;
    }
  }
  // بعد كداا سوناه بالقيمه الجديد
  lastIndex = ran;
  console.log(ran);
  lastIndex = ran;
  document.getElementById("quote-2").innerHTML = Quotes[ran].quote;
  document.getElementById("quote-3").innerHTML = Quotes[ran].author;
}

quote.onclick = click;
