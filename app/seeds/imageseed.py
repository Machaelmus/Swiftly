from app.models import db
from app.models import Image


def seed_images():
    image1 = Image(userId=11, albumId=3, imageUrl='https://www.cnet.com/a/img/RITWIMqGTlR3Q_mrDLkhNMj-soM=/940x0/2021/04/01/cf9c53a3-e1a2-4a17-85f6-0bae2c6157bb/2021-ford-mustang-mach-1-010.jpg')
    image2 = Image(userId=11, albumId=3, imageUrl='https://pictures.topspeed.com/IMG/crop/202109/ford-mustang-mach-1--8_1600x0w.jpg')
    image3 = Image(userId=11, albumId=3, imageUrl='https://pictures.topspeed.com/IMG/crop/202109/ford-mustang-mach-1--2_800x0w.jpg')
    image4 = Image(userId=11, albumId=3, imageUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wdmp-200510-02327-1592323762.jpg?crop=1xw:1xh;center,top&resize=480:*')
    image5 = Image(userId=11, albumId=2, imageUrl='https://www.petmd.com/sites/default/files/2020-11/picture-of-golden-retriever-dog_0.jpg')
    image6 = Image(userId=11, albumId=2, imageUrl='https://media1.popsugar-assets.com/files/thumbor/fe_TEBbRM3ZlH2WR2P-pI5hbqSI/876x0:4381x3505/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/18/763/n/46902966/4759e2855dfa5f7c857892.88399573_/i/what-kind-health-problems-do-golden-retrievers-have.jpg')
    image7 = Image(userId=11, albumId=1, imageUrl='https://www.fodors.com/wp-content/uploads/2019/01/take-a-vacation.jpg')


    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
