const accordian = document.querySelectorAll(".accordian");

console.log(accordian);

accordian.forEach((accord) => {
	let icon = accord.querySelector(".icon");
  let answer = accord.querySelector(".answer");
  let question = accord.querySelector(".question");

	accord.addEventListener("click", () => {
		accordian.forEach((element) => {
      if (element !== accord) {
        let icons = element.querySelector(".icon");
        let answers = element.querySelector(".answer");
				icons.classList.remove("active");
				answers.style.maxHeight = null;
			}
		});

		if (icon.classList.contains("active")) {
			icon.classList.remove("active");
			answer.style.maxHeight = null;
		} else {
			icon.classList.add("active");
			answer.style.maxHeight = answer.scrollHeight + "px";
			// console.log(answer.innerText);
		}
	});
});
