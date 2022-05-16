import React, {useState, useEffect} from 'react'

function FactoryTree() {

  const [ machinesData, setMachinesData ] = useState([])
  console.log(machinesData)
  const { oreData, setOreData} = useState([])
  
  // GET method
  useEffect(() => {
    fetch('/machines')
    .then(r => r.json())
    .then(indexedMachineData => {
      setMachinesData(indexedMachineData)
    })
  }, [])
  
  // PATCH method
  // function machinePatch () {
  // fetch(`/machines/${machineID}`, {
  //   method: "PATCH",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify()
  // })
  // .then(r => r.json())
  // .then(patchedMachine => console.log(patchedMachine))
  // }

  // function machineDelete () {
  //   fetch(`/machines/${machineID}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify()
  //   })
  //   .then(r => r.json())
  //   .then(patchedMachine => console.log(patchedMachine))
  //   }

  //   function machinePost () {
  //     fetch(`/machines/`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify()
  //     })
  //     .then(r => r.json())
  //     .then(patchedMachine => console.log(patchedMachine))
  //     }


  return (
    <div>


      FactoryTree
    
    
    </div>
  )
}

export default FactoryTree