let arr1=localStorage.getItem('Todo')
let arr=arr1?JSON.parse(arr1):[
        {'item-name':'Buy Milk',
         'due-date':'10-10-2024'
        }, 
        {'item-name':'Buy Cheese',
         'due-date':'10-10-2024'
        }];

displayList();

function addtodo(){
let input_txt=document.querySelector('#todo_id');
let input_date=document.querySelector('#dAte')
let teXt=input_txt.value;
let daTe=input_date.value;

arr.push({ 'item-name': teXt, 'due-date': daTe });
input_date.value='';
input_txt.value='';
displayList();
}

function displayList(){
    let htMl=document.querySelector('.todoCont');
    let newHtml=''
    for(let i=0;i<arr.length;i++){
        let{'item-name':itemName,'due-date':dueDate}=arr[i];
        newHtml+=`<span>${itemName}</span><span>${dueDate}</span><button class="delete-btn" onclick="arr.splice(${i},1);displayList();">Delete</button>`;
    }
    htMl.innerHTML=newHtml;
    localStorage.setItem('Todo',JSON.stringify(arr));
}