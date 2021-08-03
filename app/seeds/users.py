from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    # profileImage
    # handle
    # status
    # bio
    demo = User(
        username='Demo', status='Doing nothing',  handle='#Demo-lition', profileImage='https://wallpapercave.com/wp/wp7810895.jpg', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', status='Im bored', handle='#MarnieMarn', profileImage='https://wallpapercave.com/wp/wp7810895.jpg', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', status='Who else saw the concert last week?', handle='#bobbybob', profileImage='https://wallpapercave.com/wp/wp7810895.jpg', email='bobbie@aa.io', password='password')
    michael = User(
        username='michael', status='Spiderman saved my friend last week!', handle='#RoamingMoose', profileImage='https://wallpapercave.com/wp/wp7810895.jpg', email='michael@mail.com', password='password')
    john = User(
        username='johncena', status='Its like Im not even here...', handle='#YouCantSeeMe', profileImage='https://resizing.flixster.com/IpEFWZUF1Cd_NZPC5gCEVhcJd-M=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/487578/487578_v9_ba.jpg', email='cantseeme@gmail.com', password='password')
    captainamerica = User(
        username='MrRodgers', status='Murica', handle='#Cap', profileImage='https://cdn1-www.superherohype.com/assets/uploads/2011/09/file_168508_0_ewavengersheadshots1.jpg', email='cap@murica.net', password='password')
    ironman = User(
        username='TonyStark', status=':D', handle='#IncredibleTonyStark', profileImage='https://cdn-www.comingsoon.net/assets/uploads/2011/09/file_82704_1_ewavengersheadshots2.jpg', email='tony@starkindustries.com', password='password')
    hulk = User(
        username='GreenGiant', status='HULK SMASH', handle='#Rawr', profileImage='https://www.ramascreen.com/wp-content/uploads/The-Avengers-Bruce-Banner_Hulk.jpg', email='bruce@sciencecompany.com', password='password')
    wolverine = User(
        username='Wolverine', status='What do you want?', handle='#Bub', profileImage='https://media.vanityfair.com/photos/591f645412adfc468fcd6446/9:16/w_540,h_960,c_limit/wolverine-and-wolverine.jpg', email='scarybigclaws@xmen.com', password='password')
    spiderman = User(
        username='Spidey', status='Stop bullying!', handle='#Wooohooo', profileImage='https://pbs.twimg.com/media/EOLTlIIW4AE8zYZ.jpg', email='peterparker@mail.com', password='password')
    groot = User(
        username='Groot', status='...I am groot...', handle='#IAMGROOOT', profileImage='https://c4.wallpaperflare.com/wallpaper/204/71/692/movie-guardians-of-the-galaxy-vol-2-baby-groot-groot-wallpaper-thumb.jpg', email='tree@branch.com', password='password')
    starlord = User(
        username='Quill', status='Boooyah!', handle='#Spaceman', profileImage='https://i.pinimg.com/originals/13/81/69/138169aa7f1ec532ffceb5ffec840496.jpg', email='starlord@awesomesauce.com', password='password')
    thanos = User(
        username='Thanos', status='My power shall consume the galaxy!', handle='#Conquer', profileImage='https://www.sideshow.com/storage/product-images/903429/thanos_marvel_square.jpg', email='bigscarythumb@purplebadguy.com', password='password')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(michael)
    db.session.add(john)
    db.session.add(captainamerica)
    db.session.add(ironman)
    db.session.add(hulk)
    db.session.add(wolverine)
    db.session.add(spiderman)
    db.session.add(groot)
    db.session.add(starlord)
    db.session.add(thanos)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
