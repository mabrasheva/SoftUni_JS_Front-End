document.addEventListener('DOMContentLoaded', solve);

function solve() {

   const inputTextElement = document.querySelector('form#task-input input[type="text"]');
   const generateButton = document.querySelector('form#task-input input[type="submit"]');
   const divContentElement = document.querySelector('div#content');

   generateButton.addEventListener('click', generateContent);

   function generateContent(event) {

      event.preventDefault();

      const inputTextArray = inputTextElement.value.split(', ');
      inputTextArray.forEach(string => {
         const newDivElement = document.createElement('div');
         const newParagraphElement = document.createElement('p');

         newParagraphElement.textContent = string;
         newParagraphElement.style.display = 'none';
         
         newDivElement.append(newParagraphElement);

         newDivElement.addEventListener('click', (e) => {
            e.target.querySelector('p').style.display = 'block';
        });

         divContentElement.append(newDivElement);
         
      });
   } 
}
