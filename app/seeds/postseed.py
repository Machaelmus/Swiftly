from datetime import date
from app.models import db
from app.models.post import Post

# Adds a demo user, you can add other users here if you want
def seed_posts():
    post1 = Post(
        userId='1', post='I\'m having a great day today!', timeOfPost=date.today())
    post2 = Post(
        userId='2', post='This is an amazing site.', timeOfPost=date.today())
    post3 = Post(
        userId='3', post='Who else is watching the Olympics?', timeOfPost=date.today())

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
