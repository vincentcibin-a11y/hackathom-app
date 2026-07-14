import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewTeam = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:3000/viewTeam').then((res) => {
            setData(res.data);
        });
    }, []);

    return (
    <div className="">
        <table>
            <thead>
            <tr className="thead">
                <td className="tr">
                    <th>Team ID</th>
                        <th>Team Name</th>
                        <th>Leader</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>College</th>
                        <th>Members</th>
                        <th>Project</th>
                        <th>Track</th>
                        <th>Technology</th>
                        <th>Mentor</th>
                        <th>Date</th>
                        <th>Table</th>
                </td>
            </tr>
            </thead>
            <tbody className="">
                {data.map((value,index)=>(
                    <tr key={index}>
                        <td>{value.teamId}</td>
                        <td>{value.teamName}</td>
                        <td>{value.leaderName}</td>
                        <td>{value.leaderEmail}</td>
                        <td>{value.leaderPhone}</td>
                        <td>{value.collegeName}</td>
                        <td>{value.numberOfMembers}</td>
                        <td>{value.projectTitle}</td>
                        <td>{value.problemTrack}</td>
                        <td>{value.technologyStack}</td>
                        <td>{value.mentorName}</td>
                        <td>{value.registrationDate}</td>
                        <td>{value.tableNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default ViewTeam