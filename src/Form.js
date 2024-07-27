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
            <form onSubmit={data}>
                <input type="text" placeholder="enter name" onChange={users}/> {userErr ? <span>not Valid</span>: null}
                 <br /><br />
                <input type="text" placeholder="enter password"/> <br /><br />

                <select>
                    <option>Rice</option>
                    <option>Water</option>
                    <option>Vegetables</option>
                </select>
                <input type="checkbox" /><span>Accept terms and conditions</span>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form;