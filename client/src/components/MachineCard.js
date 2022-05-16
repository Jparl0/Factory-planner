import React from 'react'

function MachineCard({mappedMachine, machinesData}) {

    let machineSrc = "";
    
    switch(mappedMachine.name) {
        case "Miner":
            machineSrc = "MinerMk1_256.png"
        break;
        case "Assembler":
            machineSrc = "AssemblerMk1_256.png"
        break;
        case "Constructor":
            machineSrc = "ConstructorMk1_256.png"
        break;
        default:
            machineSrc = "MinerMk1_256.png"
    }
    let newVoltage = 0
    function increaseMachineVoltage (e) {
        newVoltage = ++mappedMachine.voltage
        fetch(`/machines/${e.target.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({voltage: {newVoltage}})})
        .then(r => r.json())
        .then(console.log(machinesData))
    }

    function deleteMachine (e) {
        fetch(`/machines/${e.target.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()})
        .then(r => r.json())
        .then(console.log(machinesData))
    }

  return (
    <div className='machine-card'>
        
        <h2>{mappedMachine.name}</h2>
        <img 
            src={require(`./Images/MinerMk1_256.png`) }
            alt={mappedMachine.name}
            className='machine-image'
        />
        <p>Voltage: {mappedMachine.voltage}</p>
        <p>Input: {mappedMachine.input}</p>
        <p>Output: {mappedMachine.output}</p>
        <button id={mappedMachine.id} onClick={increaseMachineVoltage}>Increase Voltage</button>
        <button id={mappedMachine.id} onClick={deleteMachine}>Delete Machine</button>
    </div>
  )
}

export default MachineCard