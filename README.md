# ¡¡Reciban una bienvenida a la línea de Backend de los #codechallenges de #WWC 2020!!

## Este es el reto #3, ¡el final!

    *** Lee detalladamante toda la información de este README ***

- **Nombre:** ¡LA PARTY ESTÁ A PUNTO DE ESTALLAR!
- **Dificultad:** intermedia-difícil
- **Habilidades:** implementación de validadores de data para peticiones **POST**; implementación de captura de errores por medio de middleware; implementación de "filtros y búsquedas" a través de parámetros query; ejercicios de lógica con condicionales y ordenamiento de listas.
- **Descripción:** la fiesta sigue y está que arde. Hay mucha más gente de la esperada y todos están bailando como si no hubiesen salido por muchos meses -\_-. Ya casi son las 3am y los DJs tienen preparado un remate especial. Sin embargo, se corren rumores de que la policía está rondando la zona y tendremos que preparar una jugada maestra para que no nos dañan nuestra fiesta.

Este reto 3 contiene el mismo boilerplate del reto 2 con un par de breves comentarios. Si llegaste hasta aquí, puedes usar lo que desarrollaste en el reto 2 para trabajar en el reto 3 porque
todo seguirá igual.

\***\*\*Importante\*\*\***:
Deberás instalar **MongoDB** en tu PC, hay muchos videos que enseñan a hacerlo según cada **SO**, es realmente easy. (Listo en Reto 2).

## Instrucciones

- Descarga este repositorio y haz `cd oop-backend` o `cd func-backend` según el tipo de backend que desees.
- Ejecuta `npm install` y luego `npm run dev` para tener tu servidor corriendo.
- Encontrarás un _boilerplate_ con una arquitectura **"MVC"** (aunque sin la V :P), separada en 4 capas principales (**controllers**, **services**, **models**, **repositories**) La idea es que trabajes en él para que se te haga más fácil completar el reto, pero puedes borrarlo y empezar desde cero. Lo importante es que cumplas las siguientes condiciones:

- [1] Por medio de el paquete de npm **_Mongoose_** crearás la conexión a **MongoDB** hacia una DB de nombre **_party_** y un _modelo_ con la estructura para guardar Asistentes (User) más o menos con este _schema_: (Listo en Reto 2)
  ```
  name: { type: String, required: true },
  birthday: { type: String, required: true },
  age: { type: Number, required: true },
  temperature: { type: Number, required: true },
  clothingColor: { type: String, required: true },
  isPartyng: { type: Boolean, required: true },
  role: { type: String, required: true },
  ```
- [2] Crearás un **_endpoint_** que apuntará a `'/users'` con dos métodos: **GET** Y **POST**. (Listos desde Reto 1).

  - [2.1] El método **POST** creará (usando las funciones de los repositories) un Asistente (**User**) nuevo en un la DB (Listo en Reto 2).

    - Cada asistente se guardará con un `id` que será generado automáticamente por MongoDB, por esto no hay que preocuparnos por ahora. (Listo en Reto 2).
    - En el **_User service_** vas a verificar lo siguiente:
      - **_age_** será siempre extraída de **_birthay_** desde el _service_. La edad del Asistente debe ser mayor o igual que **18**, de lo contrario retornarás unmensaje diciendo que paila, no puede entrar y un **status 400** (no se guarda en DB).
      - **_clothingColor_** deberá tener alguno de estos valores **["green", "blue", "red", "black", "white"]**, de lo contrario le pondrás un _"white"_ por defecto.
      - **_role_** si el asistente es _"dj"_, tendrá que llevar un _"clothingColor"_ "white", si no lo tiene, tú se la pones. Si el asistente es _"bartender"_, su "_clothingColor_" será "red".
    - El método **POST** retornará el nuevo asistente creado con su respectiva información y un **status 201**. (Listo en Reto 2)

  - [2.2] El método **GET** retornará la lista de asistentes con la información de cada uno de los Asistentes y puede recibir alguno de estos parámetros (_query params_):
    - Si no se manda ningún parámetro, se devolverá la lista con todos los Asistentes que están **adentro** (_isParting: true_). (Listo en Reto 2)
    - Si se manda el parámetro "_all_", se devolverá la lista con todos los Asistentes registrados en la fiesta.
    - Si se manda el parámetro "_dj-event_" se devolverá la lista de los Asistentes que están **adentro** ordenada así:
      - Primero los "_dj_" (mínimo 2), luego los "_partycipant_" (mínimo 5) y finalmente los "_bartender_" (mínimo 1). A su vez, los "_partycipant_" vendrán ordenados por su color, así: **["red", "green", "blue", "black", "white"]**. Es decir, primero los _"red"_, segundos los _"green"_, etc.
    - Si se manda el parámetro "_police_", se devolverá la lista de todos los Asistentes que están **adentro** y **afuera**, y se les añadirá un campo **_"mask"_** (tapabocas ;) con un valor **true**.
    - Si la lista está vacía, retornarás un mensaje diciendo que no hay nadie partyseando aún. (Listo en Reto 1).
    - Para todas las respuestas exitosas se retornará un **status 200**.

