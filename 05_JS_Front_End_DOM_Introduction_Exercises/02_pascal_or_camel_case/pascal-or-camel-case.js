function solve() {
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  const pascalCase = text
    .split(' ')
    .map(word => (word[0].toUpperCase() + word.slice(1).toLowerCase()))
    .join('');
  const camelCase = pascalCase[0].toLowerCase() + pascalCase.slice(1);

  // if-else:

  // if (namingConvention === 'Pascal Case') {
  //   result.textContent = pascalCase;
  // } else if (namingConvention === 'Camel Case') {
  //   result.textContent = camelCase;
  // } else {
  //   result.textContent = 'Error!';
  // }

  // switch-case:

  switch (namingConvention) {
    case 'Pascal Case':
      result.textContent = pascalCase;
      break;
    case 'Camel Case':
      result.textContent = camelCase;
      break;
    default:
      result.textContent = 'Error!'
      break;
  }

}
