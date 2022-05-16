import React, {useState, useEffect} from 'react'
import NavBar from "./NavBar.js"
import MachineCard from './MachineCard.js'

function MachineList() {

    const [ machinesData, setMachinesData ] = useState([])
    console.log(machinesData)
    
    // GET method
    useEffect(() => {
      fetch('/machines')
      .then(r => r.json())
      .then(indexedMachineData => {
        setMachinesData(indexedMachineData)
      })
    }, [])

    // function deleteMachine () {
    //     fetch(`/machine/${machinesData.id}`, {method: "DELETE"})
    //     .then(r => r.json())
    //     .then(console.log(machinesData))
    // }

  return (
    <div>
        <header>
            <h1>
                Machines List
            </h1>
        </header>
        <div>
            <NavBar/>
        </div>
        <div className='machines'>
            {
            machinesData.map((mappedMachine) => {
                return ( <MachineCard key={mappedMachine.id} machinesData={machinesData} mappedMachine={mappedMachine}/>)
            })
            }
        </div>
    </div>
  )
}

export default MachineList