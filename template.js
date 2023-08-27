const userINP=document.getElementById("username")
const passINP=document.getElementById("pass")
const Click_to_sigh=document.getElementById("Click_to_sigh")

const KEY="key"
const datakey ={
    data:localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)):[],
    setData: function(newData){
    this.data =newData
    }
    
}

Click_to_sigh.addEventListener("click",()=>{
    const value_user=userINP.value;
    const value_pass=passINP.value;
       

    if(!value_user && !value_pass) {
        alert('chua nhap');
        return;
      } 
   userINP.value="";
   passINP.value ="";
    const newData={
        id:Date.toString(),
        name:value_user,
        pass:value_pass,
    }
    datakey.setData([...datakey.data,newData])
    localStorage.setItem(KEY,JSON.stringify(datakey.data))
    console.log(newData);
})


const add= JSON.parse(localStorage.getItem(KEY))
console.log(add.find((user) => user.name === userINP.value && user.pass === passINP.value));      