import React, { useState } from "react";

function Form (){
    const [list,setList] = useState([])
    const [input,setInput]= useState("")
    const [isedit,setIsedit] = useState(false)
    const [select,setSelect] = useState("")
    function Add (e){
        setList([...list,input])
        
    }

    function del(index) {
        let updatedList= []
        for(let i=0;i<list.length;i++){
            if(i!=index) {
                updatedList.push(list[i])
            }
        }
        setList(updatedList)
    }

    function edit(index) {
        let finallist= []
        for(let i =0;i<list.length;i++) {
            if(i===index) {
                setIsedit(true)
            }
        }
    }

    // function Dropdown() {
    //     for (let i=0;i<list[i].length;i++) {

    //     }
    // }
    return (
        <div className="to-do">
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}/><button onClick={()=>Add()}>Add</button>
            <input type="text" onChange={(e)=>setSelect(e.target.value)}></input> 
            {/* <button onClick={Delete()}>Delete</button> */}
            {/* {list.map((item,index)=><div>{item}<button onClick={()=>{del(index)}}>Delete</button><button onClick={()=>{edit(index)}}>Edit</button></div>)} */}
            {list.map((item,i)=>{item.includes(select) && <div>{item}</div>})}
            {isedit===true && <input></input>} 
            {list[1]?.includes(select)}
        </div>
    )
}

export default Form