from flask import Blueprint, request
from app.models import db
from app.models.post import Post, likedPost
from flask_login import current_user


like_routes = Blueprint('likes', __name__)


@like_routes.route('/api/likes/<int:id>', methods=['POST'])
def likePost(id):
    postToLike = Post.query.get(id)
    current_user.likePost(postToLike)
    db.session.commit()
    return postToLike.to_dict()


@like_routes.route('/api/likes/<int:id>', methods=['DELETE'])
def unlikePost(id):
    postToUnlike = Post.query.get(id)
    current_user.unlikePost(postToUnlike)
    db.session.commit()
    return postToUnlike.to_dict()
