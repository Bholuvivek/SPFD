const userdata = document.getElementById('name')
const follower = document.getElementById('follower')
const following = document.getElementById('following')
const profilePhoto = document.getElementById('photo')
const idnum = document.getElementById('idnum')
const idlink = document.getElementById('html_url')
const repo = document.getElementById('public_repos')

const url = "https://api.github.com/users/kamleshgupt"
let xhr = new XMLHttpRequest();
xhr.open('GET', url)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        userdata.innerHTML = `User Name : ${data.login}`
        follower.innerHTML = `User Follower : ${data.followers}`
        following.innerHTML = `User Following : ${data.following}`;
        idnum.innerHTML = `User Id : ${data.id}`
        repo.innerHTML = `Total Repo : ${data.public_repos}`
        idlink.innerHTML = `Profile Link: <a href='${data.html_url}'>${data.html_url}</a>`
        profilePhoto.innerHTML = `<img src="${data.avatar_url}" width="65px" height='80px' border='2px' border-color='blue'>`

    }
}
xhr.send()