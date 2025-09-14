// Lógica original separada en un archivo JS
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calcForm');
  const screen = document.getElementById('screen');

  let current = '0';      // número que se está ingresando
  let previous = null;    // número anterior
  let operator = null;    // '+', '-', '*', '/'
  let justEvaluated = false;

  const updateScreen = () => (screen.value = current);

  function inputNumber(n) {
    if (justEvaluated) { current = '0'; justEvaluated = false; }
    if (n === '.') {
      if (!current.includes('.')) current += '.';
      return updateScreen();
    }
    if (current === '0') current = '';
    current += n;
    updateScreen();
  }

  function setOperator(op) {
    if (operator && previous !== null && !justEvaluated) {
      evaluate();
    }
    previous = parseFloat(current);
    operator = op;
    current = '0';
    justEvaluated = false;
    updateScreen();
  }

  function clearAll() {
    current = '0'; previous = null; operator = null; justEvaluated = false; updateScreen();
  }

  function deleteLast() {
    if (justEvaluated) { clearAll(); return; }
    current = current.length > 1 ? current.slice(0, -1) : '0';
    updateScreen();
  }

  function evaluate() {
    if (operator === null || previous === null) return;
    const a = previous;
    const b = parseFloat(current);
    let res;
    switch (operator) {
      case '+': res = a + b; break;
      case '-': res = a - b; break;
      case '*': res = a * b; break;
      case '/':
        if (b === 0) { screen.value = 'Error: ÷0'; justEvaluated = true; return; }
        res = a / b; break;
    }
    current = String(res);
    previous = null;
    operator = null;
    justEvaluated = true;
    updateScreen();
  }

  // Eventos de botones (delegación)
  form.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const num = btn.getAttribute('data-num');
    const op  = btn.getAttribute('data-op');
    const act = btn.getAttribute('data-action');

    if (num !== null) inputNumber(num);
    if (op  !== null) setOperator(op);
    if (act === 'clear') clearAll();
    if (act === 'delete') deleteLast();
  });

  // Resolver con '=' (submit del form)
  form.addEventListener('submit', (e) => { e.preventDefault(); evaluate(); });

  // Soporte básico de teclado
  window.addEventListener('keydown', (e) => {
    if ((/^[0-9]$/).test(e.key)) inputNumber(e.key);
    if (e.key === '.') inputNumber('.');
    if ('+-*/'.includes(e.key)) setOperator(e.key);
    if (e.key === 'Enter' || e.key === '=') { e.preventDefault(); evaluate(); }
    if (e.key === 'Backspace') deleteLast();
    if (e.key.toLowerCase() === 'c') clearAll();
  });
});
