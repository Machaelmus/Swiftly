from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profileImage = db.Column(db.String, nullable=True)
    handle = db.Column(db.String, nullable=True)
    status = db.Column(db.Text, nullable=True )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    # Creates relationship between Likes, User and Posts where it returns the posts the user liked
        # userPostLikes = db.relationship('Like', backref=db.backref('posts'))
    # Creates relationship between user and likes to replies
        # userReplyLikes = db.relationship('ReplyLikes', backref=db.backref('replies'))

    # ========================================================================

    # Creates relationship between user and replies!
    userReplies = db.relationship('Reply', back_populates='replyAuthor')
    # Creates relationship between users and posts!
    userPosts = db.relationship('Post', back_populates='postAuthor')
    # Creates relationship between the user and the joins table for posts they've liked!
    userPostLikes = db.relationship('likedPost', backref=db.backref('users'))
    # Might need lazy = joined here as well

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profileImage': self.profileImage,
            'handle': self.handle,
            'status': self.status,
            # 'userpost': [post.to_dict() for post in self.userPosts]
            # 'bio': self.bio,
            # 'birthdate': self.birthdate,
        }
