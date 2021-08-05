from flask import Blueprint, request
from app.models import db, User
from app.models import album
from app.models.album import Album
from app.forms.create_album_form import CreateAlbumForm
from flask_login import current_user
from datetime import date


album_routes = Blueprint('albums', __name__)


@album_routes.route('/api/albums')
def getAlbums():
    allAlbums = Album.query.all()
    return {'albums': [album.to_dict() for album in allAlbums]}


@album_routes.route('/api/albums', methods=['POST'])
def createAlbum():
    form = CreateAlbumForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newAlbum = Album(
            userId = current_user.id,
            coverPhotoUrl = form.coverPhotoUrl.data,
            title = form.title.data,
            description = form.description.data,
            albumCreatedAt = date.today(),
        )
        db.session.add(newAlbum)
        db.session.commit()
        return newAlbum.to_dict()


# edit route to be done later
# @album_routes.route('/api/albums/<int:id>')
# def editAlbum():
#     return


@album_routes.route('/api/albums/<int:id>', methods=['DELETE'])
def deleteAlbum(id):
    deleteAlbum = Album.query.get(id)
    db.session.delete(deleteAlbum)
    db.session.commit()
    return deleteAlbum.to_dict()
