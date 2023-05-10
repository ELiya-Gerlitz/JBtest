import { OkPacket } from "mysql";
import dal from "../2-Utils/dal";
import DevGroupsModel from "../4-Models/DevGroupsModel";
import MeetingModel from "../4-Models/MeetingModel";


async function getAllDevGroups():Promise<DevGroupsModel[]>{
    const sql = `
    SELECT * FROM devgroups
    `
    const devGroups = await dal.execute(sql)
    return devGroups
}


async function getAllMeetingsOfOneDevGroupByCode(devGroupCode : number):Promise<MeetingModel[]>{
    const sql = `
   SELECT * FROM meetings
   WHERE devGroupCode = ?
    `
    const values = devGroupCode
    const allCategories = await dal.execute(sql, [values])
    return allCategories
}

async function addMeeting(newMeeting : MeetingModel):Promise<MeetingModel>{
    const sql = `
   INSERT INTO meetings
   VALUES(
    NULL,
    ?,
    ?,
    ?,
    ?,
    ?
   )
    `
    const values = [newMeeting.devGroupCode, newMeeting.startingDateAndTime, newMeeting.endingDateAndTime, newMeeting.description, newMeeting.room]
    const info : OkPacket = await dal.execute(sql, values)
    newMeeting.meetingCode = info.insertId
    return newMeeting
}






export default {
    getAllDevGroups,
    getAllMeetingsOfOneDevGroupByCode,
    addMeeting
}