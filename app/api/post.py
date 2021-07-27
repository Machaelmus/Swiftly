from flask import Blueprint
from app.models.post import Post
from flask_login import current_user

post_routes = Blueprint('posts', __name__)


@post_routes.route('/api/posts')
def getPosts():
    allPosts = Post.query.all()
    return {'posts': [post.to_dict() for post in allPosts]}
