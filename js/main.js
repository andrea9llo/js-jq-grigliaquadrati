// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)

$( document ).ready(function() {
  var contatoreVerde = 0;
  var contatoreRosso = 0;

  $(".verde").click(function() {
    $(this).css("background","green");
    contatoreVerde = contatoreVerde + 1;
    // console.log('verde!', contatoreVerde)
    document.getElementById('cont-verde').innerHTML = "le caselle verdi aperte sono " + contatoreVerde;
  })
  $(".rosso").click(function() {
    $(this).css("background","red");
    contatoreRosso += 1;
    // console.log("rosso!",contatoreRosso);
    document.getElementById('cont-rosso').innerHTML = "le caselle rosse aperte sono " + contatoreRosso;
  })
  document.getElementById('cont-rosso').innerHTML = "le caselle rosse aperte sono " + contatoreRosso;
  document.getElementById('cont-verde').innerHTML = "le caselle verdi aperte sono " + contatoreVerde;


})
