create table users(
  user_id uuid DEFAULT uuid_generate_v4 (),
  name varchar(100),
  email varchar(100),
  password varchar(100),
  role varchar(50),
  primary key(user_id)
)