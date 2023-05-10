import { useEffect, useState } from "react";
import meetingService from "../../../service/meetingService";
import "./MeetingsList.css";
import MeetingModel from "../../../Models/MeetingModel";
import Card from "../Card/Card";

function MeetingsList(): JSX.Element {
    const [meetings, setMeetings] = useState<MeetingModel[]>()

    useEffect(()=>{

        meetingService.getAllMeetingsOfOneDevGroupByCode(1)
        .then((meetings)=>{
           setMeetings(meetings) 
        })
        .catch(err=>console.log(err))
    })
   
    return (
        <div className="MeetingsList">
            {meetings && meetings.map(m=><p key={m.meetingCode}><Card meeting={m}/></p>)}
        </div>
    );
}

export default MeetingsList;
