class Github {
    getUsers (username) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/search/users?q=${username}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err);
            })
        })
    };

    createElement(items,result) {
        document.querySelector('.number').textContent = result;
        let ul = document.getElementById('list'),
            index = 0;
        ul.innerHTML = "";
        items.forEach(element => {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = `<div class="user-image" style="background-image: url(${element.avatar_url});"></div>
            <div class="user-info">
                <span class="user-name">${element.login}</span>
            </div>
            <a href="${element.html_url}" target="_blank" class="view-repo">
                View
            </a>`;
        });
    }
}

const findUser = new Github();

//IT WILL SHOW DEFAULT USER WITHOUT ANY SEARCH IF UNCOMMENTTED
// findUser.getUsers("john")
// 	.then(res => {
// 	if(res.total_count > 0) findUser.createElement(res.items,res.total_count);
// })

let UsrNotFnd = "User Not Found";

document.getElementById('fa-solid').addEventListener('click',() => {
    let send = document.querySelector('.search-input').value;
    console.log(send);
    find(send);
});

const find = (e) => {
    if(e !== ""){ 
        findUser.getUsers(e)
        .then(res => {
            if(res.total_count > 0) {
                console.log(res.total_count);
                findUser.createElement(res.items,res.total_count);
                document.getElementById("app").style.height = '400px';
            }
            else{
                console.log(res.total_count);
                InvalidUser();
            }
        })
    }else{
        InvalidUser();
    }
}

let InvalidUser = () => {
    let ul = document.getElementById('list');
    ul.innerHTML = "";
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `
    <div class="user-info">
    <span class="user-name">${UsrNotFnd}</span>
    </div>`;
    document.querySelector('.number').textContent = 0;
}