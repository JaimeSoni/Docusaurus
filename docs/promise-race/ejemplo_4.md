---
sidebar_position: 4
---

# Ejemplo 4

## Promesas en paralelo.

### Ejemplo de código

```
const promesa1 = new Promise((resolve) => {
    setTimeout(() => resolve("Ejercicio 1"));
});

const promesa2 = new Promise((resolve) => {
    setTimeout(() => resolve("Ejercicio 2"));
});

const promesa3 = new Promise((resolve) => {
    setTimeout(() => resolve("Ejercicio 3"));
});

Promise.race([promesa1, promesa2, promesa3]).then(console.log);
```

Es un ejemplo de promesa en paralelo de ellas.

## Nivel: - Intermedio -

### Resultado del ejemplo
![Texto alternativo](img/ej4.png)