const quotes = [{"q":"Any fool can paint a picture, but it takes a wise man to be able to sell it.","a":"Samuel Butler","c":"76","h":"<blockquote>&ldquo;Any fool can paint a picture, but it takes a wise man to be able to sell it.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>"},{"q":"Nothing ever goes away until it has taught us what we need to know.","a":"Pema Chodron","c":"67","h":"<blockquote>&ldquo;Nothing ever goes away until it has taught us what we need to know.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"},{"q":"You are your best thing.","a":"Toni Morrison","c":"24","h":"<blockquote>&ldquo;You are your best thing.&rdquo; &mdash; <footer>Toni Morrison</footer></blockquote>"},{"q":"People don't realize that now is all there ever is; there is no past or future except as memory or anticipation in your mind.","a":"Eckhart Tolle","c":"125","h":"<blockquote>&ldquo;People don't realize that now is all there ever is; there is no past or future except as memory or anticipation in your mind.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"},{"q":"When you repeat a mistake, it is not a mistake anymore: it is a decision.","a":"Paulo Coelho","c":"73","h":"<blockquote>&ldquo;When you repeat a mistake, it is not a mistake anymore: it is a decision.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"},{"q":"You were born to win, but to be a winner you must plan to win, prepare to win, and expect to win.","a":"Zig Ziglar","c":"97","h":"<blockquote>&ldquo;You were born to win, but to be a winner you must plan to win, prepare to win, and expect to win.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"},{"q":"Life is like stepping onto a boat which is about to sail out to sea and sink.","a":"Shunryu Suzuki","c":"77","h":"<blockquote>&ldquo;Life is like stepping onto a boat which is about to sail out to sea and sink.&rdquo; &mdash; <footer>Shunryu Suzuki</footer></blockquote>"},{"q":"The quieter you become, the more you are able to hear.","a":"Rumi","c":"54","h":"<blockquote>&ldquo;The quieter you become, the more you are able to hear.&rdquo; &mdash; <footer>Rumi</footer></blockquote>"},{"q":"Catch, then, O catch the transient hour; Improve each moment as it flies! ","a":"St. Jerome","c":"74","h":"<blockquote>&ldquo;Catch, then, O catch the transient hour; Improve each moment as it flies! &rdquo; &mdash; <footer>St. Jerome</footer></blockquote>"},{"q":"Paths are made by walking.","a":"Franz Kafka","c":"26","h":"<blockquote>&ldquo;Paths are made by walking.&rdquo; &mdash; <footer>Franz Kafka</footer></blockquote>"}]

const container = document.getElementById('quotes-container');
for (let i = 0; i < quotes.length; i++) {
  const quoteItem = quotes[i];
  const card = document.createElement('div');
  card.className = 'quote-card';

  const quoteText = document.createElement('p');
  quoteText.textContent = `"${quoteItem.q}"`;

  const authorText = document.createElement('p');
  authorText.innerHTML = `<em>– ${quoteItem.a}</em>`;

  card.appendChild(quoteText);
  card.appendChild(authorText);
  container.appendChild(card);
}


