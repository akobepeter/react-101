
// import MarkdownEditor from "./MarkdownEditor";
import LearnReact from "./LearnReact";
import HandleEvents from "./HandleEvents";
// import Greeting from "./Greeting";
 import LoginControl from "./LoginControl";
 import MailBox from "./MailBox";
 import Page from "./Page";
 import NumberList from "./NumberList";
import './App.css';
import Blog from "./Blog";



function App() {

   const messages = ['React', 'Re: React', 'Re:Re: React',"watkins"];
   console.log(messages);

   const numbers = [1,2,3,4,5]

   const posts = [
      {id:1, title: "Hello World",content: "Welcome to learning React!"},
      {id:2,title: "Installation", content: "Yes you can install React from npm!"}
   ];

  return (
    <div className="App">
      {/* <MarkdownEditor/> */}
      <LearnReact/>
      <HandleEvents/>
      <LoginControl/>
      <MailBox unreadMessages={messages}/>
      <Page/>
      <NumberList numbers={numbers}/>
      <Blog posts={posts}/>
      {/* <Greeting isLoggedIn = "false"/> */}
      
      
    </div>
  );
}


export default App;
