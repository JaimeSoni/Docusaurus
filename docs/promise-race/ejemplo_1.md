---
sidebar_position: 1
---

# Ejemplo 1

## Ejericio de Promesas Simple.

### Ejemplo de código

```
const promesa1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa 1 realizada"));
});

const promesa2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa 2 realizada"));
});

Promise.race([promesa1, promesa2]).then(console.log);
```

Es un ejemplo de promesa race simple.

## Nivel: - Fácil -

### Resultado del ejemplo
![Texto alternativo](img/ej1.png)