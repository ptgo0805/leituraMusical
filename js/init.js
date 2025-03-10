function init() {
    // Verifica se o elemento canvas existe
    const canvas = document.getElementById("demoCanvas");
    if (!canvas) {
        console.error("Elemento 'demoCanvas' não encontrado no DOM.");
        return;
    }

    // Verifica se a biblioteca CreateJS está carregada
    if (!createjs || !createjs.Stage || !createjs.Shape) {
        console.error("Biblioteca CreateJS não carregada corretamente.");
        return;
    }

    // Cria o estágio e o círculo
    const stage = new createjs.Stage(canvas);
    const circle = new createjs.Shape();

    // Configura o círculo
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;

    // Adiciona o círculo ao estágio e renderiza
    stage.addChild(circle);
    stage.update();

    // Opcional: Configura um Ticker para atualizações contínuas
    createjs.Ticker.addEventListener("tick", () => {
        stage.update();
    });
}