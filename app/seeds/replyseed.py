from datetime import date
from app.models import db
from app.models.post import Post


def seed_replies():
    reply1 = Post(
        userId='1', postId='1', reply='Great post', timeOfReply=date.today())
    reply2 = Post(
        userId='1', postId='1', reply='Amazing', timeOfReply=date.today())
    reply3 = Post(
        userId='1', postId='1', reply='I didnt like what you had to say', timeOfReply=date.today())
    reply4 = Post(
        userId='1', postId='1', reply='Good insight, thanks!', timeOfReply=date.today())
    reply5 = Post(
        userId='1', postId='1', reply='No way man', timeOfReply=date.today())

    db.session.add(reply1)
    db.session.add(reply2)
    db.session.add(reply3)
    db.session.add(reply4)
    db.session.add(reply5)

    db.session.commit()


def undo_replies():
    db.session.execute('TRUNCATE replies RESTART IDENTITY CASCADE;')
    db.session.commit()