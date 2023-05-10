import { useEffect, useState } from "react";
import MeetingModel from "../../../Models/MeetingModel";
import meetingService from "../../../service/meetingService";
import "./AddMeeting.css";
import { useForm } from "react-hook-form";
import DevGroupsModel from "../../../Models/DevGroupModel";

function AddMeeting(): JSX.Element {
let {handleSubmit, register} = useForm<MeetingModel>()
const [group, setGroup] = useState<DevGroupsModel[]>()

useEffect(()=>{

    meetingService.getAllDevGroups()
    .then((group)=>setGroup(group))
    .catch(err=>console.log(err))

},[])


    const send = (info : MeetingModel)=> {
        meetingService.addNewMeeting(info)
        .then(()=>{
            console.log("successfully added!")
        })
        .catch((err: any)=>console.log(err))

    }
    return (
        <div className="AddMeeting">
			I am Add Meeting!
            <form onSubmit={handleSubmit(send)}>
                <input type="date" placeholder="startingDateAndTime" {...register("startingDateAndTime")}/><br></br>
                <input type="date" placeholder="endingDateAndTime" {...register("endingDateAndTime")}/><br></br>
                <input type="text" placeholder="description" {...register("description")}/><br></br>
                <input type="text" placeholder="room" {...register("room")}/><br></br>
                
                <select defaultValue="" {...register("devGroupCode")}>
                    <option disabled value={""}>select a category name </option>
                    {group && group.map(g=> <option key={g.devGroupCode} value={g.devGroupCode}>{g.devGroupName}</option> )}
                </select><br></br>

                <button>add new meeting</button>

            </form>


        </div>
    );
}

export default AddMeeting
