const left = document.querySelector(".left");
const right = document.querySelector(".right");
const bar = document.querySelector(".bar");
const editor = document.querySelector(".editor");
const run = document.querySelector(".btn-run");
const iframe = document.querySelector(".iframe");
const dark = document.querySelector(".btn-dark");
const light = document.querySelector(".btn-light");



const drag = function(e) {
  e.preventDefault();
  document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
   width = (e.pageX - bar.offsetWidth / 3) ;
   left.style.width = width + "px";
      editor.resize();
  }

bar.addEventListener("mousedown", function() {
  document.addEventListener("mousemove", drag);
})

bar.addEventListener("mouseup", function() {
  document.removeEventListener("mousemove", drag);
})

run.addEventListener("click", function()
{
  const html = editor.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

dark.addEventListener("click",function()
{
  editor.style.backgroundColor = "#494A4A";
  editor.style.color = "#eee";

})

light.addEventListener("click",function()
{
  editor.style.backgroundColor = "";
  editor.style.color = "black";

})

document.getElementById("live").onclick = function()
{
  if(this.checked)
  {
    editor.addEventListener("keyup",function()
  {
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  })
  }
}
