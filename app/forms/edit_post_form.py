from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

def contentExists(form, field):
    postContent = field.data
    if not postContent:
        raise ValidationError('Please enter a message')


class EditPostForm(FlaskForm):
    post = StringField('post', validators=[DataRequired()])
