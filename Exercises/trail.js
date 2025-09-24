const form = document.querySelector('form');
const checkboxes = form.querySelectorAll('input[type="checkbox"]');

// Save to localStorage
function saveToLocalStorage(arr) {
  localStorage.setItem("trails", JSON.stringify(arr));
}

// Handle form submit
form.addEventListener('submit', function () {

  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  if (selected.length === 0) {
    alert("Please select at least one trail");
    return;
  }
//   localStorage.setItem("trails", JSON.stringify(selected));
//     checkboxes.forEach(cb => {
//         if (selected.includes(cb.value)) {
//         cb.disabled = true;
//         cb.checked = true;
//         }
//     });

    saveToLocalStorage(selected);
  alert("Your trail preferences have been saved.");
  form.reset();
});

// Restore on page load
document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem("trails");
  if (!saved) return;

  const oldTasks = JSON.parse(saved);

  checkboxes.forEach(cb => {
    if (oldTasks.includes(cb.value)) {
      cb.checked = true;
      cb.disabled = true;
    }
  });
});
