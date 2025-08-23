const userName = document.querySelector("#user");
const users = document.querySelector(".user-list");

let devArr = [];
let timer;

const getData = async () => {
	const res = await fetch("https://api.github.com/users");
	const data = await res.json();

	// console.log(data);

	if (data) {
		users.innerHTML = "";
	}

	data.map((devp) => {
		let li = document.createElement("li");

		devArr.push(li);

		li.insertAdjacentHTML(
			"afterbegin",
			`
      <div class="user-data">
      <img src="${devp.avatar_url}" alt="${devp.avatar_url}" >
      <div>
      <p>${devp.login}</p>
      <a href="${devp.html_url}" target="_blank">${devp.html_url}</a>
      </div>
      </div>
      `
		);
		users.appendChild(li);
	});
};

getData();

const debounce = (func, delayMs) => {
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, delayMs);
	};
};

const getUser = (query) => {
	devArr.filter((curEle) => {
		curEle.innerText.toLowerCase().includes(query.toLowerCase())
			? curEle.classList.remove("hide")
			: curEle.classList.add("hide");
	});
};

const debounceDataGet = debounce(getUser, 500);

userName.addEventListener("keyup", (e) => {
	debounceDataGet(e.target.value);
});
