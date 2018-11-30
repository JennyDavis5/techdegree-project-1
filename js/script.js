/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

var html = '';
var timer;

// Array to hold quotes, sources, citations, years
var quotes = [
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "First Inaugural Address",
    year: 1933,
    tags: ["Hope", "Politics"]
  },
  {
    quote: "In a word, I would not take any risk of being entangled upon the river, like an ox jumped half over a fence, and liable to be torn by dogs, front and rear, without a fair chance to gore one way or kick the other.",
    source: "Abraham Lincoln",
    citation: "Letter to Joseph Hooker",
    year: 1863,
    tags: ["Risk", "Danger"]
  },
  {
    quote: "Don\'t walk in front of me... I may not follow. Don\'t walk behind me... I may not lead. Walk beside me... just be my friend",
    source: "Albert Camus",
    tags: ["Friends", "Friendship"]
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt",
    tags: ["Confidence", "Inspirational", "Wisdom"]
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: "Mark Twain",
    tags: ["Lies", "Memory", "Truth"]
  },
  {
    quote: "We accept the love we think we deserve.",
    source: "Stephen Chbosky",
    tags: ["Inspirational", "Love"]
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss",
    tags: ["Crying", "Happiness", "Smiling", "Sadness"]
  }
];

// creates an array of objects to store background and button color information
// I didn't want to randomize the background color because it can sometimes lead to hard to read quotes
var colors = [
    {
        background: "#FE02EF", //pink
        button: "#7D0275"
    },
    {
        background: "#03FBE5", //teal
        button: "#027D72"
    },
    {
        background: "#FB0325", //red
        button: "#730312"
    },
    {
        background: "#9003FE", //purple
        button: "#420373"
    },
    {
        background: "#0329FE", //blue
        button: "#011480"
    },
    {
        background: "#FB5604", //orange
        button: "#802B01"
    },
    {
        background: "#44FB04", //lt green
        button: "#217A02"
    },
    {
        background: "#03F4FC", //bright blue
        button: "#02767A"
    },
    {
        background: "#FCA103", //bright orange
        button: "#BB7802"
    },
    {
        background: "#3fc1c9", //aqua
        button: "#fc5185"
    }
];

// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
  // Random number generator
  var randomQuote = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuote];
}

// Function to generate random rgb color value
function getRandomColor() {
  var randomColor = Math.floor(Math.random() * colors.length);

  return colors[randomColor];
}

// assigns a setInterval method to the variable so that the printQuote function will automatically run after 10 seconds
function startTimer() {
  timer = setInterval(printQuote, 20000);
}

// clears the setInterval method from the timer variable
function clearTimer() {
  clearInterval(timer);
}


function printQuote() {
  // creates the currentQuoute variable and sets the value to the random object that is returned when the getRandomQuote function is called
    // creates the currentColor variable and sets the value to the random object that is returned when the getRandomColor function is called
    // creates the html variable and uses the currentQuote variable along with key values to build a string
  var currentQuote = getRandomQuote();
  var currentColor = getRandomColor();
  html = '<p class = "quote">' + currentQuote.quote + '</p>';
  html += '<p class = "source">' + currentQuote.source;
  if (currentQuote.citation) {
    html += '<span class = "citation">' + currentQuote.citation + '</span>';
  } else {
    html += '';
  }
  if (currentQuote.year) {
    html += '<span class = "year">' + currentQuote.year + '</span></p>';
  } else {
    html += '';
  }
  if (currentQuote.tags) {
    html += '<h3>' + currentQuote.tags.join(', ') + '</h3>';
  } else {
    html += '';
  }

  // writes the info from the html variable to the div with the quote-box id
  // uses the currentColor variable to change the background color
  // uses the currentColor variable to change the button color
  document.getElementById("quote-box").innerHTML = html;
  document.body.style.background = currentColor.background;
  document.getElementById("loadQuote").style.background = currentColor.button;

  // clears any previous timers that might be running and starts a new one
  clearTimer();
  startTimer();
}

// runs the printQuote function upon initial page load
printQuote();

// event listener to respong to "Show another quote" button clicks
//when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
