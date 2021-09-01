

function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    const count = 0;

    return (
        <div>
         <h1>Hello</h1>
         {unreadMessages.length > 0 &&
         <h2>
             You have {unreadMessages.length} unread messages.
         </h2>
         } 
         {count && <h1>Messages: {count}</h1>}  
        </div>
    )
}

export default MailBox
