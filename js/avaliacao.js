const erros = 0;
const acertos = 0;
const notas = ['C4/w', 'D4/w', 'E4/w', 'F4/w', 'G4/w', 'A4/w', 'B4/w', 'C5/w', 'D5/w', 'E5/w', 'F5/w', 'G5/w', 'A5/w', 'B5/w'];
let notaAtual = notaAleatoria();
let notaAnterior = null;

renderizaPartitura(notaAtual);
(notaAtual > 6) ? notaAtual -= 7 : notaAtual;

document.getElementById('h2acertos').style.display = 'none';
document.getElementById('h2erros').style.display = 'none';

function renderizaPartitura(nota) {
    const VF = Vex.Flow;
    const divPartitura = document.getElementById('div-part');
    divPartitura.innerHTML = ''; // Limpa o conteúdo anterior

    const vf = new VF.Factory({ renderer: { elementId: 'div-part', height: 400 } });
    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
        voices: [score.voice(score.notes(notas[nota]))]
    }).addClef('treble').addTimeSignature('4/4');

    vf.draw();
}

function btNotaClick(nota) {
    limpaDiv();
    (notaAtual > 6) ? notaAtual -= 7 : notaAtual;

    if (notaAtual === nota) {
        acertos++;
    } else {
        erros++;
    }

    document.getElementById('h2acertos').textContent = "Acertos: " + acertos;
    document.getElementById('h2erros').textContent = "Erros: " + erros;
    notaAtual = notaAleatoria();
    renderizaPartitura(notaAtual);
}

function notaAleatoria() {
    return Math.floor(Math.random() * 14);
}

function limpaDiv() {
    document.getElementById('div-part').innerHTML = "";
}

function desabilitaBotoes() {
    const botoes = document.querySelectorAll('.bt-nota');
    botoes.forEach(botao => botao.disabled = true);
}

function habilitaBotoes() {
    const botoes = document.querySelectorAll('.bt-nota');
    botoes.forEach(botao => botao.disabled = false);
}

function btIniciarClick() {
    limpaDiv();
    erros = 0;
    acertos = 0;
    document.getElementById('h2erros').textContent = "Erros: " + erros;
    document.getElementById('h2acertos').textContent = "Acertos: " + acertos;
    notaAtual = notaAleatoria();
    renderizaPartitura(notaAtual);
}

function sendEmail() {
    const emailBody = `Acertos: ${acertos}, Erros: ${erros}`;

    Email.send({
        SecureToken: "SEU_TOKEN_AQUI", // Use um token seguro em vez de senha
        To: 'ptgo0805@gmail.com',
        From: "ptgo0805@gmail.com",
        Subject: "Avaliacao",
        Body: emailBody,
    }).then(function (message) {
        alert("Avaliação enviada com sucesso");
    }).catch(function (error) {
        alert("Erro ao enviar avaliação: " + error.message);
    });
}