const Students = ()=>{
   let list = ["aaa","bbb","ccc","ddd","eee","fff"]
   return (<>
        <h1 style={{color:"red"}}>Students  List</h1>
        {/* {list} */}
        {/* {list.join(",")} */}
        {/* {list[0]} */}

        {/* {list.map((val,index)=>{ return <h3 key={index}>{val}</h3>})} */}

         {/* {list.map((val,index)=><h3 key={index}>{val}</h3>)} */}

         {/* <ol>
           {list.map((item,i)=><li key={i}>{item}</li>)}
         </ol> */}

           <ol>
           {list.map((item,i)=><li key={i}>
            index = {i} and value = {item}</li>)}
         </ol>
    </>)
}
export default Students

// rafc