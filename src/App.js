import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LogInForm from './components/LoginForm';

const App = () => {
  if (!localStorage.getItem('username')) return <LogInForm />

  return (
    <ChatEngine
      height='100vh'
      projectID='17342a04-c657-4c57-8e9d-63dd0b15a2a9'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')} //password
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
