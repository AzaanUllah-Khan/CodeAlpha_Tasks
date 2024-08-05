    let darkMode = false;

    function toggleDarkMode() {
      const body = document.body;
      darkMode = !darkMode;
      body.classList.toggle('dark-mode', darkMode);
    }

    function deleteLast() {
      const screen = document.querySelector('.screen');
      screen.textContent = screen.textContent.slice(0, -1);
    }

    function clearAll() {
      const screen = document.querySelector('.screen');
      screen.textContent = '';
      document.querySelector('.equation').textContent = '';
    }

    function appendSymbol(symbol) {
      const screen = document.querySelector('.screen');
      if (symbol === '√') {
        screen.textContent = `Math.sqrt(${screen.textContent})`;
      } else {
        screen.textContent += symbol;
      }
    }

    function calculate() {
      const screen = document.querySelector('.screen');
      const result = document.querySelector('.result');
      const equation = document.querySelector('.equation');
      equation.textContent = screen.textContent;
      try {
        const expr = screen.textContent
        screen.textContent = eval(expr);
      } catch (error) {
        screen.textContent = 'Error';
      }
    }

    const darkModeBtn = document.getElementById('darkModeBtn');
const icon = darkModeBtn.querySelector('i');

darkModeBtn.addEventListener('click', () => {
  icon.classList.add('rotate-icon');
  setTimeout(() => {
    icon.classList.remove('rotate-icon');
  }, 750);
});