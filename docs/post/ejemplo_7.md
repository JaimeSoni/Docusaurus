---
sidebar_position: 7
---

# Ejemplo 7

## Sistema de autenticación.

### Ejemplo de código

```
const autenticarUsuario = (usuario) => {
  if (usuario === 'Julian') {
    console.log('Usuario autenticado.');
  } else {
    console.log('Autenticación fallida.');
  }
};
autenticarUsuario('Julian');
```
Es un simulador de autenticación para usuarios.

## Nivel: - Difícil -

### Resultado del ejemplo
![Texto alternativo](img/ej7.png)

Como se puede ver que los nombres son iguales arroja un mensaje de autenticación.