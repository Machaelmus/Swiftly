from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError



class CreateAlbumForm(FlaskForm):
    coverPhotoUrl = StringField('coverPhotoUrl', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
