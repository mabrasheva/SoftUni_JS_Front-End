function solve() {
   const searchedString = document.getElementById('searchText').value;
   const ulElement = document.querySelectorAll('ul#towns > li');
   const numberOfMatchesElement = document.getElementById('result');

   Array.from(ulElement).forEach(element => {
      element.style.fontWeight = 'initial';
      element.style.textDecoration = 'initial';
   });

   const matchesArray = Array.from(ulElement)
      .filter(element => element.textContent.includes(searchedString))
      .map(element => {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      });

   numberOfMatchesElement.textContent = `${matchesArray.length} matches found`;
}
