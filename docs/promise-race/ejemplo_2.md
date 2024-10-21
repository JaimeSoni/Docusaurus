---
sidebar_position: 2
---

# Ejemplo 2

## Promesas con rechazos.

### Ejemplo de código

```
const promesa1 = new Promise((resolve) => {
    setTimeout(() => resolve("Tu promesa 4"));
});

const promesa2 = new Promise((_, reject) => {
    setTimeout(() => reject("Promesa 5 error"));
});

Promise.race([promesa1, promesa2])
    .then(console.log)
    .catch(console.error);
```

Es un ejemplo de promesa race que contiene rechazos en alguna de ellas.

## Nivel: - Fácil -

### Resultado del ejemplo
![Texto alternativo](img/ej2.png)