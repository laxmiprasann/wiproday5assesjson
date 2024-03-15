const myButton1 = document.getElementById("myButton1");
const myButton2 = document.getElementById("myButton2");

function postjson()
{
    async function fetchData(){
        try{
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!resp.ok){
                throw new Error('Failed to fetch....');
            }
            const data = await resp.json();
            displayData(data);
        }
        catch(error){
            console.log(error.message);
            document.getElementById('myContent').innerHTML = 'Failed to Fetch the data.........';
        }
        
    }
    
    function displayData(data)
    {
        const myData = document.getElementById('myContent');
        for(let i = 0 ; i < data.length ; i ++){
            const myPost = document.createElement('div');
            myPost.innerHTML = `
            <h2>${data[i].title}</h2>
            <p>${data[i].body}</p>
            
            <hr>
            `;
            myData.appendChild(myPost);
        }
    }
    fetchData();
}
function todojson()
{
    async function fetchData(){
        try{
            const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
            if(!resp.ok){
                throw new Error('Failed to fetch....');
            }
            const data = await resp.json();
            displayData(data);
        }
        catch(error){
            console.log(error.message);
            document.getElementById('myContent').innerHTML = 'Failed to Fetch the data.........';
        }
        
    }
    
    function displayData(data)
    {
        const myData = document.getElementById('myContent');
        for(let i = 0 ; i < data.length ; i ++){
            const myTodo = document.createElement('div');
            myTodo.innerHTML = `
            <h2>${data[i].title}</h2>
            <p>${data[i].completed}</p>
            
            <hr>
            `;
            myData.appendChild(myTodo);
        }
    }
    fetchData();      
}

myButton1.addEventListener("click",postjson);
myButton2.addEventListener("click",todojson);
