---
sidebar_position: 5
---

# Ejemplo 5

## Manejo de promesas anidadas

### Ejemplo de código

```
const getAPI1 = () => Promise.resolve('API 1');
const getAPI2 = () => Promise.resolve('API 2');

const getCombinedData = async () => {
    const results = await Promise.all([getAPI1(), getAPI2()]);
    return results.join(' - '); 
};

getCombinedData().then(console.log);
```

Genera un ejemplo en conjunto anidado.

## Nivel: - Intermedio -

### Resultado del ejemplo

![Texto alternativo](img/ej5.png)