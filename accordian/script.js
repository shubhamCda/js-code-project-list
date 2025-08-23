const accordian = document.querySelectorAll(".accordian");

console.log(accordian);

accordian.forEach((accord) => {
  let icon = accord.querySelector(".icon");
  let answer = accord.querySelector(".answer");

  accord.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
      
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      // console.log(answer.innerText);
    }
  })
})
