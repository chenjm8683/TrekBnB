# Schema Information

## rooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
host_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
type_id     | integer   | not null, indexed
price       | float     | not null
location    | string    | not null
lat         | float     | not null
lng         | float     | not null



## reservation
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
requester_id| integer   | not null, foreign key (references users), indexed
room_id     | integer   | not null, foreign key (references rooms), indexed
start_date  | date      | not null
end_date    | date      | not null
status      | string    | not null, default: "pending"


## reviews
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
reservation_id | integer   | not null, foreign key (references users), indexed
rating         | integer   | not null
body           | text      | not null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## user_profiles
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
fname           | string    | not null
lname           | string    | not null
current_city    | string    | not null, indexed, unique
