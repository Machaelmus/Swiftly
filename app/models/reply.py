from .db import db

class Reply(db.Model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey('posts.id') , nullable=False)
    reply = db.Column(db.Text, nullable=False)
    timeOfReply = db.Column(db.Date, nullable=False)

    # Creates relationship between replies and posts
    replyToPost = db.relationship('Post', back_populates='postReplies')
    # Creates relationship between replies and users to determine the author
    replyAuthor = db.relationship('User', back_populates='userReplies')

    # ========================================================================

    # Creates relationship between replies and reply likes to detemine how many likes on the reply
        # replyLikes = db.relationship('ReplyLikes', backref=db.backref('replies'))



    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'postId': self.postId,
            'reply': self.reply,
            'timeOfReply': self.timeOfReply,
            'user': self.replyAuthor.to_dict()
        }
