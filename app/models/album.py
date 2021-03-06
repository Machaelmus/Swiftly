from .db import db


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    coverPhotoUrl = db.Column(db.Text, nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    albumCreatedAt = db.Column(db.Date, nullable=False)

    albumImages = db.relationship('Image', back_populates='imageAlbum')
    albumOwner = db.relationship('User', back_populates='ownerOfAlbum')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'coverPhotoUrl': self.coverPhotoUrl,
            'title': self.title,
            'description': self.description,
            'user': self.albumOwner.to_dict(),
            'images': [image.to_dict() for image in self.albumImages],
            'albumCreatedAt': self.albumCreatedAt,
        }
