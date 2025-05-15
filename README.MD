DELETE FROM PRODUCT WHERE ID = 1;

INSERT INTO PRODUCT (NAME, DESCRIPTION, PRICE, IMAGE_URL) 
VALUES ('Estambre Azul', 'Estambre de color azul marino', 120.50, 'https://amolasmanualidades.com.mx/collections/estambres');

INSERT INTO PRODUCT (NAME, DESCRIPTION, PRICE, IMAGE_URL) 
VALUES ('Estambre Rojo', 'Estambre de color rojo', 125.50, 'https://amolasmanualidades.com.mx/collections/estambres');

INSERT INTO PRODUCT (NAME, DESCRIPTION, PRICE, IMAGE_URL) 
VALUES ('Estambre Amarillo', 'Estambre de color amarillo', 200, 'https://www.ecoestambres.com/products/estambre-jazmin');


# Para terminar procesos
1. Identifica el Proceso que Usa el Puerto 8080
bash
Copy
Edit
sudo lsof -i :8080
Verás una salida similar a:

sql
Copy
Edit
COMMAND   PID  USER   ... 
java     12345  diego  ...
El número bajo PID es el Process ID (ejemplo: 12345).

2. Termina el Proceso
bash
Copy
Edit
sudo kill -9 12345
Reemplaza 12345 con el PID real.