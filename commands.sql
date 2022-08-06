/* 13.2 */
/* Create Blogs table */
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author text,
    url text NOT NULL,
    title text NOT NULL,
    likes integer DEFAULT 0
);
/* 13.2 */
/* Insert blogs */
INSERT INTO blogs
  (author, url, title)
VALUES
  ('testUser1', 'https://example.com', 'Test title 1'),
  ('testUser2', 'https://example.com', 'Test title 2');
/*  */
/*  */
DROP TABLE migrations;
DROP TABLE blogs;
DROP TABLE users;
DROP TABLE reading_lists;

/*  */
/*  */