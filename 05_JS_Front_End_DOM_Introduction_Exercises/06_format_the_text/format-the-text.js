function solve() {
  const inputElement = document.getElementById('input').value;
  const outputElement = document.getElementById('output');
  const ThreeSentencePattern = /(?:[^.]+?\.){1,3}/g;  // match 1 to 3 sentences

  outputElement.innerHTML = '';

  // Option 1:
  const sentencesArray = Array.from(inputElement.matchAll(ThreeSentencePattern))
    .map(element => `<p>${element[0].trim()}</p>`)

  outputElement.innerHTML = sentencesArray.join('');

  // Option 2:
  // const sentencesArray = Array.from(inputElement.matchAll(ThreeSentencePattern));

  // sentencesArray.forEach(match => {
  //   const paragraph = document.createElement('p');
  //   paragraph.textContent = match[0].trim();
  //   outputElement.appendChild(paragraph);
  // });

}
