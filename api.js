// api.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/Riddhi707/repos")
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById('repo-list');
            data.slice(0, 5).forEach(repo => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                repoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
});
