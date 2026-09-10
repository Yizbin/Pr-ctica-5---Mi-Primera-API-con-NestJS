# Práctica 5 - Mi primera API con NestJS


## Cuestionario de la Práctica

### 1. ¿Qué generó el comando `nest new`?
Genera la estructura de directorios y la arquitectura base de una aplicación NestJS lista para ejecutarse.

### 2. ¿Qué hace el `AppService` que ya viene generado?
Actúa como un proveedor  inyectable que encapsula la lógica de negocio básica de la aplicación.

### 3. ¿Por qué la ruta funciona sin declarar nada en `app.module.ts`?
Porque `AppController` ya se encuentra registrado dentro del arreglo `controllers: [AppController]` del decorador `@Module` en `app.module.ts`. NestJS inspecciona automáticamente todos los métodos decorados dentro de los controladores registrados; por lo tanto, cualquier nueva ruta que definamos dentro de `AppController` (como `@Get('clases')` o `@Post('clases')`) queda mapeada y disponible sin tocar el módulo.

### 4. ¿Qué pasaría si el cuerpo de la petición viniera vacío?
Al no tener implementados pipes de validación global (`ValidationPipe`) ni DTOs decorados con reglas estrictas (mediante `class-validator`), NestJS aceptará la petición entrante asignando un objeto vacío (`{}`) al parámetro `@Body()`. Dicho objeto se insertaría en el arreglo en memoria, guardando un registro sin `id` ni `nombre`.

### 5. ¿En qué archivo vive hoy toda la lógica de la práctica?
En el archivo `src/app.controller.ts`, ya que en él se definió la variable en memoria (`clases`) y se maneja directamente la lectura y agregación de los datos en las peticiones HTTP.