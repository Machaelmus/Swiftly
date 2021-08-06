from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired



class AddImageForm(FlaskForm):
    imageUrl = StringField('imageUrl', validators=[DataRequired()])
    albumId = StringField('albumId', validators=[DataRequired()])
