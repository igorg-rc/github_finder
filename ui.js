class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Show profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url} target="_blank" class="btn btn-primary btn-block mb-5">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-danger">Public gists: ${user.gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-item">Company: ${user.company}</li>
              <li class="list-item">Website/Blog: ${user.blog}</li>
              <li class="list-item">Location: ${user.location}</li>
              <li class="list-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>

        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repositories
  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-danger">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Fork: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;

      // Output repositories
      document.getElementById('repos').innerHTML = output;
    })
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alert 
    this.clearAlert();
    // Create a div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Insert text of message
    div.appendChild(document.createTextNode(message));
    // Add parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Time after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile when input is empty
  clearProfile() {
    this.profile.innerHTML = '';
  }

}