function solve() {
   const searchedString = document.getElementById('searchField').value;
   const tableRowsElement = document.querySelectorAll('table tbody tr');

   Array.from(tableRowsElement).forEach(tr => {
      tr.classList.remove('select');
   });

   if (searchedString === '') {
      return
   }

   Array.from(tableRowsElement).forEach(tr => {
      Array.from(tr.children).forEach(td => {
         if (td.textContent.includes(searchedString)) {
            tr.classList.add('select');
         }
      });
   });
}
