## Prueba técnica de NAPPTILUS

Stack: Angular 6 - Docker

## Instrucciones de uso

Te propongo 2 maneras de arrancar la app.

**1-** Para poder visualizar la app en tu localhost sin necesidad de instalarte nada en la máquina he preparado una imagen con todo lo necesario (node, un directorio con el clon de mi app, a su vez se compila directamente con angular a través de un servidor estático nginx).


Es impresicindible tener instalado Docker.

Cómo instalar Docker: 

- Para Mac: https://docs.docker.com/docker-for-mac/install/
- Para Linux: https://docs.docker.com/install/linux/docker-ce/ubuntu/
- Para Windows: https://docs.docker.com/docker-for-windows/install/

Si ya dispones de docker, clónate el proyecto en tu workspace: git clone https://github.com/LITULANDIO/napptilus.git

Una vez dentro del proyecto ejecuta los siguientes comandos:

Ésto lo que hará es generarte la imagen. 
```
docker build . -t test:latest
```

Ésto lo que hará es arrancar el contenedor.
```
docker run -d -p 80:80 test:latest
```
**2-** Si por el contrario deseas ejecutar la app con el server de angular, tendrás que tener instalado node, npm y angular cli. Si ese es tu caso tendrás que entrar dentro del proyecto, y en consola ejecutar el comando:

Para instalar todas las dependencias
```
npm install
```
Para ejecutar el servidor local
```
ng serve --open
```

Se tendría que abrir el navegador con la dirección siguiente: http://localhost:4200/

**Consideraciones**: Los tipos de las variables y del constructor las he declarado publicas, es una mala práctica ya que en algunos casos es preferible definirla como privada, pero en ese caso docker no nos dejaría arrancar la imagen ya que no puede acceder a los tipos privados. Teniendo en cuenta que es desarrollo, no corremos ningún riesgo.

El filtro para el buscador es por nombre, y hasta que no se escriban como mínimo 3 carácteres no realizará la búsqueda, creo que de ésta manera queda más clara la búsqueda.

