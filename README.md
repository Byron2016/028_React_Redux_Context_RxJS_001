<div>
	<div>
		<img src=https://raw.githubusercontent.com/Byron2016/00_forImages/main/images/Logo_01_00.png align=left alt=MyLogo width=200>
	</div>
	&nbsp;
	<div>
		<h1>028_React_Redux_Context_RxJS_001</h1>
	</div>
</div>

&nbsp;

# Table of contents

---

- [Table of contents](#table-of-contents)
- [Project Description](#project-description)
- [Technology stack](#technology-stack)
- [Technologies used](#technologies-used)
- [References](#references)
- [Brief explanation](#brief-explanation)
- [Steps](#steps)

[⏪(Back to top)](#table-of-contents)

# Project Description

**028_React_Redux_Context_RxJS_001** is a practice to understand concepts about **Redux, Context, RxJS** with Reactjs following Youtube Gentleman Programming's tutorial [Cúando y cómo usar Redux, Context o Rxjs? Con esto tu app no tendrá problemas de comunicación](https://www.youtube.com/watch?v=USm-uiVyTuQ)
and the other help that you can find into **Reference** section.

# Technology stack



[⏪(Back to top)](#table-of-contents)
&nbsp;

# Technologies used

---

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

[⏪(Back to top)](#table-of-contents)

# References

---

- Shields.io

  - [Shields.io](https://shields.io/)

  - [Github Ileriayo markdown-badges](https://github.com/Ileriayo/markdown-badges)

  - [Github Ileriayo markdown-badges WebSite](https://ileriayo.github.io/markdown-badges/)

- Redux
  - [¿Qué es Redux? - Redux en menos de 5 Minutos (Redux Toolkit)](https://www.youtube.com/watch?v=j-jzI3wkkVk)
  - 
- RxJS
  - [RxJS](https://rxjs.dev/guide/overview)

[⏪(Back to top)](#table-of-contents)

# Brief explanation

  - [Fatz: ¿Qué es Redux? - Redux en menos de 5 Minutos (Redux Toolkit)](https://www.youtube.com/watch?v=j-jzI3wkkVk)
  	- REDUX
  		- Son Bibliotecas de manejo de estado como	
  			- XState, MobX, Recoil.js, ZusTand, Rematch, Redux
  			- Una lista enorme buscando State management.
  			
  		- Conceptos
  			- Store
  				- Objeto de js INMUTABLE que almacena todo el estado.
  				- Estado centralizado
          
              ```js
                {"counter":0}
              ````

  			- Actions
    			- Objeto de js que contiene información y le dice a redux que operación se va a ejecutar sobre el Store.
          
              ```js
              const myAction = {
                type: 'counter/increment',
                payload: 20
              }
              ```

    			- type: nombre acción a ejecutar
  				- payload: Dato que queremos darle al Store para que lo tome y actualice el estado.
  						
  			  - Al ser objetos de js no se pueden ejecutar, por eso debemos utilizar una función llamada dispatch() que se encarga de realizar la ejecución.
  				- dispatch: órdenes escritas en código para el Store, pero no definen como ejecutar estar órdenes, por eso necesitamos otra pieza de código que si definen esta lógica y que permiten actualizar el estado.

  			- Reducers
  				- Son funciones que recibe dos parámetros, el estado actual y el action.

              ```js
              const initialState = { value: 0}

              function counterReducer(state= initialState, action){
                if(action.type === 'counter/increment'){
                  return {
                    ...state,
                    value: state.value + 1
                  }
                }
                return state
              }	
              ````

  			- REDUX DEV TOOLS 
  				- Extensión de navegador que permite conocer el estado en el momento en que se disparó el action.
  					
  			- REDUX TOOL KIT
  					- forma recomendada actualmente para usar redux. 


  - [Gentleman Programing: Cúando y cómo usar Redux, Context o Rxjs? Con esto tu app no tendrá problemas de comunicación](https://www.youtube.com/watch?v=USm-uiVyTuQ)
    - REDUX - CONTEXT - RxJS
  		- REDUX 
  			- Manejador de Estado: se basa en concepto: único lugar de la verdad (single source of truth) que contiene la información veráz y la más actualizada posible. Cada vez que necesitemos consultar información dentro de la aplicación no vamos a consultar al backEnd sino al State. 
  		
  		- CONTEXT
  			- Nos permite compartir información, y puede llegar al nivel de un Stage Manager, pero no es la idea. La idea principal de Context es compartir información dentro de la aplicación y evitar el prop drilling (pasar informaicón entre componentes en cascada), esto genera una gran dependencia, evita la reutilización de las cosas. 

  		- RxJS 
  			- Es una librería que se encarga de hacer el manejo de observables 
  			- Observables: canales de comunicación, es propio de js y otros lenguajes, y se basa en la programación reactiva ejemplo: tenemos un tubito hueco con agujeros y en cada agujero tenemos a una persona mirando por el mismo, vamos a pasar un objeto a través de ese tubo. Esto produce que cada persona notará cosas diferentes de este objeto pasando por el tubo (velocidad, color, forma, etc, etc) cada uno ve cosas diferentes pero la información es la misma, eso es la programación reactiva, las cosas reaccionan ante la información que le llega. 
  				- Pasándolo a lenguaje de programación:
  					- Canal de comunicación: es nuestro observable, es el tubito.
  					- A través de ese observable tenemos suscriptores: personas mirando, COMPONENTES POR EJEMPLO, 
  					- Información: Objeto que va pasando. user logueado, evento, true, false, boolean.
  					
  			- Es una librería mágica que nos da todas las HERRAMIENTAS para MANEJAR LOS OBSERVABLES. Un observable dentro del día a día es lo que llamamos UNICAST practicamente solamente emite datos, no vamos a tener un componente que emite y otro componente que recibe RxJS crea otros tipos de observables que son muy útiles y vamos a trabajar sobre los dos más importantes que son: subset y behaivor subset. Los dos tipos van a ser multi cast esto quiere decir que un componente puede tanto recibir como emitir informaicón a través de ese observable.
  			- Si los dos hacen exactamente lo mismo por que hay dos? La principal diferencia es que el subset si nosotros enviamos información por nuestro canal de información y yo llego tarde me lo pierdo, lo que si existirá es el siguiente que llegue, mientras que con el behaivor subset tiene un cache/buffer que guarda el último elemento enviado y puedo accederlo y acceder a lai nformación más actualizada la última.
  			 
  			- Patrón de diseño Observer.

[⏪(Back to top)](#table-of-contents)

# Steps

- Instalation
	- npm create vite@latest
		- 028_React_Redux_Context_RxJS_001
		- Reactjs
		- JavaScript
	- Paquetes del VSC
      - Auto Barrel (Mike Hanson)
      - VS Code ES7+ React/Redux/React-Native/JS snippets (dsznajder)
      - React Create Component (Javier Gutierrez)

- Estructure
  - When to use each one
    - **Redux**: All that you use at application level, what it is shared in all  application. We name it **entity** ex: shopping car.
    - **Context**: Share information between components that **belongs to the same  view** into the same page.
    - **RxJS**: Share information between componentes but for simple **events** ex: open modal, click a button, to communicate that something has happened.

- RxJS
	- Create two componentes 
	  - Using plugging "rfce"
	    - components/RxJS/Component1.jsx
	    - components/RxJS/Component2.jsx

	- Add componentes to App.jsx
		```js
		import Component1 from './components/RxJS/Component1'
		import Component2 from './components/RxJS/Component2'	
		function App() {
		  return (
		    <>
		      <div>
		        <Component1/>
		        <Component2/>
		      </div>
		    </>
		  )
		}
		````


    - npm install rxjs
    - Add subject-manager utilitie.
    - Add a new class "src/utilities/subject-manager.js" 
		```js
			import {Subject} from 'rxjs'

			export class SubjectManager {
			    subject$ = new Subject()

			    /*
			    mal
			    get getSubject(){
			        return this.subject;
			        // si lo hacemos de esta forma dejamos abierto para enviar y recibir información.
			        // rompiendo el principio de encapculación por que podemos hacer al llamarlo
			        // this.subject.next(true) //este .next es para enviar información.

			    }
			    */
		   
			    // bien
			    getSubject(){
			        return this.subject$.asObservable();
			        /*
			            entonces en donde invocamos si hacemos const unicast = this.subjectasObservable();
			            unicast. YA NO ME DA LA OPCIÓN DE NEXT
			        */
			    }

			    setSubject(value){
			        this.subject$.next(value);
			    }
			}

			//It is a good practice to add a "$" symbol to an any variable that is async.
		````

		- It is a good practice to add a "$" symbol to an any variable that is async.


  - Add sharing-information.service service.
    - Add a new file "src/services/sharing-information.service.js" 
		```js
			import { SubjectManager } from "../utilities/subject-manager";

			export const sharingInformationService = new SubjectManager();
		````

	- With this construccion outside of components always are going to access to the same information, same data.	

  - Modify Componente1 and Component2
    - Component1
		```js
		import {sharingInformationService} from "../../services/sharing-information.service"

		function Component1() {
		  const handleClick = () => {
		    sharingInformationService.setSubject("Hola")
		  }

		  return (
		    <div>
		      <button onClick={handleClick}>
		        Enviar información
		      </button>
		    </div>
		  )
		}

		export default Component1
		````

    - Component2
		```js
		import { useEffect } from "react"
		import {sharingInformationService} from "../../services/sharing-information.service"

		function Component2() {
		  const subscription$ = sharingInformationService.getSubject()

		  useEffect(() => {
		    subscription$.subscribe(data => {
		      console.log(data);
		    })
		  })
		  return (
		    <div>Component2</div>
		  )
		}

		export default Component2
		````
	- With that step you already share data between components.
	- It is important that check in main.jsx has not **React.StrictMode**
    	- **React.StrictMode** kill and upload again a component.

  - Configure like a **event**
	  - Modify Componente1 and Component2
	    - Component1
			```js
			....

			function Component1() {
			  const handleClick = () => {
			    sharingInformationService.setSubject(true)
			  }

			  ....
			}

			export default Component1
			````

	    - Component2
			```js
			import { useEffect, useState } from "react"
			....

			function Component2() {
			  const [count, setCount] = useState(0)
			  ....

			  useEffect(() => {
			    subscription$.subscribe(() => {
			      setCount(count + 1)
			    })
			  })
			  return (
			    <div>Component2 {count}</div>
			  )
			}

			export default Component2
			````

  - Add a new Button and control it with an "event**
	  - Modify Componente1 and Component2
	    - Component1
			```js
			....

			function Component1() {
			  const handleClick = () => {
			    sharingInformationService.setSubject(true)
			  }

			  const handleClickNO = () => {
			    sharingInformationService.setSubject(true)
			  }

			  ....

			  return (
			    <div>
			      <button onClick={handleClick}>
			        Enviar información
			      </button>
			      <button onClick={handleClickNO}>
			        NO Enviar información
			      </button>
			    </div>
			  )
			}

			export default Component1
			````
	    - Component2
			```js
			import { useEffect, useState } from "react"
			....

			function Component2() {
			  const [count, setCount] = useState(0)
			  ....

			  useEffect(() => {
			    subscription$.subscribe(data => {
			      if(!!data) setCount(count + 1)
			    })
			  })
			  return (
			    <div>Component2 {count}</div>
			  )
			}

			export default Component2
			````
	  - **Note:** doble ! (!!data) means
    	  - It is instead of the use a string for validate something inside an if.
    	  - It returns the boolean asociation of a value
    	  - '', 0, undefine, null -> false
    	  - any other thing -> true

- Context
	- Create two components at pages label
	  - Using plugging "rfce"
	    - pages/Gentleman/components/ComponentContex1.jsx
	    - pages/Gentleman/components/ComponentContex1.jsx

	- Create a page 
	  - Using plugging "rfce"
	    - pages/Gentleman.jsx

		```js
			import ComponentContext1 from "./components/ComponentContext1"
			import ComponentContext2 from "./components/ComponentContext2"

			function Gentleman() {
			  return (
			    <div>
			        <ComponentContext1/>
			        <ComponentContext2/>
			    </div>
			  )
			}

			export default Gentleman
		````
	- Create a Provider
	  - A **Context** needs a **Provider** that wrap all elements that are going to share information.
	  - Form number 1, this form is the simple way and is better does not use it.
		- Step 1: Define createContext
			```js
			import { createContext, useState } from "react"
			....

			function Gentleman() {
			  const [gentlemanContextValue, SetgentlemanContextValue] = useState('');

			  const context = createContext({
			    gentlemanContextValue: "",
			    SetgentlemanContextValue: () => {},
			  });

			  ....
			}

			export default Gentleman
			````
		- Step 2: Define createContext
    		- Create a context ouside function.
        		- Create context pages/Gentleman/context/gentlemen.context.js
				```js
					import { createContext } from "react";

					export const GentlemanContext = createContext();
				````
			- Import gentleman.context inside Gentleman page.
				```js
					import { useState, useContext } from "react"
					import ComponentContext1 from "./components/ComponentContext1"
					import ComponentContext2 from "./components/ComponentContext2"
					import { GentlemanContext } from "./context/gentleman.context";

					function Gentleman() {
					  const [gentlemanContextValue, SetGentlemanContextValue] = useState(''); // must be outside

					  const Gentleman_Context = useContext(GentlemanContext); // must be outside

					  return (
					    <div>
					      <Gentleman_Context.Provider value={{gentlemanContextValue, SetGentlemanContextValue}}>
					        <ComponentContext1/>
					        <ComponentContext2/>
					      </Gentleman_Context.Provider>
					    </div>
					  )
					}
				````

			- Move outside logic to do it more clean and create provider inside Gentleman.context file.
    			- Inside context folder.
        			- Update context pages/Gentleman/context/gentlemen.context.js, moving logic from "Gentleman.jsx" to this file.
            			- useState and Context.Provider.
						```js
							import { createContext,   useState } from "react";

							export const GentlemanContext = createContext();
							
							export const GentlemanProvider = ({ children }) => {
							    const [gentlemanContextValue, setGentlemanContextValue] = useState('');
							
							    return (
							        <GentlemanContext.Provider value={{gentlemanContextValue, 	setGentlemanContextValue}}>
							            { children}
							        </GentlemanContext.Provider>
							    )
							}
						````
    				- Create useGentlemanContext.
            			- useState and Context.Provider.
						```js
							import { useContext } from "react";
							import { GentlemanContext } from "./gentleman.context";

							export const useGentlemanContext = () => {
							    const context = useContext(GentlemanContext);
							    if(context === undefined){
							        throw new Error('GentlemanContext must be used within a GlentemanProvider')
							    }

							    return context;
							}
						````

	- Update Componentes and Gentleman.jsx
	  - ComponentsContext1
		```js
			import {  useGentlemanContext } from '../context/useGentlemanContext.context'

			function ComponentContext1() {
			  const {setGentlemanContextValue}  = useGentlemanContext()

			  const handleClick = () => {
			    setGentlemanContextValue('Hola desde componentContext1')
			  }

			  return (
			    <div><button onClick={handleClick}>Enviar información por un context</button></div>
			  )
			}

			export default ComponentContext1
		```

	  - ComponentsContext2
		```js
			import {  useGentlemanContext } from '../context/useGentlemanContext.context'

			function ComponentContext2() {
			  const {gentlemanContextValue}  = useGentlemanContext()
			  return (
			    <div>El valor enviado desde ComponenteContext1 es : {gentlemanContextValue} </div>
			  )
			}

			export default ComponentContext2
		```
	  - Gentleman.jsx
		```js
			import ComponentContext1 from "./components/ComponentContext1"
			import ComponentContext2 from "./components/ComponentContext2"
			import { GentlemanProvider } from "./context/gentleman.context";
			
			function Gentleman() {
			  return (
			    <div>
			      <GentlemanProvider>
			        <ComponentContext1/>
			        <ComponentContext2/>
			      </GentlemanProvider>
			    </div>
			  )
			}
			
			export default Gentleman
		```