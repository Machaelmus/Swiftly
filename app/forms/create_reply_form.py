from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired



class EditReplyForm(FlaskForm):
    reply = StringField('reply', validators=[DataRequired()])
