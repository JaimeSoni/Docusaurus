---
sidebar_position: 4
---

# Ejemplo 4

## Promesa con finally.

### Ejemplo de código

```
const promise = new Promise((resolve) => {
    setTimeout(() => resolve('Tu promesa fue realiza correctamente'), 1000);
  });
  
  promise
    .then(result => console.log(result))
    .finally(() => console.log('Tu promesa fue rechazada'));
```

Es un ejemplo de un promesa que se realiza y despues se finaliza.

## Nivel: - Intermedio -

### Resultado del ejemplo
![Texto alternativo](img/ej4.png)

Se puede ver que primero realiza la promesa y despues la finaliza.