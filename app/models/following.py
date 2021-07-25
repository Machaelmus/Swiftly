from .db import db


following = db.Table(
    'following',
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('followId', db.Integer, db.ForeignKey('users.id'), primary_key=True)
)
