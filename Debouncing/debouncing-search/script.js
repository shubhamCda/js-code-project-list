const inputValue = document.querySelector("#input-value");
const users = document.querySelector(".user-list");

console.log(users);

let userAr = [];

const getUserData = async () => {
	const res = await fetch("https://api.github.com/users");
	const data = await res.json();

	if (data) {
		users.innerHTML = "";
	}

	data.map((curUser) => {
		const li = document.createElement("li");

		userAr.push(li);

		li.innerHTML = `<div class='user-data'>
                      <img src=${curUser.avatar_url} alt=${curUser.avatar_url} srcset="">
                      <div>
                          <p>${curUser.login}</p>
                          <a href=${curUser.html_url} target="_blank">${curUser.html_url}</a>
                      </div>
                    </div>`;

		users.appendChild(li);
	});
};

getUserData();


inputValue.addEventListener("keyup", (e) => {
  debounceUserData(e.target.value);
})
