from .db import db
import datetime

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post = db.Column(db.Text, nullable=False)
    timeOfPost = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)

    # ========================================================================

    # Relationship between Posts and replies
    postReplies = db.relationship('Reply', cascade="all, delete-orphan", back_populates='replyToPost')
    # Creates relationship between post and users to determine the author
    postAuthor = db.relationship('User', lazy='subquery', back_populates='userPosts')
    # Creates relationship between likes join table and the post.


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'post': self.post,
            'timeOfPost': datetime.datetime.utcnow(),
            'user': self.postAuthor.to_dict(),
            # 'users': [a.to_dict() for a in self.postAuthor]
        }
