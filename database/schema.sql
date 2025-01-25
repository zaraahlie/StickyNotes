CREATE TABLE projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
    FOREIGN KEY (author_id) REFERENCES author(id)
); 

CREATE TABLE authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
)

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
    );

CREATE TABLE chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    order_number INTEGER NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id)
); --haha sqllite pls don't run out of room to store these documents... :')

CREATE TABLE scenes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    content TEXT,
    order_number INTEGER NOT NULL,
    highlight TEXT,
    alt_text TEXT,
    FOREIGN KEY (chapter_id) REFERENCES chapters(id)
);

CREATE TABLE tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE scene_tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    scene_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    start_position INTEGER NOT NULL, 
    end_position INTEGER NOT NULL,  
    FOREIGN KEY (scene_id) REFERENCES scenes(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);
