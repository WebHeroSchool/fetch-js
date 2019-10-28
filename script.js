const url = 'https://api.github.com/users/6thSence';
fetch(url)
    .then(res => res.json())
    .then(json => {
        let getImage = () => {
            let photo = document.querySelector('.image');
            photo.src = json.avatar_url;
            photo.innerHTML = photo;
        }
        let getLink = () => {
            let link = document.querySelector('.link');
            link.href = json.html_url;
        }
        let getName = () => {
            let name = json.name;
            let h1 = document.querySelector('.title');
            h1.innerHTML = name;
        }
        let getDescription = () => {
            let p = document.querySelector('.text');
            let info = json.bio; 
            p.innerHTML = info;
        }
        getImage();
        getLink();
        getName();
        getDescription();
    })
    .catch(err => alert('Информация о пользователе не доступна'))