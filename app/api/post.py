from flask import Blueprint, request
from app.models import db
from app.models.post import Post
from flask_login import current_user
from app.forms.post_form import CreatePostForm
from datetime import date


post_routes = Blueprint('posts', __name__)


@post_routes.route('/api/posts')
def getPosts():
    allPosts = Post.query.all()
    return {'posts': [post.to_dict() for post in allPosts]}


@post_routes.route('/api/posts', methods=['POST'])
def createPost():
    form = CreatePostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post(
            userId = current_user.id,
            post = form.post.data,
            timeOfPost = date.today()
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
