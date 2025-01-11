document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const studentName = document.getElementById("studentName").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const date = document.getElementById("date").value;

    if (studentName && rollNumber && date) {
        const tableBody = document.getElementById("attendanceTableBody");
        
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${studentName}</td>
            <td>${rollNumber}</td>
            <td>${date}</td>
        `;

        tableBody.appendChild(newRow);

        // Clear the form fields
        document.getElementById("attendanceForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
