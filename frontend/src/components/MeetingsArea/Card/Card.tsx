import MeetingModel from "../../../Models/MeetingModel";
import "./Card.css";


interface Meeting{
    meeting : MeetingModel
}

function Card(props : Meeting): JSX.Element {
    return (
        <div className="Card">


<p><strong>meetingCode : </strong>{props.meeting.meetingCode}</p>
  <p><strong>devGroupCode: </strong>{props.meeting.devGroupCode}</p>
  <p><strong>startingDateAndTime : </strong>{props.meeting.startingDateAndTime}</p>
  <p><strong>endingDateAndTime : </strong>{props.meeting.endingDateAndTime}</p>
  <p><strong>description : </strong>{props.meeting.description}</p>
  <p><strong>room : </strong>{props.meeting.room}</p>
			
        </div>
    );
}

export default Card;
