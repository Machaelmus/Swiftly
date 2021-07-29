from flask import Blueprint, request
from app.models import db, User
from app.models.reply import Reply
from flask_login import current_user
from app.forms.post_form import CreatePostForm
from app.forms.edit_post_form import EditPostForm
from datetime import date


reply_routes = Blueprint('replies', __name__)


@reply_routes.route('/api/replies')
def getReplies():
    allReplies = Reply.query.all()
    return {'replies': [reply.to_dict() for reply in allReplies]}
    