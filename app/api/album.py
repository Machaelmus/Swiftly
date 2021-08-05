from flask import Blueprint, request
from app.models import db, User
from app.models import album
from app.models.album import Album
from flask_login import current_user
from datetime import date


album_routes = Blueprint('albums', __name__)


@album_routes.route('/api/albums')
def getAlbums():
    allAlbums = Album.query.all()
    return {'albums': [album.to_dict() for album in allAlbums]}

# edit route to be done later
@album_routes.route('/api/albums/<int:id>')
def editAlbum():
    return


@album_routes.route('/api/albums')
def createAlbum():
    return

