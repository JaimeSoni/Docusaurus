---
sidebar_position: 8
---

# Ejemplo 8

## Combinacion de promesas con condiciones.

### Ejemplo de código

```
const promesa = async (cantidad) => {
    if (cantidad > 10) {
        return Promise.resolve("Cantidad alta");
    } else {
        return Promise.reject("Cantidad baja");
    }
};

promesa(5)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error)); 
```

Es un ejemplo de condicion de la cantidad si es una cantidad alta o baja.

## Nivel: - Difícil -

### Resultado del ejemplo
![Texto alternativo](img/ej8.png)

El ejemplo es una cantidad alta.