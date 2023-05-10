import express, { NextFunction, Request, Response } from "express"
import meetingLogic from "../5-Logic/meetingLogic"
import MeetingModel from "../4-Models/MeetingModel"


const router= express.Router()

router.get("/dev_groups", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const devGroups = await meetingLogic.getAllDevGroups()
        response.json(devGroups)
    }catch(err:any){
        next(err)
    }
})

router.get("/meetings_by_devGroupCode/:DevGroupCode([0-9]+)", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const devGroupCode = +request.params.DevGroupCode
        const meetings = await meetingLogic.getAllMeetingsOfOneDevGroupByCode(devGroupCode)
        response.json(meetings)
    }catch(err:any){
        next(err)
    }
})

router.post("/add_meeting", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const newMeeting = new MeetingModel(request.body)
        const addedMeeting = await meetingLogic.addMeeting(newMeeting)
        response.sendStatus(201)
    }catch(err:any){
        next(err)
    }
})


export default router