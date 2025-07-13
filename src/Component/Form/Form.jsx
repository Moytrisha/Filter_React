import React, { useState } from "react";

function Form (){
    const [list,setList] = useState([])
    const [input,setInput]= useState("")
    const [isedit,setIsedit] = useState([])
    const [select,setSelect] = useState("")
    const [editValue, setEditValue]=useState("");
    function Add (e){
        setList([...list,input])
        setIsedit([...isedit,false])
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

    function edit(index,val) {
        let updatedEdit= []
        for(let i =0;i<isedit.length;i++) {
            if(i===index) {
                updatedEdit.push(val)
            }
            else{
                updatedEdit.push(isedit[i])
            }
        }
        if(val===true)
        {
            setEditValue(list[index])
        }
        setIsedit(updatedEdit);
    }


    function editItem(index)
    {
        let updatedEdit= []
        for(let i =0;i<isedit.length;i++) {
            if(i===index) {
                updatedEdit.push(editValue)
            }
            else{
                updatedEdit.push(list[i])
            }
        }
        setList(updatedEdit);
        edit(index,false)
    }
    // function Dropdown() {
    //     for (let i=0;i<list[i].length;i++) {

    //     }
    // }
    return (
        <div className="to-do">
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}/><button onClick={()=>Add()}>Add</button>
            <input type="text" onChange={(e)=>setSelect(e.target.value)}></input> 
            {list.map((item,i)=>item.includes(select) && 
            <div>{isedit[i]!=true ?
                <span>
                    <span>{item}</span>
                    <button onClick={()=>del(i)}>Delete</button>
                    <button onClick={()=>edit(i,true)}>Edit</button>
                </span>
                :
                <span>
                    <input value={editValue} onChange={(e)=>{setEditValue(e.target.value)}}></input>
                    <button onClick={()=>editItem(i)}>Submit</button>
                </span>}
            </div>)}
        </div>
    )
}

export default Form