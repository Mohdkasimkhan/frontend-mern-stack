const countvalue=document.querySelector('#counter');

const increment=()=>{
    //geet the value from ui
    let value=parseInt(countvalue.innerText);
    //update the value 
    value++;
    //set the value in ui
    countvalue.innerText=value;

}
const decrement=()=>{
    //geet the value from ui
    let value=parseInt(countvalue.innerText);
    //update the value
    value--;
    //set the value in ui
    countvalue.innerText=value;
}
