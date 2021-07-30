from .db import db


user_posts = db.Table(
    'user_posts',
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('postId', db.Integer, db.ForeignKey('posts.id'), primary_key=True)
)
