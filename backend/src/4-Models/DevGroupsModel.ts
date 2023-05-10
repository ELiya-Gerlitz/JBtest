class DevGroupsModel{
    public devGroupCode : number
    public devGroupName : string


    public constructor(devGr : DevGroupsModel){
        this.devGroupCode = devGr.devGroupCode
        this.devGroupName = devGr.devGroupName
    }
}

export default DevGroupsModel