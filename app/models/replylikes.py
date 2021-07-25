from .db import db


replylikes = db.Table(
    'replylikes',
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('replyId', db.Integer, db.ForeignKey('replies.id'), primary_key=True)
)
