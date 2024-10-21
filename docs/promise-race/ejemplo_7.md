---
sidebar_position: 7
---

# Ejemplo 7

## Respuesta de múltiples servicios.

### Ejemplo de código

```
function servicio1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Servicio 1"));
    });
}

function servicio2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Servicio 2"));
    });
}

function servicio3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Servicio 3"));
    });
}

Promise.race([servicio1(), servicio2(), servicio3()])
    .then(console.log);
```

El código ejecuta tres servicios asíncronos y utiliza Promise.race() para devolver el resultado del servicio que responda primero. Solo se muestra en la consola el valor de la primera promesa que se resuelve, ignorando las demás.

## Nivel: - Difícil -

### Resultado del ejemplo
![Texto alternativo](img/ej7.png)