---
sidebar_position: 5
---

# Ejemplo 5

## Timeout de proceso.

### Ejemplo de código

```
const proceso = new Promise((resolve) => {
    setTimeout(() => resolve("Proceso completado"));
});

const timeout = new Promise((_, reject) => {
    setTimeout(() => reject("Tiempo agotado"));
});

Promise.race([proceso, timeout])
    .then(console.log)
    .catch(console.error);
```

Es un ejemplo de Timeout sobre el proceso de la promesa.

## Nivel: - Intermedio -

### Resultado del ejemplo
![Texto alternativo](img/ej5.png)