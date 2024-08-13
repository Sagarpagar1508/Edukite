function searchCourses() {
    // Get the search input value
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Get all the course elements
    const courses = document.querySelectorAll('#courseContainer a');

    // Initialize a flag to track if any course is found
    let courseFound = false;

    // Loop through the courses and hide/show based on the search input
    courses.forEach(course => {
        const courseName = course.getAttribute('data-course-name').toLowerCase();

        // Check if the course name includes the search input
        if (courseName.includes(searchInput)) {
            course.style.display = ''; // Show the course
            courseFound = true; // Set flag to true if a course is found
        } else {
            course.style.display = 'none'; // Hide the course
        }
    });

    // If no courses match the search input, you could show a message or handle as needed
    if (!courseFound) {
        alert('No courses found matching your search criteria.');
    }
}


// dropdwon


function filterCourses() {
    const filterValue = document.getElementById('filterDropdown').value;
    const courseItems = document.querySelectorAll('.course-item');

    courseItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Initialize the filter to show all courses
window.onload = filterCourses;




