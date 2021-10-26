const linksSocialMedias = {
  github: 'rafaelmatos212',
  youtube: '',
  facebook: '',
  instagram: 'the_rmatos',
  twitter: ''
}

function changeSocialMedias() {
  //const userName = document.getElementById('userName').textContent =
  //'Olivia'
  //document.getElementById('userName').textContent = 'Rafael'
  //userName.textContent = 'Rafael M.'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`
  }
}

changeSocialMedias()

function getGitHubProfileInfos() {
  const url = `http://api.github.com/users/${linksSocialMedias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
