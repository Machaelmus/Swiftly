from operator import add
from flask import Blueprint, request
from app.models import db, User
from app.models.images import Image
from app.forms.add_image_form import AddImageForm
from flask_login import current_user
from datetime import date


image_routes = Blueprint('images', __name__)


@image_routes.route('/api/images')
def getImages():
    allImages = Image.query.all()
    return allImages.to_dict()


@image_routes.route('/api/images', methods=['POST'])
def addImage():
    form = AddImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        addedImage = Image(
            userId = current_user.id,
            albumId = request.json['albumId'],
            imageUrl = form.imageUrl.data,
        )
        db.session.add(addedImage)
        db.session.commit()
        return addedImage.to_dict()


@image_routes.route('/api/images/<int:id>', methods=['DELETE'])
def removeImage(id):
    imageToDelete = Image.query.get(id)
    db.session.delete(imageToDelete)
    db.session.commit()
    return imageToDelete.to_dict()
