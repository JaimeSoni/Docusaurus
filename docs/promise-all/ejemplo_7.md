---
sidebar_position: 7
---

# Ejemplo 7

## Promesas complejas con condiciones

### Ejemplo de código

```
const checkAvailability = (item) => {
    return new Promise((resolve, reject) => {
        if (item === 'disponible') {
            resolve(`${item} está disponible`);
        } else {
            reject(`${item} no está disponible`);
        }
    });
};

Promise.all([
    checkAvailability('disponible'),
    checkAvailability('no está disponible')
])
    .then((messages) => console.log(messages))
    .catch((error) => console.log(error)); 
```

Es un ejemplo del uso de promise.all para manejar dos promesas que verifican si un ítem está disponible. Si ambos ítems están disponibles, muestra los mensajes de éxito. Si alguno no lo está, se rechaza y muestra el error. Como uno de los ítems no está disponible, se ejecuta el bloque .catch() y muestra el mensaje de error.

## Nivel: - Difícil -

### Resultado del ejemplo

![Texto alternativo](img/ej7.png)