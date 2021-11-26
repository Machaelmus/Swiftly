from .db import db
import datetime

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post = db.Column(db.Text, nullable=False)
    timeOfPost = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)


    postReplies = db.relationship('Reply', cascade="all, delete-orphan", back_populates='replyToPost')
    postAuthor = db.relationship('User', lazy='subquery', back_populates='userPosts')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'post': self.post,
            'timeOfPost': datetime.datetime.utcnow(),
            'user': self.postAuthor.to_dict(),
        }
