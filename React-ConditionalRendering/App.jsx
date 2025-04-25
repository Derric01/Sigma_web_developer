import UserGreeting from "../UserGreeting";

function App() {
  return (
    <div>
      <UserGreeting isLoggedIn={true} username="Derric" />
    </div>
  );
}

export default App;
