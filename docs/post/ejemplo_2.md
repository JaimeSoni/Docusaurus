---
sidebar_position: 2
---

# Ejemplo 2

## Ejemplo de un formulario sencillo.

### Ejemplo de código

HTML:
```
<form id="miFormulario">
  <input type="text" name="nombre" value="Juan">
  <button type="submit">Enviar</button>
</form>
```

JS:

```
<script>
  document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = this.nombre.value;
    console.log('Nombre enviado:', nombre);
  });
</script>
```

Es un ejemplo acerca del envio de datos de un formulario.

## Nivel: - Fácil -

### Resultado del ejemplo
![Texto alternativo](img/ej2.png)

Se hace el vio de los datos almacenados dentro de los campos.