from .db import db
import datetime

class Reply(db.Model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey('posts.id') , nullable=False)
    reply = db.Column(db.Text, nullable=False)
    timeOfReply = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)

    # Creates relationship between replies and posts
    replyToPost = db.relationship('Post', back_populates='postReplies')
    # Creates relationship between replies and users to determine the author
    replyAuthor = db.relationship('User', lazy='subquery', back_populates='userReplies')

    # ========================================================================

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'postId': self.postId,
            'reply': self.reply,
            'timeOfReply': datetime.datetime.utcnow(),
            'user': self.replyAuthor.to_dict(),
        }
