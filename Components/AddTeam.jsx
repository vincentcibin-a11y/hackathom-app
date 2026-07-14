import React, { useState } from 'react'
import axios from 'axios'

const AddTeam = () => {
    const[team,setTeam]=useState({
        teamId:"",
        teamName:"",
        leaderName:"",
        leaderEmail:"",
        leaderPhone:"",
        collegeName:"",
        numberOfMembers:"",
        projectTitle:"",
        problemTrack:"",
        technologyStack:"",
        mentorName:"",
        registrationDate:"",
        tableNumber:""

    });
    const inputHandler=(e)=>{
        setTeam({...team,[e.target.name]:e.target.value});
    }
    const readValues=()=>{
         axios.post("http://localhost:3000/addTeam",team).then((res)=>
        {
            alert("Added Successfully");
        }).catch(()=>{
            alert("Error");
        })
    }
  return (
    <>
      <div>AddTeam</div>
      <input className="form-control mb-2" name="teamId" placeholder="Team ID" onChange={inputHandler}/>
      <input className="form-control mb-2" name="teamName" placeholder="Team Name" onChange={inputHandler}/>
      <input className="form-control mb-2" name="leaderName" placeholder="Leader Name" onChange={inputHandler}/>
      <input className="form-control mb-2" name="leaderEmail" placeholder="Leader Email" onChange={inputHandler}/>
      <input className="form-control mb-2" name="leaderPhone" placeholder="Leader Phone" onChange={inputHandler}/>
      <input className="form-control mb-2" name="collegeName" placeholder="College Name" onChange={inputHandler}/>
      <input className="form-control mb-2" name="numberOfMembers" placeholder="Members" onChange={inputHandler}/>
      <input className="form-control mb-2" name="projectTitle" placeholder="Project Title" onChange={inputHandler}/>
      <input className="form-control mb-2" name="problemTrack" placeholder="Problem Track" onChange={inputHandler}/>
      <input className="form-control mb-2" name="technologyStack" placeholder="Technology Stack" onChange={inputHandler}/>
      <input className="form-control mb-2" name="mentorName" placeholder="Mentor Name" onChange={inputHandler}/>
      <input className="form-control mb-2" name="registrationDate" type="date" onChange={inputHandler}/>
      <input className="form-control mb-2" name="tableNumber" placeholder="Table Number" onChange={inputHandler}/>
      <button className="btn btn-primary" onClick={readValues}>Add Team</button>
    </>
  )
}

export default AddTeam