- [3] Crearás un validador de schema para la entidad **_User_**, que se ejecutará antes de llamar al **_controller_**, y verificará lo siguiente:

  - **_name_** será siempre un _string_ compuesto de dos palabras separadas por un espacio y sin espacios al principio ni al final del _string_ (**trim()**).
  - **_birthay_** llegará siempre como un string de tipo **"YYYY-MM--DD"**. **YYYY** no puede ser menor de 1800, **MM¨** debe estar entre 01 y 12 y **DD** entre 01 y 31.
  - **_temperature_** será un _number_ entre **36.5 - 37.5**.
  - **_clothingColor_** será siempre un _string_ con el nombre del color de la prenda principal que tiene el Asistente sin espacios al principio ni al final.
  - **_isPartyng_** será siempre un _boolean_, puede ser (**_true_**) o (**_false_**).
  - **_role_** será siempre un _string_ pero sólo puede tener las siguientes opciones: **["dj", "partycipant", "bartender"]**.
  - Todos los campos son requeridos, si alguno no es mandado o no cumple con los requisitos, se retornará un **status 400** el mensaje de error correspondiente.
  - Puedes usar **@joi** o **express-validator** o cualquier librería de tu gusto. O si te sientes con tiempo y ganas, realiza las validaciones por tu cuenta. ^\_^

- [4] Crearás un **_enpoint_** que apuntará a `'/users/:id'`, con un método **PATCH** y cambiará la propiedad **_isPartyng_** cada vez que alguien entre o salga de la party.
- [5] Crearás un **middleware** para manejar los errores de la aplicación, de modo que puedas mandar tus errores customizados y/o que la aplicación no se cuelgue cuando haya alguna "_unhandled promise_".

- [6] Crearás un **middleware** que se encargue de mandar un mensaje de _página no encontrada_ para cualquier endpoint que no sea `/users` y retorne un **status 404**. (Listo en Reto 1)
  - Los mensajes que devuelve la aplicación quedan a tu creatividad.

\*\***\*_IMPORTANTE_\*\*\***
Dentro de la carpeta **_/src/\_data_** hay un archivo de nombre **seeder.js**. Funciona independiente de la APP (pero tienes que proporcinar una **URI** adecuada de **MongoDB** que apunte a tu máquina local (**_localhost_**)) (Listo en Reto 2). Con este podrás importar varios **Asistentes** a la DB o borrarlos todos, así:

```
  // Estando ubicado en la terminal dentro del backend que escogiste ->
  $ node src/_data/seeder.js -i // Pasas el argumento '-i' (yarg) para importar.
  $ node src/_data/seeder.js -d // O el argumento '-d' (yarg) para borrar todos.
  // Sin comillas el argumento.
```

Te recomiendo que añadas unos cuandos **Asistentes** más para que puedas hacer todas las pruebas del método **GET**.

### Notas:

Encontrarás dos carpetas:

- _oop-backend_: Trabaja aquí si prefieres un backend "orientado a objetos" que opere a través de clases.
- _func-backend_: Trabaja aquí si prefieres un backend que apunte un modo de operación funcional.
- Puedes resolver el reto en cualquiera de ambos. Sólo se revisará una de las carpetas. Hacer el reto en ambos no te dará más puntaje, pero sí más experiencia.
- Esto lo hacemos para que conozcas dos paradigmas diferentes de trabajo que son posibles gracias a la "flexibilidad" de JavaScript.

### Disclaimer

Si bien a lo largo de los ejercicios hemos tratado de hacer las cosas "bien", no des por hecho que esta "arquitectura" o estas soluciones son las más apropiadas
para aplicar a tus demás proyectos. Cada proyecto tiene requerimientos diferentes y específicos y es estrictamente necesario tenerlos en cuenta antes de empezar a desarrollarlo. Aquí estamos practicando conceptos por separado y resolviendo algunos retos, por lo que nos enfocaremos más en cumplir las reglas y objetivos de una manera práctica y ágil (principalmente por el tiempo), así que podríamos incurrir en algunas "malas prácticas". Sin embargo, siempre es una ganancia tratar de hacer las cosas lo mejor posible y aprender cada día más nuevas cosas y especialmente sobre nuestros errores e ignorancia.

## ¡¡ESPERO QUE HAYAN DISFRUTADO LOS RETOS, NOS VEMOS EN UN PRÓXIMO #CODE_CHALLENGE!!

_Me pueden buscar en redes como **@mrtrukiny**, con gusto les brindaré mi ayuda o nos tomamos una cerveza o vamos a una fiesta UNDERGROUND de la vida real. ¡¡Saludos!! ;)_

# ¡¡DIVIÉRTANSE!!
