---
sidebar_position: 6
---

# Ejemplo 6

## Consumo de una API.

### Ejemplo de código

```
function consumirAPI1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Respuesta de API 1"));
    });
}

function consumirAPI2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Respuesta de API 2"));
    });
}

Promise.race([consumirAPI1(), consumirAPI2()])
    .then(console.log);
```

Este código utiliza Promise.race() para ejecutar dos funciones asíncronas, consumirAPI1 y consumirAPI2, y devuelve el resultado de la primera promesa que se resuelva.

## Nivel: - Intermedio -

### Resultado del ejemplo
![Texto alternativo](img/ej6.png)