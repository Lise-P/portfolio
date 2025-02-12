create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table poste (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
titre VARCHAR(255) NOT NULL,
duree VARCHAR(255) NOT NULL,
resume VARCHAR(255) NOT NULL,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

insert into user(id, email, password)
values
  (1, "jdoe@mail.com", "123456");

insert into item(id, title, user_id)
values
  (1, "Stuff", 1),
  (2, "Doodads", 1);

  insert into poste(titre, duree, resume, user_id)
values
  ("Chargée de projet", "octobre 2021-avril 2023", "j'ai accompagné des locataires", 1),
  ("Chargée de mobilisation et de communication", "juillet 2020-juillet 2021", "j'ai accompagné des étudiants", 1);

