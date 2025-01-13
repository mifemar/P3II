/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.addEventListener('DOMContentLoaded', () => {
  // Toggle extra text
  const link = document.getElementById('toggle-link');
  const extraText = document.getElementById('extra-text');

  link.addEventListener('click', () => {
    if (extraText.style.display === 'none') {
      extraText.style.display = 'block';
      link.style.display = 'none';
    } else {
      extraText.style.display = 'none';
      link.textContent = 'Leer más';
    }
  });
});
