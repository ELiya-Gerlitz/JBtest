class AppConfig{

    public getAllDevGrs = "http://localhost:3001/api/dev_groups/"
    public getAllMeeetings = "http://localhost:3001/api/meetings_by_devGroupCode/"
    public addNewMeeting = "http://localhost:3001/api/add_meeting/"

}
const appConfig = new AppConfig()

export default appConfig