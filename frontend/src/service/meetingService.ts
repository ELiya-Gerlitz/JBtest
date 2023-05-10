import axios from "axios"
import DevGroupsModel from "../Models/DevGroupModel"
import appConfig from "../Utils/AppConfig"
import MeetingModel from "../Models/MeetingModel"

async function getAllDevGroups():Promise<DevGroupsModel[]>{

  const response = await axios.get<DevGroupsModel[]>(appConfig.getAllDevGrs)
  const allDevGroups = response.data
  return allDevGroups

}

async function addNewMeeting(meeting :MeetingModel):Promise<void>{
  await axios.post<MeetingModel>(appConfig.addNewMeeting, meeting)

}


async function getAllMeetingsOfOneDevGroupByCode(devGroupCode : number):Promise<MeetingModel[]>{

      const response = await axios.get<MeetingModel[]>(appConfig.getAllMeeetings+ devGroupCode)
      const groups = response.data
      return groups
      
}






export default {
    getAllDevGroups,
    addNewMeeting,
    getAllMeetingsOfOneDevGroupByCode
    
}