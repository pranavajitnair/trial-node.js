const k=document.querySelector('form');
const val=document.querySelector('input')
const para=document.querySelector('#message');
k.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch('/weather?address='+val.value).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                para.textContent='something went wrong';
            }
            else {
              //  console.log(data.location);
                para.textContent=data.name;
            }
        })
    }) 
})