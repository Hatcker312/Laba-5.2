// Функції для виведення висловів авторів
function displayQuote(author, quote) {
  document.getElementById("quote_container").innerHTML = `<p>Автор слів ${author}:</p><p>${quote}</p>`;
}

// Прив'язка обробників подій до кнопок
document.getElementById("ovid_button").addEventListener("click", function() {
  var quote = "І дим батьківщини солодкий.";
  displayQuote("Овідій", quote);
});

document.getElementById("byron_button").addEventListener("click", function() {
  var quote = "Той, хто не любить своєї країни, нічого любити не може.";
  displayQuote("Д. Байрон", quote);
});

document.getElementById("skovoroda_button").addEventListener("click", function() {
  var quote = "Кожному мила своя сторона.";
  displayQuote("Г. Сковорода", quote);
});

document.getElementById("lihachev_button").addEventListener("click", function() {
  var quote = "Усвідомлена любов до свого народу не поєднується з ненавистю до інших.";
  displayQuote("Д. Лихачев", quote);
});

document.getElementById("horace_button").addEventListener("click", function() {
  var quote = "Ті, що виїздять за море, міняють небо, а не душу.";
  displayQuote("Горацій", quote);
});
