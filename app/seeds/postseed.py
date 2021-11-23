from datetime import date
from app.models import db
from app.models.post import Post


def seed_posts():
    post1 = Post(
        userId=10, post='Good morning to everyone! Especially to any dog with a very serious sounding human name like Reginald or Walter!', timeOfPost=date.today())
    post2 = Post(
        userId=2, post='I just did a triple-double 360 no-scope ultra-spin backflip-frontflip', timeOfPost=date.today())
    post3 = Post(
        userId=13, post='I hate it when I\'m cleaning my house and accidentally watch three seasons of a show...', timeOfPost=date.today())
    post4 = Post(
        userId=11, post='I am Groot...I am...Groot..I AM GROOOOOOOOOOOOOOOOOOOOOOOOOOOT!', timeOfPost=date.today())

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
