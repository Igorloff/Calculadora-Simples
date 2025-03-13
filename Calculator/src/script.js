function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calcular() {
    try {
        let displayCalc = eval(document.getElementById('display').value);
        document.getElementById('display').value = displayCalc;
    } catch {
        document.getElementById('display').value = 'Erro';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function Calcular() {
    
}