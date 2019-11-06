// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
$(".quadratini").click(function() {
  $(this).css("background","green");
})
$(".rosso").click(function() {
  $(this).css("background","red");
})
