import React, { useState } from "react";

function Form (){
    const [list,setList] = useState([])
    const [input,setInput]= useState("")
    const [isedit,setIsedit] = useState([])
    const [select,setSelect] = useState("")
    const [editValue, setEditValue]=useState("");
    const greentick = "https://media.istockphoto.com/id/691856234/vector/flat-round-check-mark-green-icon-button-tick-symbol-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hXL5nXQ2UJlh4yzs2LyZC4GtctQG0fs-mk30GPPbhbQ="
    const [flag,setFlag] = useState([])
    function Add (e){
        setList([...list,input])
        setIsedit([...isedit,false])
        setFlag([...flag,false])
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

    function tick (index) {
        let update =[]
        for(let i =0;i<flag.length;i++) {
            if(i===index) {
                update.push(!flag[i])
            }

            else {
                update.push(flag[i])
            }
        }

        setFlag(update)
    }
    
    return (
        <div className="to-do">
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}/><button onClick={()=>Add()}>Add</button>
            <input type="text" onChange={(e)=>setSelect(e.target.value)}></input> 
            {list.map((item,i)=>item?.includes(select) && 
            <div>{isedit[i]!=true ?
                <span>
                    <span onClick={()=>tick(i)}>{item}</span>
                    <button onClick={()=>del(i)}>Delete</button>
                    <button onClick={()=>edit(i,true)}>Edit</button>
                    {flag[i] && <img src={greentick} />}
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