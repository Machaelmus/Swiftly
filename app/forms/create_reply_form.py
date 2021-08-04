from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError



class CreateReplyForm(FlaskForm):
    reply = StringField('reply', validators=[DataRequired()])

