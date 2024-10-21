---
sidebar_position: 7
---

# Ejemplo 7

## Varias promesas.

### Ejemplo de código

```
const fetchEjemplo1 = () => Promise.resolve('Ejemplo 1');
const fetchEjemplo2 = () => Promise.resolve('Ejemplo 2');
const fetchEjemplo3 = () => Promise.resolve('Ejemplo 3');
const fetchEjemplo4 = () => Promise.resolve('Ejemplo 4');
Promise.all([fetchEjemplo1(), fetchEjemplo2(), fetchEjemplo3(), fetchEjemplo4()])
  .then(([ejemplo1, ejemplo2, ejemplo3, ejemplo4]) => console.log(ejemplo1, ejemplo2, ejemplo3, ejemplo4));
```

Se tienen varias promesas y se hace un llamado de todas ellas.

## Nivel: - Difícil -

### Resultado del ejemplo
![Texto alternativo](img/ej7.png)