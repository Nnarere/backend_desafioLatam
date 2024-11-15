Prueba - Programación avanzada en JavaScript

En esta prueba final, evaluaremos tu comprensión y habilidades en los conceptos avanzados
de JavaScript cubiertos durante el módulo.
Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de tener
el máximo de puntaje y enfocar bien los esfuerzos.


Descripción
"TechFlow", una startup de tecnología, está desarrollando "ProjectPulse", una plataforma de
gestión de proyectos para equipos de desarrollo de software.

Tu tarea es implementar funcionalidades clave en JavaScript para esta plataforma,
incluyendo:
● Manejo de datos de proyectos y tareas
● Análisis y filtrado de tareas
● Simulación de operaciones asíncronas
● Sistema de notificaciones en tiempo real

Requerimientos
1. Gestión de Proyectos y Tareas (3 puntos)
● Crea una estructura de datos para representar proyectos y tareas.
○ Cada proyecto debe tener un ID, nombre, fecha de inicio, y un array de
tareas.
○ Cada tarea debe tener un ID, descripción, estado (pendiente, en
progreso, completada) y fecha límite.
● Implementa una función que permita añadir nuevas tareas a un proyecto.
● Desarrolla una función que utilice métodos de array (map, filter, reduce) para
generar un resumen del proyecto mostrando el número de tareas en cada
estado.
● Crea una función que ordene las tareas de un proyecto por fecha límite
utilizando el método sort de JavaScript.

2. Análisis Avanzado de Tareas (2 puntos)
● Crea una función de orden superior filtrarTareasProyecto que tome una
función de filtrado como argumento y la aplique a la lista de tareas de un
proyecto.
● Implementa una función calcularTiempoRestante que utilice el método
reduce para calcular el número total de días que faltan para completar todas
las tareas pendientes de un proyecto.
● Desarrolla una función obtenerTareasCriticas que identifique y retorne las
tareas que están a menos de 3 días de su fecha límite y aún no están
completadas.

3. Sincronización y Actualizaciones en Tiempo Real (3 puntos)
● Desarrolla una función cargarDetallesProyecto que simule una llamada
asíncrona a una API para cargar los detalles de un proyecto.
Utiliza Promises o async/await.
● Crea una función actualizarEstadoTarea que simule la actualización del
estado de una tarea en el servidor y maneje tanto el caso de éxito como el de
error.
● Implementa un sistema simple de notificacionesTareas que permita a
diferentes partes del código "escuchar" cuando se completa una tarea.