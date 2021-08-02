from .db import db


class likedPost(db.Model):
    __tablename__ = 'likedposts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'))

    likedPostUser = db.relationship('User', back_populates='userPostLikes')
    likedPostPost = db.relationship('Post', back_populates='likesOnPosts')
