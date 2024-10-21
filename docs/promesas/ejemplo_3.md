---
sidebar_position: 3
---

# Ejemplo 3

## Promesa con setTimeout.

### Ejemplo de código

```
const promise = new Promise((resolve) => {
    setTimeout(() => resolve('Tu promesa es después de 5 segundo'), 1000);
  });
  
  promise.then(result => console.log(result));
```

Este es un ejemplo del tiempo de espera para una promesa.

## Nivel: - Fácil -

### Resultado del ejemplo
![Texto alternativo](img/ej3.png)

Como se puede ver tiene una espera de 5 segundos para la promesa.