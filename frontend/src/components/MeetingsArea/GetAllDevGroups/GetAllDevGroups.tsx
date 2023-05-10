import { useEffect, useState } from "react";
import DevGroupsModel from "../../../Models/DevGroupModel";
import meetingService from "../../../service/meetingService";
import "./GetAllDevGroups.css";
import MeetingModel from "../../../Models/MeetingModel";
import Card from "../Card/Card";

function GetAllDevGroups(): JSX.Element {
    const [devGroups, setDevGroups] = useState<DevGroupsModel[]>()
    const [meetings, setMeetings] = useState<MeetingModel[]>()


    useEffect(()=>{

        meetingService.getAllDevGroups()
        .then(devGroups => setDevGroups(devGroups))
        .catch(err => console.log(err))

    },[])
const handleChange = (e :any)=>{
 console.log(e.target.value)
 const group = e.target.value


 meetingService.getAllMeetingsOfOneDevGroupByCode(group)
 .then((meetings)=>{
    setMeetings(meetings) 
 })
 .catch(err=>console.log(err))

}
   
    return (
        <div className="GetAllDevGroups">
			<h3>Get Meetings By Dev Group Name!</h3>
            <select name="postSelect" defaultValue={""} onChange={handleChange} >
            <option disabled value={""}>select a category name </option>
                    {devGroups && devGroups.map(g=> <option key={g.devGroupCode} value={g.devGroupCode}>{g.devGroupName}</option> )}
             </select>




             <div className="MeetingsList">
            {meetings && meetings.map(m=><p key={m.meetingCode}><Card meeting={m}/></p>)}
        </div>
            
        </div>
    )
}

export default GetAllDevGroups;
