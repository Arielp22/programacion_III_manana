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
export default App;

*/



/*
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
export default App;
*/



//UseRef
/*
import CirculoColorido from './UseRef/CirculoColorido';
import FocoAutomatico from './UseRef/FocoAutomatico';
import MoverCaja from './UseRef/MoverCaja';
import ReproductorSonido from './UseRef/ReproductorSonido';
import ScrollDemo from './UseRef/ScrollDemo';

function App() {

   return (  
    <>
      <FocoAutomatico/>
      <br/>
      <CirculoColorido/>
      <br/>
      <br/>
      <ScrollDemo/>
      <br/>
      <ReproductorSonido/>
      <br/>
      <MoverCaja/>
    </>
  );
}
export default App;

*/


//UseMemo
/*
import ContadorLetras from "./UseMemo/ContadorLetras"
import ExpensiveCalc from "./UseMemo/ExpensiveCalc"
import FiltroLista from "./UseMemo/FiltroLista"
import PrimosMemo from "./UseMemo/PrimosMemo"
import TablaOrdenada from "./UseMemo/TablaOrdenada"

function App() {

   return (  
    <>
      <ExpensiveCalc/>
      <br/>
      <FiltroLista/>
      <br/>
      <TablaOrdenada/>
      <br/>
      <PrimosMemo/>
      <br/>
      <ContadorLetras/>
      <br/>      
    </>
  );
}
export default App;
*/

//Use CallBack
/*
import BotonMemo from "./UseCallback/BotonMemoProps";
import Contador from "./UseCallback/Contador"
import ReRender from "./UseCallback/ReRender"
import Saludo from "./UseCallback/Saludo";

function App() {

   return (  
    <>
      <Contador/>
      <br/>
      <ReRender/>
      <br/>
      <Saludo/>
      <br/>
      <BotonMemo/>
      <br/>
      
    </>
  );
}
export default App;
*/


/*
import Lista from './UseCallback/Lista';

export default function App() {
  const elementos = ["uno", "dos", "tres", "cuatro"];

  return (
    <>
      <h2>Ejemplo de Lista</h2>
      <Lista items={elementos} />
    </>
  );
}

/////////////////////////////////////////////////////


import { memo } from 'react';

interface BotonMemoProps {
  onClick: () => void;
}

function Boton({ onClick }: BotonMemoProps) {
  console.log("Render Botón");
  return <button onClick={onClick}>Botón memoizado</button>;
}

const BotonMemo = memo(Boton);

export default BotonMemo;
*/


//UseReducer

import Carrito from "./UseReducer/Carrito";
import ContadorReducer from "./UseReducer/ContadorReducer";
import FormSteps from "./UseReducer/FormSteps";
import FormularioReducer from "./UseReducer/FormularioReducer";
import ListaReducer from "./UseReducer/ListaReducer";

function App() {

   return (  
    <>
      <ContadorReducer/>
      <br/>
      <FormularioReducer/>
      <br/> 
      <ListaReducer/>
      <br/>   
      <Carrito/>
      <br/>
      <FormSteps/>
      <br/>       
    </>
  );
}

export default App;














