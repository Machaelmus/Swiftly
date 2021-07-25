from .db import db

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    post = db.Column(db.Text, nullable=False)
    timeOfPost = db.Column(db.Date, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'post': self.post,
            'timeOfPost': self.timeOfPost,
        }
