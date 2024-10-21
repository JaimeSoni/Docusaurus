---
sidebar_position: 6
---

# Ejemplo 6

## Simulando un llamado de API.

### Ejemplo de código

```
const fetchUser = () => Promise.resolve({ id: 4, name: 'Jaime' });
fetchUser()
  .then(user => Promise.resolve(user.name))
  .then(name => console.log(name)); 
```

Se hace una simulacion de llamar a una API mediante el fetch.

## Nivel: - Intermedio -

### Resultado del ejemplo
![Texto alternativo](img/ej6.png)