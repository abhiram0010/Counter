const incr=document.getElementById("increment");
const rst=document.getElementById("reset");
const decr=document.getElementById("decrement");
let temp=0;
incr.addEventListener('click',() =>{
   add();
});
function add()
{
temp++;
count.innerText=temp;
}
decr.addEventListener('click',() =>{
  dcr();
});
function dcr()
{
 // if(temp>0)
  //{
    temp--;
    count.innerText=temp;
  //}
  // else{
  //   count.innerText="number less than zero please reset";
  // }

}
rst.addEventListener('click',() =>{
  rest();
});
function rest()
{
temp=0;
count.innerText=temp;
}