create table task(
id bigint not null auto_increment,
name_task varchar(100) not null,
description varchar(100) not null,
status varchar(100) not null,

primary key(id)
);