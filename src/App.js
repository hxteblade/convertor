import React , {useState} from "react";
import "../src/App.css";
import BurgerBtn from "./components/UI/burger/BurgerBtn";
import Menu from "./components/UI/menu/Menu"
import { ActiveContext } from "./components/context";
import AppRouter from "./components/UI/AppRouter";


function App() {
  const [active, setActive] = useState(false);
  const items = [
    {href: "/", value: "CONVENTOR"},
    {href: "/about_me", value: "CONTACTS"}
  ]
  return (
    <ActiveContext.Provider
      value={{
        active,
        setActive
      }}
    >
      <div className="App">
        <div className="App_container">
        <div className="logo-container">
          <div className="logo"></div>
          <h1>convertor</h1>
        </div>
          <main>
          <div className="App_content">
              <BurgerBtn/>
              <Menu
                header={"menu"}
                items={items}
              />
              <AppRouter/>
          </div>
          </main>
          <footer></footer>
        </div>
      </div>
    </ActiveContext.Provider>
  );
}

export default App;
