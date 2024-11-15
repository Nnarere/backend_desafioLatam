// Generador de IDs único

const usedIDs = new Set();

const generateUniqueID = () => {
    let id; //declaro la variable
    do { //calcula el id mientras el id
        id = Math.floor(Math.random() * 10000);
    } while (usedIDs.has(id)); // si While es True se ejecuta DO, 
    usedIDs.add(id); // si es falso, agrega un nuevo ID 
    return id;
};

// Clase para Tarea
class Task {
    constructor(description, status = 'pendiente', deadline) {
        this.id = generateUniqueID();
        this.description = description;
        this.status = status;
        this.deadline = new Date(deadline);
    }
}

// Clase para Proyecto
class Project {
    constructor(name, startDate) {
        this.id = generateUniqueID();
        this.name = name;
        this.startDate = new Date(startDate);
        this.tasks = [];
    }

    // Método para agregar una tarea al proyecto
    addTask(description, status, deadline) {
        const newTask = new Task(description, status, deadline);
        this.tasks.push(newTask);
    }

    // Generar un resumen del proyecto con el número de tareas en cada estado
    getTaskSummary() {
        return this.tasks.reduce((summary, task) => {
            summary[task.status] = (summary[task.status] || 0) + 1;
            return summary;
        }, {});
    }

    // Ordenar las tareas por fecha límite
    sortTasksByDeadline() {
        this.tasks.sort((a, b) => a.deadline - b.deadline);
    }

    // Filtrar tareas usando una función pasada como argumento COMPLEMENTAAAAR
    filtrarTareasProyecto(filtro) {
        return this.tasks.filter(filtro);
    }

    // Calcular el tiempo restante para completar todas las tareas pendientes
    calcularTiempoRestanteEnDias() {
        const hoy = new Date();
        return this.tasks.reduce((total, task) => {
            if (task.status === 'pendiente') {
                const tiempoRestante = (task.deadline - hoy) / (1000 * 60 * 60 * 24);
                total += Math.max(tiempoRestante, 0);
            }
            return total;
        }, 0);
    }

    // Obtener tareas críticas (menos de 3 días para la fecha límite y no completadas)
    obtenerTareasCriticas() {
        const hoy = new Date();
        return this.tasks.filter(task => 
            (task.deadline - hoy) / (1000 * 60 * 60 * 24) < 3 && task.status !== 'completada'
        );
    }
}

// EJEMPLOs PARTE 1

// Crear un proyecto
const proyectoDesarrolloWeb = new Project("Desarrollo Web", "2025-05-01");
console.log("Información del proyecto: ", proyectoDesarrolloWeb);

// Implementa una función que permita añadir nuevas tareas a un proyecto.
proyectoDesarrolloWeb.addTask("Crear boceto", "En progreso", "2024-11-17");
proyectoDesarrolloWeb.addTask("Desarrollo front-end", "En progreso", "2024-12-28");
proyectoDesarrolloWeb.addTask("Desarrollo de back-end", "pendiente", "2025-01-10");
proyectoDesarrolloWeb.addTask("Pruebas funcionales", "pendiente", "2025-02-01");

proyectoDesarrolloWeb.tasks.forEach(task => {
    console.log(`ID Tarea: ${task.id}`);
    console.log(`Descripción: ${task.description}`);
    console.log(`Estado: ${task.status}`);
    console.log(`Fecha límite: ${task.deadline.toDateString()}`);
    console.log("-----------------------------");
});

/*Desarrolla una función que utilice métodos de array (map, filter, reduce) para
generar un resumen del proyecto mostrando el número de tareas en cada
estado.*/

const verResumenDW = proyectoDesarrolloWeb.getTaskSummary();
console.log("Resumen de tareas por estado:", verResumenDW);

/*Crea una función que ordene las tareas de un proyecto por fecha límite
utilizando el método sort de JavaScript.*/
proyectoDesarrolloWeb.sortTasksByDeadline();
console.log("Tareas ordenadas por fecha límite:", proyectoDesarrolloWeb.tasks);

//EJEMPLOS PARTE 2

/*Crea una función de orden superior filtrarTareasProyecto que tome una
función de filtrado como argumento y la aplique a la lista de tareas de un
proyecto.*/
const tareasFiltradas = proyectoDesarrolloWeb.filtrarTareasProyecto(task =>
    task.description.toLowerCase().includes("desarrollo")
);
console.log("Tareas filtradas que digan DESARROLLO:", tareasFiltradas);

/*Implementa una función calcularTiempoRestante que utilice el método
reduce para calcular el número total de días que faltan para completar todas
las tareas pendientes de un proyecto.*/

const tiempoRestante = proyectoDesarrolloWeb.calcularTiempoRestanteEnDias();
const tiempoRestanteRedondeado = Math.round(tiempoRestante);
console.log("El tiempo restante es: ", tiempoRestanteRedondeado, "días");

/*Desarrolla una función obtenerTareasCriticas que identifique y retorne las
tareas que están a menos de 3 días de su fecha límite y aún no están
completadas.*/
const tareasCriticas = proyectoDesarrolloWeb.obtenerTareasCriticas();

console.log("Tareas críticas:");
tareasCriticas.forEach(task => {
    console.log(`ID: ${task.id}`);
    console.log(`Descripción: ${task.description}`);
    console.log(`Estado: ${task.status}`);
    console.log(`Fecha límite: ${task.deadline.toDateString()}`);
    console.log("-----------------------------");
});


//PARTE 3 DE LA TAREA

/* Desarrolla una función cargarDetallesProyecto que simule una llamada
asíncrona a una API para cargar los detalles de un proyecto.
Utiliza Promises o async/await */

async function cargarDetallesProyecto(idProyecto) {
    console.log(`Cargando detalles del proyecto con ID: ${idProyecto}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Detalles del proyecto con ID ${idProyecto} cargados.`);
        }, 1000);
    });
}

/*Crea una función actualizarEstadoTarea que simule la actualización del
estado de una tarea en el servidor y maneje tanto el caso de éxito como el de
error. */
cargarDetallesProyecto(2361).then(console.log);

async function actualizarEstadoTarea(task, nuevoEstado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // Simula un 80% de éxito
            if (success) {
                task.status = nuevoEstado;
                resolve(`Estado de la tarea con ID ${task.id} actualizado a ${nuevoEstado}`);
            } else {
                reject(`Error al actualizar el estado de la tarea con ID ${task.id}`);
            }
        }, 500);
    });
}

/*Implementa un sistema simple de notificacionesTareas que permita a
diferentes partes del código "escuchar" cuando se completa una tarea.*/

// Sistema de notificaciones
class NotificacionesTareas {
    constructor() {
        this.listeners = {};
    }

    // Registrar un nuevo listener para un evento
    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    // Emitir un evento con datos asociados
    emit(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback(data));
        }
    }
}

// Crear instancia de notificaciones
const notificaciones = new NotificacionesTareas();

// Escuchar cuando se complete una tarea
notificaciones.on('tareaCompletada', (task) => {
    console.log(`Notificación: La tarea con ID ${task.id} y descripción "${task.description}" fue completada.`);
});

// Actualizar estado de una tarea y emitir notificación
async function completarTarea(task) {
    try {
        await actualizarEstadoTarea(task, 'completada');
        notificaciones.emit('tareaCompletada', task);
    } catch (error) {
        console.error(error);
    }
}

// Ejemplo: Completar una tarea
console.log("Simulando la actualización de una tarea...");
const tareaEjemplo = proyectoDesarrolloWeb.tasks[1]; 
completarTarea(tareaEjemplo);
