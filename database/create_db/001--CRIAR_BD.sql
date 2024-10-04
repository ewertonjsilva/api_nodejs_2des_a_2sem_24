CREATE USER 'us_aula_node' IDENTIFIED BY '123456';


CREATE DATABASE bd_aula_node; 


GRANT ALL PRIVILEGES ON bd_aula_node.* TO us_aula_node;




SHOW DATABASES; 

USE bd_aula_node; 

SELECT DATABASE(); 

-- ALTER SCHEMA bd_aula_node_ewerton RENAME TO bd_aula_node; 

-- DROP DATABASE bd_aula_node; 








