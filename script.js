function updateCurrentTime(branchId) {
    const currentTimeElement = document.getElementById(`branch-${branchId}-time`);
    const currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = currentTime;
}

// Update current time for each branch
updateCurrentTime(1);
updateCurrentTime(2);
// Add more branches if needed

// JavaScript to filter users based on sidebar selections
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filter-checkbox");

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            filterUsers();
        });
    });

    function filterUsers() {
        checkboxes.forEach(function (checkbox) {
            const filter = checkbox.getAttribute("data-filter");
            const rows = document.querySelectorAll("tbody tr");

            rows.forEach(function (row) {
                if (checkbox.checked) {
                    if (row.classList.contains(filter)) {
                        row.style.display = "";
                    } else {
                        row.style.display = "none";
                    }
                } else {
                    row.style.display = "";
                }
            });
        });
    }

    // Initial filtering when the page loads
    filterUsers();
});

