---
sidebar_position: 3
---

# Ejemplo 3

## Uso de setTimeout.

### Ejemplo de código

```
function promesaAleatoria() {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * 3000) + 1000; 
        setTimeout(() => resolve(`Operacion en ${tiempo / 1000} segundos`), tiempo);
    });
}

Promise.race([promesaAleatoria(), promesaAleatoria()])
    .then(console.log);
```

Es un ejemplo de promesa para obtener el tiempo de la operacion.

## Nivel: - Fácil -

### Resultado del ejemplo
![Texto alternativo](img/ej3.png)