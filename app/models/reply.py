from .db import db

class Reply(db.Model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    postId = db.Column(db.Integer, nullable=False)
    reply = db.Column(db.Text, nullable=False)
    timeOfReply = db.Column(db.Date, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'postId': self.postId,
            'reply': self.reply,
            'timeOfReply': self.timeOfReply,
        }
