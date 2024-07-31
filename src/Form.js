const { useState } = require("react")


function Form(){
   const [user,setUser] = useState("")
   const[pass,setPass] = useState("")
   const [userErr,setUserErr] = useState(false)

    function data(e){
       e.preventDefault()
    }
    function users(e){
        let item = e.target.value.length;
        if(item < 3){
            setUserErr(true)
        }else{
            setUserErr(false)
        }
        setUser(item)
    }

    return(
        <div>
          
           
        </div>
    )
}

export default Form;