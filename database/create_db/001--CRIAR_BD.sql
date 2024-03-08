CREATE DATABASE bd_aula_node_ewerton; 

SHOW DATABASES; 

USE bd_aula_node_ewerton; 

SELECT DATABASE(); 

-- ALTER SCHEMA bd_aula_node_ewerton RENAME TO bd_aula_node; 

DROP DATABASE bd_aula_node; 

CREATE DATABASE bd_aula_node; 

SHOW DATABASES; 

USE bd_aula_node;

SELECT DATABASE(); 

CREATE USER 'us_aula_node' IDENTIFIED BY '123456';

GRANT ALL PRIVILEGES ON S223_node.* TO us_aula_node;






