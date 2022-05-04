INSERT INTO user (username, email, password)
VALUES
('Brahm', 'test@test.com', 12345),
('James', 'test1@test.com', 12345),
('Rachel', 'test2@test.com', 12345),
('Collin', 'test3@test.com', 12345),
('Samuel', 'test4@test.com', 12345);

INSERT INTO post (title, user_id)
VALUES
('This is the first post created, thoughts?', 1),
('This is the second post created, what do you think?', 2),
('This is the third post created, it is pretty cool', 3),
('This is the fourth post created.', 4),
('This is the fifth post created', 5),
('This is the sixth post created', 1),
('This is the seventh post created', 4);

INSERT INTO comment (comment_text, user_id, post_id)
VALUES
('This first post is awesome', 2, 1),
('I love it!', 3, 1),
('It is alright.', 1, 2),
('I like it so far!', 4, 3),
('I expected more from the post.', 1, 4);