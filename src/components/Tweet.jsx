import ProfileImage from "./ProfileImage";
import Timestamps from "./Timestamps";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">

      <ProfileImage image={tweet.user.image} />
      

      <div className="body">
        <div className="top">
         
        <User user={tweet.user}/>

        <Timestamps timestamp={tweet.timestamp}/>
       
        </div>

       <Message message={tweet.message}/>

      <Actions actions={tweet.actions}/>
        
      </div>


      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
