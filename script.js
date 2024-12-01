
function toggleBox(boxNumber) {
  const box = document.querySelectorAll('.box')[boxNumber - 1];
  const content = document.getElementById(`content${boxNumber}`);
  
  content.classList.toggle('show');
  box.classList.toggle('expanded'); 
}

document.querySelectorAll('select').forEach(select => {
  select.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

  
  