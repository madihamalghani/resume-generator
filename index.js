document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value.split(','); // convert skills to array
    const education = document.getElementById('education').value;
    const phoneNumber = document.getElementById('tel').value;
    const experience = document.getElementById('experience').value;
    const description = document.getElementById('desc').value;
    const location = document.getElementById('location').value;
    const selectedTemplate = document.getElementById('template-selector').value;
    let resumeHtml = '';

    if (selectedTemplate === 'modern') {
        // Modern Template Layout
        resumeHtml = `
            <div class="modern-template">
                <h1 style="text-align: center;">${name}</h1>
                <p style="text-align: center;"><strong>${email} | ${phoneNumber} | ${location}</strong></p>
                <section>
                    <h3>Professional Summary</h3>
                    <p>${description}</p>
                </section>
                <section>
                    <h3>Skills</h3>
                    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
                </section>
                <section>
                    <h3>Education</h3>
                    <p>${education}</p>
                </section>
                <section>
                    <h3>Experience</h3>
                    <p>${experience}</p>
                </section>
            </div>
        `;
    } else if (selectedTemplate === 'minimal') {
        // Minimal Template Layout
        resumeHtml = `
            <div class="minimal-template">
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phoneNumber}</p>
                <p><strong>Location:</strong> ${location}</p>
                <h4>About Me</h4>
                <p>${description}</p>
                <h4>Skills</h4>
                <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
                <h4>Education</h4>
                <p>${education}</p>
                <h4>Experience</h4>
                <p>${experience}</p>
            </div>
        `;

    }
    else if (selectedTemplate === 'designed') {
        resumeHtml = `
        <div class="designed-template">
        <div class="grid-item1">
        <h1 style="text-align: center;">${name}</h1>
        <p style="text-align: center;"><strong>${email} | ${phoneNumber}</strong></p>
        <p style="margin-left:9vh;"><strong>Location: </strong>  ${location}</p>
        </div>
        <div class="grid-item2">
        <h4>Description</h4>
        <p>${description}</p>
        <h4>Skills</h4>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        </div>
        </div>
    `;

    }
    else {
        resumeHtml = `
    
        <h2 style="display: inline;">Name:</h2>
        <h4 style="display: inline;">${name}</h4>
        <br></br>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Location: </strong> ${location}</p>
        <h4>Description</h4>
        <p>${description}</p>
        <h4>Skills</h4>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
    `;
    }
    // Display the resume
    document.getElementById('resume-output').innerHTML = resumeHtml;
    document.getElementById('resume-output').style.display = 'block';

   
});

const selectedTemplate = document.getElementById('template-selector').value;
let resumeHtml = '';
    // const selectedTemplate = this.value;

// allow print
function printResume() {
    window.print();
}


