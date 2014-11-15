function ChangeQuote() {
  
  var new_quote = document.getElementById("Quote");
  
  var quotes = [
  	{
  		quotation: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.<br />",
  		author: "Douglas Adams"
  	},
  	{
  		quotation: "Don't look at your feet to see if you are doing it right. Just dance.<br />",
  		author: "Anne Lamott"
  	},
  	{
  		quotation: "We can judge our progress by the courage of our questions and the depth of our answers, our willingness to embrace what is true rather than what feels good.<br />",
  		author: "Carl Sagan"
  	},
  	{
  		quotation: "Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape.<br />",
  		author: "bell hooks"
  	},
    {
      quotation: "It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.<br />",
      author: "Vincent van Gogh"
    }
  ];

  function rand(q) {
    return q.slice(0).sort(function() { 
    	return .5 - Math.random();
    });
  }
  
  function quote(q) {
  	return q.quotation + '<span class="name">' + q.author + '</span>';
  }

  new_quote.innerHTML = rand(quotes).map(quote)[0];

}
