let inputdata = document.getElementById("input");
function enterData(data) {
  inputdata.value += data;
}
function calculateData() {
  inputdata.value = eval(inputdata.value);
}
function del(e) {
  inputdata.value = "";
}
function square() {
  inputdata.value = eval(inputdata.value * inputdata.value);
}
