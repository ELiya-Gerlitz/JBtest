import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import MeetingsList from "../../MeetingsArea/MeetingsList/MeetingsList";
import GetAllDevGroups from "../../MeetingsArea/GetAllDevGroups/GetAllDevGroups";
import AddMeeting from "../../MeetingsArea/AddMeeting/AddMeeting";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/meetings/" element={<MeetingsList/>}/>
                <Route path="/dev_groups/" element={<GetAllDevGroups/>}/>
                <Route path="/add_meeting/" element={<AddMeeting/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
