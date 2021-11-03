import ProfilePage from "./Pages/Profile/ProfilePage";
import {mockUsers} from "./mockData"

function App() {
  return (
    <ProfilePage users={mockUsers}/>
  );
}

export default App;