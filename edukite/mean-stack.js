document.addEventListener('DOMContentLoaded', function () {
  const ratingGroups = document.querySelectorAll('.rating-group');

  ratingGroups.forEach(group => {
    const stars = group.querySelectorAll('.star-icon');
    const progressBar = group.querySelector('.progress-bar');
    const progressText = group.querySelector('.progress-text');
    let selectedValue = 0;

    stars.forEach(star => {
      star.addEventListener('click', function () {
        // Update the selected value
        selectedValue = parseInt(this.getAttribute('data-value'));

        // Update star colors
        stars.forEach(s => {
          if (parseInt(s.getAttribute('data-value')) <= selectedValue) {
            s.classList.add('selected');
          } else {
            s.classList.remove('selected');
          }
        });

        // Convert the selected value to a percentage
        const percentage = (selectedValue / 5) * 100;

        // Update progress bar and text
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${selectedValue}`;

        // Print the value to the console
        console.log(`Selected rating: ${selectedValue}`);
      });
    });
  });
});
