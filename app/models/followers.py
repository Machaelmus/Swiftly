from .db import db


followers = db.Table(
    'followers',
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('followId', db.Integer, db.ForeignKey('users.id'), primary_key=True)
)
