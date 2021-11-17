/* Functionality */
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".fa-times");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => (modal.style.display = "flex"));

closeBtn.addEventListener("click", () => (modal.style.display = "none"));

window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
