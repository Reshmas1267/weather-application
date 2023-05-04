function Form()
{return(
    <div>
        <form onSubmit="validation()">
            <h3>Registration</h3>
            <lable>FullName</lable>
            <input id="fullname" type="text" placeholder="enter your name"></input>
            <br></br>
            <br></br>
            <lable>email</lable>
            <input id="email" type="email"></input> 
            <br></br>
            <lable>password</lable>
            <input id="pswd" type="password"></input>
            <br></br>
            <br></br>
            <lable>comfirm password</lable>
            <input id="cpswd" type="password"></input>
            <br></br>
            <button>Registration</button>
            
            
            
        </form>

        <form>
            <h3>Login</h3>
            <lable>FullName1</lable>
            <input id="fullname" type="text" placeholder="enter your name"></input>
            <br></br>
            <br></br>
            <lable>email1</lable>
            <input id="email" type="email"></input> 
            <br></br>
            <lable>password1</lable>
            <input id="pswd1" type="password"></input>
            <br></br>
            <br></br>
            <button>Login</button>
            
            
            
         </form>

    </div>
)
}
function validation(){
    const user=document.getElementById("fullname").value
    const email=document.getElementById("email").value
    const p=document.getElementById("pswd").value
    const cp=document.getElementById("cpswd").value
    if(user.length<=5){
        alert("fullname atleast define >5 character")
    }
    else if(p!=cp){
        alert("password does not match ")
    }
    else{
        alert("sucessfully submited")
        localStorage.setItem("fullname",user)
        localStorage.setItem("email",email)
        localStorage.setItem("password",p)
    }
}
function login(){
    const user=document.getElementById("fullname1").value
    const email=document.getElementById("email1").value
    const p=document.getElementById("pswd1").value

    let x= localStorage.getItem("fullname")
    let y=localStorage.getItem("email")
    let z=localStorage.getItem("password")

    if(user!=x && email!=y && p!=z){
        alert(" credential is wrong")
    }
    else{
        alert("login succesfully")
    }                                                                                                                                               

}


export default Form;