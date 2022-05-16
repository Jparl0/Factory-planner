import React, {useState} from 'react'
import NavBar from "./NavBar.js"

function CreatePage() {

  const [machineToCreateData, postMachineToCreateData] = useState(
    {
        name: "",
        voltage: 0,
        input: 0,
        output: 0
    }
)

console.log(machineToCreateData)

function handlePostMachineDataOnChange (e) {

  postMachineToCreateData({ ...machineToCreateData, [e.target.name]: e.target.value})

}

function handlePostMachineIntegerDataOnChange (e) {

  postMachineToCreateData({ ...machineToCreateData, [e.target.name]: parseInt(e.target.value)})

}


   function machinePost () {
      fetch(`/machines/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( machineToCreateData )
      })
      .then(r => r.json())
      .then(patchedMachine => console.log(patchedMachine))
      }

  return (

    <div>
      <header>
        <h1>
          CreatePage
        </h1>
      </header>
      <div>
        <NavBar/>
      </div>
      <div>
        <form onSubmit={machinePost}>
          <select onChange={handlePostMachineDataOnChange} name="name" id="machineName">
            <option value="Miner">Miner</option>
            <option value="Assembler">Assembler</option>
            <option value="Constructor">Constructor</option>
          </select>
          <label >Voltage</label>
          <input onChange={handlePostMachineIntegerDataOnChange} type="number" id="voltage" name="voltage"></input>
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
      
      
      
    </div>
  
  
  
  
  )

}

export default CreatePage