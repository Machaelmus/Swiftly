from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable=False)
    imageUrl = db.Column(db.Text, nullable=False)

    imageAlbum = db.relationship('Album', back_populates='albumImages')
    imageOwner = db.relationship('User', back_populates='ownerOfImage')
