document.addEventListener("DOMContentLoaded", () => {
  const storedTask = JSON.parse(localStorage.getItem('tasks'));

  if (storedTask) {
    storedTask.map((curTask) => tasksArr.push(curTask));
    taskUpdate();
  }
})

let tasksArr = [];

const saveTask = () => {
	localStorage.setItem("tasks", JSON.stringify(tasksArr));
};

const addTasks = () => {
	let inputValue = document.querySelector("#input-value");
	const text = inputValue.value.trim();

	if (text) {
		tasksArr.push({ text: text, completed: false });
		inputValue.value = "";
		taskUpdate();
		saveTask();
	}
	console.log(tasksArr);
};

const toggleTaskCompleted = (idx) => {
	tasksArr[idx].completed = !tasksArr[idx].completed;

  taskUpdate();
  saveTask();
};

const deleteTask = (idx) => {
	tasksArr.splice(idx, 1);
  taskUpdate();
  saveTask();
};

const editTask = (idx) => {
	const inputVal = document.querySelector("#input-value");
	inputVal.value = tasksArr[idx].text;

	tasksArr.splice(idx, 1);
  taskUpdate();
  saveTask();
};

const taskUpdate = () => {
	const taskList = document.querySelector("#task-list");
	taskList.innerHTML = "";

	tasksArr.map((curTask, idx) => {
		const li = document.createElement("li");

		li.innerHTML = `<div class="item">
                          <div class="task-on ${
														curTask.completed ? "completed" : ""
													}" >
                              <input type='checkbox' class="checked" ${
																curTask.completed ? "checked" : ""
															}>
                              <p>${curTask.text}</p>
                          </div>
                          <button id="${idx}" onclick="deleteTask(${idx})">Delete</button> 
                          <button id="${idx}" onclick="editTask(${idx})">Edit</button> 
                    </div>`;
		li.addEventListener("change", () => toggleTaskCompleted(idx));

		taskList.append(li);
	});
};

document.getElementById("submit").addEventListener("click", (e) => {
	e.preventDefault();

	addTasks();
	taskUpdate();
});
