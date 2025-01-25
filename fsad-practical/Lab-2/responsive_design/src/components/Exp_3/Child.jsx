export default function Child({changeUser}) { 

    function changeFun(){
        const name = document.getElementById('name').value
        const salary = document.getElementById('salary').value
        const location = document.getElementById('location').value
        changeUser(name,salary,location)
    }
    
 return(
    <div>
        <h1>Name : </h1><input type="text" id="name" placeholder="Enter Name" />
        <h1>Salary : </h1><input type="number" id="salary" placeholder="Enter Salary" />
        <h1>Location : </h1><input type="text" id="location" placeholder="Enter Location" />
        <button onClick={changeFun}>Update User Info</button>
    </div>
 )
}