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




// form

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('review-form');
  const reviewList = document.getElementById('review-list');
  const ratingGroup = document.querySelector('.rating-group');

  

  // Function to handle star rating click
  function handleStarClick(event) {
    if (event.target.classList.contains('star-icon1')) {
      const clickedStarValue = event.target.dataset.value;

      // Remove 'selected' class from all stars
      document.querySelectorAll('.rating-group .star-icon1').forEach(star => star.classList.remove('selected'));

      // Add 'selected' class to the clicked star and all previous stars
      document.querySelectorAll('.rating-group .star-icon1').forEach(star => {
        if (parseInt(star.dataset.value) <= parseInt(clickedStarValue)) {
          star.classList.add('selected');
        }
      });

      // Set hidden input with the rating value
      document.getElementById('hidden-rating').value = clickedStarValue;
    }
  }

  // Event listener for rating stars
  ratingGroup.addEventListener('click', handleStarClick);

  // Event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const username = document.getElementById('username').value;
    const date = document.getElementById('date').value;
    const rating = document.getElementById('hidden-rating').value;
    const comment = document.getElementById('comment').value;

    

    // Create a new review element
    const newReview = document.createElement('li');
    newReview.className = 'review-item';
    newReview.innerHTML = `
        <div class="flex-none">
            <img src="assets/images/all-img/cmnt-1.png" alt="User Image">
        </div>
        <div class="flex-1">
            <div class="stars mb-4">
                ${Array.from({ length: parseInt(rating) }, () => `<span class="star-icon1 selected">★</span>`).join('')}
                ${Array.from({ length: 5 - parseInt(rating) }, () => `<span class="star-icon1">★</span>`).join('')}
            </div>
            <p>${comment}</p>
            <div class="author mt-4">
                <span class="block text-xl font-bold text-black">${username}</span>
                <span class="block">${date}</span>
                
            </div>
        </div>
    `;

    // Append the new review to the reviews list
    reviewList.prepend(newReview);

    // Clear the form
    form.reset();

    // Reset the rating selection
    document.querySelectorAll('.rating-group .star-icon1').forEach(star => star.classList.remove('selected'));
    document.getElementById('hidden-rating').value = '';
  });
});

// >>>>>>>>

document.querySelectorAll('.star-icon1').forEach(star => {
  star.addEventListener('click', function() {
      const rating = this.getAttribute('data-value');
      
      // Remove 'filled' class from all stars
      document.querySelectorAll('.star-icon1').forEach(star => {
          star.classList.remove('filled');
      });
      
      // Add 'filled' class to the selected star and all previous stars
      for (let i = 0; i < rating; i++) {
          document.querySelectorAll('.star-icon1')[i].classList.add('filled');
      }

      // Display the selected rating
      document.getElementById('selected-rating').textContent = `You selected ${rating} stars`;
  });
});



