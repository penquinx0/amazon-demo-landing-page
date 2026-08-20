function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim();
  const resultBox = document.getElementById('result');

  if (!id) return alert('Please enter a valid Email or ID');

  // Clear previous results and show spinner
  resultBox.innerHTML = '';
  showSpinner(true);

  // Simulate network delay and dummy data
  setTimeout(() => {
    const student = {
      name: "John Doe",
      email: "john@example.com",
      mobile: "9876543210",
      domain: "Web Development",
      college: "Dummy University",
      start: "01 June 2024",
      duration: "1 Month",
      photo: "https://via.placeholder.com/130", // using a nicer placeholder image
      assignments: [true, true, true, true],
      certificate: "#"
    };

    const html = `
      <div class="card">
        <div class="card-header-banner"></div>
        <div class="card-content">
          <img src="${student.photo}" alt="Student Photo" class="profile-img" />
          
          <div class="student-title">
            <h3>${student.name}</h3>
            <span class="domain-badge">${student.domain}</span>
          </div>

          <div class="info-grid">
            <div class="info-item"><strong>Email</strong> ${student.email}</div>
            <div class="info-item"><strong>Mobile</strong> ${student.mobile}</div>
            <div class="info-item"><strong>College</strong> ${student.college}</div>
            <div class="info-item"><strong>Timeline</strong> ${student.start} (${student.duration})</div>
          </div>

          <h4 class="section-title">Assignment Status</h4>
          <div class="assignment-status">
            ${student.assignments.map((done, i) => `
              <span class="status-badge ${done ? 'done' : 'missed'}">
                A${i + 1}: ${done ? '✅' : 'X'}
              </span>
            `).join('')}
          </div>

          <div class="card-footer">
            <span class="final-status">✓ Status: Completed</span>
            <a href="${student.certificate}" target="_blank" class="btn-secondary">View Certificate</a>
          </div>
        </div>
      </div>
    `;

    resultBox.innerHTML = html;
    showSpinner(false);
    showToast('✅ Verification complete.');
  }, 1200);
}


function showSpinner(show) {
  const spinnerContainer = document.getElementById('spinnerContainer');
  if (show) {
    spinnerContainer.classList.remove('hidden');
  } else {
    spinnerContainer.classList.add('hidden');
  }
}