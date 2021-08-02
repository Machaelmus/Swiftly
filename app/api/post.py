from flask import Blueprint, request
from app.models import db, User
from app.models.post import Post, likedPost
from flask_login import current_user
from app.forms.post_form import CreatePostForm
from app.forms.edit_post_form import EditPostForm
from datetime import date


post_routes = Blueprint('posts', __name__)


@post_routes.route('/api/posts')
def getPosts():
    allPosts = Post.query.all()
    return {'posts': [post.to_dict() for post in allPosts]}


@post_routes.route('/api/posts/<int:id>', methods=['GET'])
def getPost(id):
    onePost = Post.query.get(id)
    return onePost.to_dict()


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


@post_routes.route('/api/posts/<int:id>', methods=['PUT'])
def editPost(id):
    form = EditPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        postToEdit = Post.query.filter(id == Post.id).one()
        postToEdit.userId = current_user.id,
        postToEdit.post = form.post.data,
        postToEdit.timeOfPost = date.today()
        db.session.commit()
        return postToEdit.to_dict()


@post_routes.route('/api/posts/<int:id>', methods=['DELETE'])
def deletePost(id):
    postToDelete = Post.query.get(id)
    db.session.delete(postToDelete)
    db.session.commit()
    return postToDelete.to_dict()


@post_routes.route('/api/posts/<int:id>/liked', methods=['POST'])
def likePost(id):
    currentPost = Post.query.get(id)
    postToLike = likedPost(
        userId = current_user.id,
        postId = currentPost
    )
    db.session.add(postToLike)
    db.session.commit()
    return postToLike.to_dict()


@post_routes.route('/api/posts/<int:id>/liked', methods=['DELETE'])
def unlikePost(id):
    postToUnlike = likedPost.query.get(id)
    db.session.delete(postToUnlike)
    db.session.commit()
    return postToUnlike.to_dict()
