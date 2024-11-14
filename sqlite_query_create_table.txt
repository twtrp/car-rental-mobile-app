CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT,
    driver_license_number TEXT
);

CREATE TABLE cars (
    id INTEGER PRIMARY KEY,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    color TEXT NOT NULL,
    image TEXT NOT NULL
);

CREATE TABLE rentals (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    car_id INTEGER,
    rental_date DATE NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(car_id) REFERENCES cars(id)
);