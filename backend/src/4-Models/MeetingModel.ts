class MeetingModel{

    public meetingCode :number
    public devGroupCode :number
    public startingDateAndTime :string
    public endingDateAndTime :string
    public description :string
    public room :string

    public constructor(meeting : MeetingModel){
        this.meetingCode = meeting.meetingCode
        this.devGroupCode = meeting.devGroupCode
        this.startingDateAndTime = meeting.startingDateAndTime
        this.endingDateAndTime = meeting.endingDateAndTime
        this.description = meeting.description
        this.room = meeting.room
}

}

export default MeetingModel