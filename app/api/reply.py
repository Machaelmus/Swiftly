from flask import Blueprint, request
from app.models import db, User
from app.models import reply
from app.models.post import Post
from app.models.reply import Reply
from flask_login import current_user
from app.forms.create_reply_form import CreateReplyForm
from datetime import date


reply_routes = Blueprint('replies', __name__)


@reply_routes.route('/api/replies')
def getReplies():
    allReplies = Reply.query.all()
    allPosts = Post.query.all()
    return {'replies': [reply.to_dict() for reply in allReplies], 'posts': [post.to_dict() for post in allPosts]}


@reply_routes.route('/api/replies', methods=['POST'])
def createReply():
    form = CreateReplyForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        reply = Reply(
            userId = current_user.id,
            reply = form.reply.data,
            postId = request.json['postId'],
            timeOfReply = date.today()
        )
        db.session.add(reply)
        db.session.commit()
        return reply.to_dict()


@reply_routes.route('/api/replies/<int:id>', methods=['PUT'])
def editReply(id):
    form = CreateReplyForm()
    if form.validate_on_submit():
        replyToEdit = Reply.query.filter(id == Reply.id).one()
        replyToEdit.userId = current_user.id
        replyToEdit.reply = form.reply.data
        replyToEdit.postId = request.json['postId']
        replyToEdit.timeOfReply = date.today()
        db.session.commit()
        return replyToEdit.to_dict()


@reply_routes.route('/api/replies/<int:id>', methods=['DELETE'])
def deleteReply(id):
    replyToDelete = Reply.query.get(id)
    db.session.delete(replyToDelete)
    db.session.commit()
    return replyToDelete.to_dict()
