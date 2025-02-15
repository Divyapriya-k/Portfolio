// script.js
document.addEventListener('DOMContentLoaded', () => {  // Wait for the DOM to load

    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
  
        const targetId = link.getAttribute('href'); // Get the target section ID
  
        // Hide all sections
        sections.forEach(section => {
          section.classList.add('hidden');
        });
  
        // Show the target section
        document.querySelector(targetId).classList.remove('hidden');
  
          // Optional: Smooth scrolling (if you want it)
          document.querySelector(targetId).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });
  });

  // document.addEventListener('DOMContentLoaded', () => {
  //   const resumeLinksContainer = document.getElementById('resume-links');

  //   // Download Link
  //   const downloadLink = document.createElement('a');
  //   downloadLink.href = 'https://in.docworkspace.com/d/sIKbRlf3sAbXHwL0G'; // Path to your resume file
  //   downloadLink.download = ''; // Forces download
  //   downloadLink.textContent = 'Download Resume ⬇️';
  //   downloadLink.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'mr-4'); // Tailwind classes and margin
  //   resumeLinksContainer.appendChild(downloadLink);

  //   // Google Drive Link
  //   const googleDriveLink = document.createElement('a');
  //   googleDriveLink.href = 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing'; // Replace with your Google Drive link
  //   googleDriveLink.target = '_blank'; // Open in new tab
  //   googleDriveLink.rel = 'noopener noreferrer'; // Security best practice
  //   googleDriveLink.textContent = 'Open in Google Drive';
  //   googleDriveLink.classList.add('bg-gray-500', 'hover:bg-gray-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded'); // Tailwind classes
  //   resumeLinksContainer.appendChild(googleDriveLink);
  // });