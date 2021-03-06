from datetime import date
from app.models import db
from app.models.album import Album


def seed_albums():
    album1 = Album(
        userId=1, coverPhotoUrl='https://cdn.travelpulse.com/images/54aaedf4-a957-df11-b491-006073e71405/ee952e9e-f09c-49c2-bc5d-4303c880173a/630x355.jpg', title='Summer Vacation', description='My family and I took a summer vacation to Hawaii!', albumCreatedAt=date.today())
    album2 = Album(
        userId=1, coverPhotoUrl='https://www.purina.co.uk/sites/default/files/2020-12/Travelling%20with%20Dogs%20The%20Full%20ChecklistTEASER.jpg', title='My doggo!', description='Sir Phillip!', albumCreatedAt=date.today())
    album3 = Album(
        userId=11, coverPhotoUrl='https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2021/collections/3_2/21_FRD_MUST_Mach1_wdmp_200510_01894_167.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg', title='My new car', description='A new car that I just purchased!', albumCreatedAt=date.today())

    db.session.add(album1)
    db.session.add(album2)
    db.session.add(album3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
