// Sample data for profiles
const profiles = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', file: 'file1.pdf' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', file: 'file2.pdf' },
    { id: 3, name: 'Mike Johnson', email: 'mikejohnson@example.com', file: 'file3.pdf' }
  ];
  
  // Function to display profile details
  function displayProfile(profile) {
    const profileDiv = document.getElementById('profile');
  
    // Clear previous profile details
    profileDiv.innerHTML = '';
  
    // Create elements to display profile details
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = profile.name;
    profileDiv.appendChild(nameHeading);
  
    const emailPara = document.createElement('p');
    emailPara.textContent = `Email: ${profile.email}`;
    profileDiv.appendChild(emailPara);
  
    const filePara = document.createElement('p');
    filePara.textContent = profile.file ? `File: ${profile.file}` : 'No file submitted';
    profileDiv.appendChild(filePara);
  
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Profile';
    editButton.addEventListener('click', () => {
      // Handle edit profile functionality
      // ...
      console.log(`Editing profile: ${profile.name}`);
    });
    profileDiv.appendChild(editButton);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Profile';
    deleteButton.addEventListener('click', () => {
      // Handle delete profile functionality
      // ...
      console.log(`Deleting profile: ${profile.name}`);
    });
    profileDiv.appendChild(deleteButton);
  }
  
  // Function to search and display profiles
  function searchProfiles(query) {
    const filteredProfiles = profiles.filter(profile =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
  
    const profileDiv = document.getElementById('profile');
  
    // Clear previous search results
    profileDiv.innerHTML = '';
  
    // Display search results
    filteredProfiles.forEach(profile => {
      const profileLink = document.createElement('a');
      profileLink.href = '#';
      profileLink.textContent = profile.name;
      profileLink.addEventListener('click', () => {
        displayProfile(profile);
      });
      profileDiv.appendChild(profileLink);
    });
  }
  
  // Event listener for search input
  document.getElementById('search').addEventListener('input', event => {
    const searchQuery = event.target.value;
    searchProfiles(searchQuery);
  });
  
  // Initial display of profiles
  searchProfiles('');
  