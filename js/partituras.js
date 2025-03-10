
var erros = 0;
var acertos = 0
var notas = ['C4/w','D4/w','E4/w','F4/w','G4/w','A4/w','B4/w', 'C5/w','D5/w','E5/w','F5/w','G5/w','A5/w','B5/w'];
var ntAtual = notaAleatoria();
var ntAnterior = null;

renderizaPartitura(ntAtual);
(ntAtual > 6) ? ntAtual = ntAtual - 7: ntAtual;


function renderizaPartitura(nt) {
  const VF = Vex.Flow;
  var vf = new VF.Factory({renderer: {elementId: 'div-part', height: 400}});
  var score = vf.EasyScore();
  var system = vf.System();
  system.addStave({
      voices: [score.voice(score.notes(notas[nt]))]
    }).addClef('treble').addTimeSignature('4/4');
  vf.draw();
}

function btNotaClick(nota) {
    limpaDiv();
    //alert('Nota:' + nota + ' / Nota na pauta:' + ntAtual );
    (ntAtual > 6) ? ntAtual = ntAtual - 7: ntAtual;
    (ntAtual == nota) ? acertos++ : erros++;
    document.getElementById('h2acertos').innerHTML = "Acertos: " + acertos;
    document.getElementById('h2erros').innerHTML = "Erros: " + erros;
    ntAtual = notaAleatoria();
    renderizaPartitura(ntAtual);
}

function notaAleatoria() {
  note = Math.floor(Math.random() * 14);
  return note;
}

function limpaDiv(){
  // apaga o conteudo da  div que contem a partitura
  document.getElementById('div-part').innerHTML = "";
}

function desabilitaBotoes() {
  document.getElementsByClassName('.bt-nota').disabled = true;
}
function habilitaBotoes() {
  document.getElementsByClassName('.bt-nota').disabled = false;
}

function btIniciarClick() {
  limpaDiv();
  erros = 0;
  acertos=0;
  document.getElementById('h2erros').innerHTML = "Erros: " + erros;
  document.getElementById('h2acertos').innerHTML = "Acertos: " + acertos;
  ntAtual = notaAleatoria();
  renderizaPartitura(ntAtual);
}