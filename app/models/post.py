from .db import db


postReplyLikes = db.Table(
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('postId', db.Integer, db.ForeignKey('posts.id'), primary_key=True),
)


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post = db.Column(db.Text, nullable=False)
    timeOfPost = db.Column(db.Date, nullable=False)

    # Creates a relationship between Likes, posts and users to find users that liked each post.
        # postUserLikes = db.relationship('Like', backref=db.backref('users'))
    # ========================================================================

    # Relationship between Posts and replies
    postReplies = db.relationship('Reply', cascade="all, delete-orphan", back_populates='replyToPost')
    # Creates relationship between post and users to determine the author
    postAuthor = db.relationship('User', back_populates='userPosts')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'post': self.post,
            'timeOfPost': self.timeOfPost,
            'user': self.postAuthor.to_dict(),
            # 'users': [a.to_dict() for a in self.postAuthor]
        }
