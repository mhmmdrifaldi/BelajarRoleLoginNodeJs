create table users(
  id serial primary key,
  user_id uuid DEFAULT uuid_generate_v4 (),
  name varchar(255),
  email varchar(255),
  password varchar(255),
  role varchar(255)
)

Create table products(
  id serial primary key,
  name varchar(255),
  price integer
)