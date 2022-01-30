import './App.css';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
import Homepage from './components/home';
import { NotificationUIContextUIProvider } from "./components/notificationContext";
import Custom from './components/custom';

function App() {
  return (
    <div className="App">
      <NotificationUIContextUIProvider>
        <div>
          <ReactNotifications />
          <Custom />
          <Homepage />
        </div>
      </NotificationUIContextUIProvider>
    </div>
  );
}

export default App;
