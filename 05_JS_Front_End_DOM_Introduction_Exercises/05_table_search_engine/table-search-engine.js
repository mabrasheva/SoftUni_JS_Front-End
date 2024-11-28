function solve() {
   const searchedString = document.getElementById('searchField').value;
   const tableRowElement = document.querySelectorAll('table tbody tr');

   Array.from(tableRowElement).forEach(tr => {
      tr.classList.remove('select');
   });

   if (searchedString === '') {
      return
   }

   Array.from(tableRowElement).forEach(tr => {
      Array.from(tr.children).forEach(td => {
         if (td.textContent.includes(searchedString)) {
            tr.classList.add('select');
         }
      });
   });
}
