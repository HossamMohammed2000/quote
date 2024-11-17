var quotes=[
    {
        quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: "Marilyn Monroe",
    }
    ,
    {
        quote:"“So many books, so little time.”",
        author:"Frank Zappa",
    },

    {
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:" Albert Einstein",
    },

    {
        quote:"“A room without books is like a body without a soul.”",
        author:" Marcus Tullius Cicero",
    },

    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:"Bernard M. Baruch",
    },

    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"Mae West",
    },

    {
        quote:"“A friend is someone who knows all about you and still loves you.”",
        author:" Elbert Hubbard",
    },

    {
        quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author:" Mahatma Gandhi",
    },

    {
        quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
        author:"Andre Gide, Autumn Leaves",
    },
    
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"Robert Frost",
    },
];
var quoteText=document.getElementById("quote");
var authorText=document.getElementById("author");
var resultQuote;
function runQuotes(){
    var value=Math.floor(Math.random()*quotes.length);
    var    quote = quotes[value];
document.getElementById("quote").innerText=`${quote.quote}`;
document.getElementById("author").innerText=`${quote.author}`;
}
runQuotes();