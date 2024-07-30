import sqlite3

conn = sqlite3.connect('users.db')

cursor = conn.cursor()

create_table = '''
CREATE TABLE IF NOT EXISTS users (
     username TEXT PRIMARY KEY NOT NULL,
     password TEXT NOT NULL,
     email TEXT NOT NULL,
     phone INTEGER,
     age INTEGER,
     firstName TEXT,
     lastName TEXT,
     city TEXT,
     country TEXT
);
'''
cursor.execute(create_table)

conn.commit()

conn.close()

print("Table created successfully!")