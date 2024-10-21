---
sidebar_position: 6
---

# Ejemplo 6

## Funciones que devuelven promesas.

### Ejemplo de código

```
const obtenerDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos Correctos");
        }, 1500);
    });
};

const promesa = async () => {
    const datos = await obtenerDatos();
    console.log(datos); 
};

promesa();
```

Es un ejemplo donde obtiene unos datos, para poder verificar si los datos son correctos.
## Nivel: - Intermedio -

### Resultado del ejemplo
![Texto alternativo](img/ej6.png)

Se puede ver que los datos son correctos y hace valida la promesa.