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
		- TypeScript

