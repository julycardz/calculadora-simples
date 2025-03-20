let currentInput = "";  // Variável para armazenar o valor atual no display
let operator = "";      // Variável para armazenar o operador escolhido
let previousInput = ""; // Variável para armazenar o valor anterior para operação

// Função para atualizar o display
function updateDisplay() {
    document.querySelector(".display").innerText = currentInput || "0";
}

// Função para inserir números no display
function insertValor(number) {
    currentInput += number;
    updateDisplay();
}

// Função para inserir operadores
function insertOperator(op) {
    if (currentInput === "") return;  // Não faz nada se não houver número inserido
    if (previousInput !== "") {
        calculate(); // Realiza o cálculo se já houver valores para calcular
    }
    operator = op;
    previousInput = currentInput;  // Salva o número atual para operação
    currentInput = "";  // Limpa o display para o próximo número
}

// Função para realizar o cálculo
function calculate() {
    if (previousInput === "" || currentInput === "") return;  // Se não houver valores, não faz nada

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = (num1 * num2) / 100;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = ""; // Limpa o operador
    previousInput = ""; // Limpa o valor anterior
    updateDisplay();
}

// Função para limpar o display
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

// Adiciona eventos aos botões
document.querySelectorAll(".btn-claro").forEach(button => {
    button.addEventListener("click", () => insertValor(button.innerText));
});

document.querySelectorAll(".btn-laranja").forEach(button => {
    button.addEventListener("click", () => insertOperator(button.innerText));
});

document.querySelector(".btn-escuro").addEventListener("click", clearDisplay);
document.querySelector(".btn-laranja:last-child").addEventListener("click", calculate);
