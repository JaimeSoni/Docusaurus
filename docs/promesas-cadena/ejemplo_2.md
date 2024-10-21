---
sidebar_position: 2
---

# Ejemplo 2

## Multiplicación.

### Ejemplo de código

```
const multiply = (x) => Promise.resolve(x);
multiply(6)
  .then(result => result * 5)
  .then(result => console.log(result));
```

Se crea una multiplicacion a base de una promesa en cadena.

## Nivel: - Fácil -

### Resultado del ejemplo
![Texto alternativo](img/ej2.png)