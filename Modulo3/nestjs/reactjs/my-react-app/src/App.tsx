// Uso mediante components

/*
import ButtonCounter from './components/ButtonCounter';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import HelloWorld from './components/HelloWorld';
import PromedioForm from './components/PromedioForm';
import ShowDate from './components/ShowDate';
import SimpleForm from './components/SimpleForm';
import SumaForm from './components/SumaForm';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import WelcomeUser from './components/WelcomeUser'; 

function App() {
  return (
    <>
      <HelloWorld />
      <WelcomeUser />
      <ButtonCounter />
      <TextInput />
      <ToggleMessage />
      < ShowDate/>
      < ColorBox/>
      < ConditionalText/>
      < EmojiList/>
      < SimpleForm/>
      < SumaForm/>
      < PromedioForm/>
    </>
  );
}

export default App;
*/

//Uso mediante props

/*import Greeting from './props/Greeting';
import UserCard from './props/UserCard';

function App() {
const userData = { name: "Carlos",lastName:"Paucar",
   age: 30, address:"Armenia", phone:"0646548" };

  return (
    <>
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <UserCard user={userData} />
    </>
  );
}
*/

/*import ParentButtonOne from "./props/ParentButtonOne";

function App() {
  return (
    <>
      <ParentButtonOne/>
    </>
  );
}
export default App;
*/

/*
import ParentIncrementButton from "./props/ParentIncrementButton";

function App() {
  return (
    <>
      <ParentIncrementButton/>
    </>
  );
}
export default App;
*/

/*
import ParentInputNotifier from "./props/ParentInputNotifier";

function App() {
  return (
    <>
      <ParentInputNotifier/>
    </>
  );
}
export default App;
*/

/*
import ParentUserList from "./props/ParentUserList";

function App() {
  return (
    <>
      <ParentUserList/>
    </>
  );
}
export default App;
*/

/*
import ParentLoginForm from "./props/ParentLoginForm";

function App() {
  return (
    <>
      <ParentLoginForm/>
    </>
  );
}
export default App;
*/

/*
import ParentAreaTrianguloForm from "./props/ParentAreaTrianguloForm";

function App() {
  return (
    <>
      <ParentAreaTrianguloForm/>
    </>
  );
}
export default App;
*/


/*
import AccessWithLimit from "./usestate/AccessWithLimit";
import CheckboxSummary from "./usestate/CheckboxSummary";
import DocumentTitleChanger from "./usestate/DocumentTitleChanger";
import HoverFont from "./usestate/HoverFont";
import LanguageSwitcher from "./usestate/LanguageSwitcher";
import MultiSwitch from "./usestate/MultiSwitch";
import PostLikes from "./usestate/PostLikes";
import LoginWithLimit from "./usestate/LoginWithLimit";
import AutoCounter from "./usestate/AutoCounter";
import DynamicColor from "./usestate/DynamicColor";
import ClickHistory from "./usestate/ClickHistory";

function App() {
  return (
    <>
      <HoverFont/>
      <br/>
      <AccessWithLimit/>
      <br/>
      <DocumentTitleChanger/>
      <br/>
      <PostLikes/>
      <br/>
      <CheckboxSummary/>
      <br/>
      <LanguageSwitcher/>
      <br/>
      <MultiSwitch/>
      <br/>
      <LoginWithLimit/>
      <br/>
      <AutoCounter/>
      <br/>
      <DynamicColor/>
      <br/>
      <ClickHistory/>
      
    </>
  );
}
export default App;

*/

/*
import Clock from "./useeffect/Clock";
import DynamicTitle from "./useeffect/DynamicTitle";
import FetchUser from "./useeffect/FetchUser";
import LogEffect from "./useeffect/LogEffect";
import PersistCounter from "./useeffect/PersistCounter";
import SafeFetch from "./useeffect/SafeFetch";
import ScrollLogger from "./useeffect/ScrollLogger";

function App() {
  return (
    <>
      <LogEffect/>
      <br/>
      <FetchUser/>
      <br/>
      <Clock/>
      <br/>
      <ScrollLogger/>
      <br/>
      <DynamicTitle/>
      <br/>
      <SafeFetch/>
      <br/>
      <PersistCounter/>
      <br/>
      
    </>
  );
}
export default App;

*/


/* USE CONTEXT

import React, { useState } from 'react';
import { LanguageContext } from './usecontext/LanguageContext';
import LanguageToggle from './usecontext/LanguageToggle';

export default function App() {
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <LanguageToggle />
    </LanguageContext.Provider>
  );
}

*/

import React, { useState } from 'react';
import { LoginContext } from './usecontext/LoginContext';
import LoginStatus from './usecontext/LoginStatus';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <LoginStatus />
    </LoginContext.Provider>
  );
}