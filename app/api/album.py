from flask import Blueprint, request
from app.models import db, User
from app.models.album import Album
from flask_login import current_user
from datetime import date


album_routes = Blueprint('albums', __name__)


