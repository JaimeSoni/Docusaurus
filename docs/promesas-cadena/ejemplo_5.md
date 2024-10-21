---
sidebar_position: 5
---

# Ejemplo 5

## Encadenando promesas.

### Ejemplo de código

```
const getUser = () => Promise.resolve({ id: 9 });
const getUserName = (user) => Promise.resolve('Persona ' + user.id);
getUser()
  .then(getUserName)
  .then(name => console.log(name)); 
```

Se tienen 2 cadenas hechas y se genera una sola mediante el encadenamiento.

## Nivel: - Intermedio -

### Resultado del ejemplo
![Texto alternativo](img/ej5.png)