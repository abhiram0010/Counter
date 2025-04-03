const incr = document.getElementById("increment");
const rst = document.getElementById("reset");
const decr = document.getElementById("decrement");
const count = document.getElementById("count");

let temp = 0;

incr.addEventListener("click", () => {
  temp++;
  updateCount();
});

decr.addEventListener("click", () => {
  temp--;
  updateCount();
});

rst.addEventListener("click", () => {
  temp = 0;
  updateCount();
});

function updateCount() {
  count.innerText = temp;
}
