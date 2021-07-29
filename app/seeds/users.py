from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    # profileImage
    # handle
    # status
    # bio
    demo = User(
        username='Demo', status='Doing nothing',  handle='#Demo-lition', profileImage='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', status='Im bored', handle='#MarnieMarn', profileImage='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', status='Who else saw the concert last week?', handle='#bobbybob', profileImage='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', email='bobbie@aa.io', password='password')
    michael = User(
        username='michael', status='Spiderman saved my friend last week!', handle='#RoamingMoose', profileImage='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', email='michael@mail.com', password='password')
    john = User(
        username='johncena', status='Its like Im not even here...', handle='#YouCantSeeMe', profileImage='https://resizing.flixster.com/IpEFWZUF1Cd_NZPC5gCEVhcJd-M=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/487578/487578_v9_ba.jpg', email='cantseeme@gmail.com', password='password')
    captainamerica = User(
        username='MrRodgers', status='Murica', handle='#Cap', profileImage='https://cdn.vox-cdn.com/thumbor/T-F4dV0PEp6eC-Z7lTu6fcdhDFQ=/0x0:1916x784/1200x800/filters:focal(517x45:823x351)/cdn.vox-cdn.com/uploads/chorus_image/image/59126061/Screen_Shot_2018_03_22_at_3.09.54_PM.0.png', email='cap@murica.net', password='password')
    ironman = User(
        username='ActualTonyStark', status='I need a new flux-incapacitator 9000 ', handle='#IncredibleTonyStark', profileImage='https://dailysuperheroes.com/wp-content/uploads/2020/02/tony-stark.jpg', email='tony@starkindustries.com', password='password')
    hulk = User(
        username='GreenGiant', status='HULK SMASH', handle='#Rawr', profileImage='https://cdn.vox-cdn.com/thumbor/Pvdo1lFYBBDbEG54FLW4tJ4pUcM=/0x0:2100x1181/1200x800/filters:focal(909x410:1245x746)/cdn.vox-cdn.com/uploads/chorus_image/image/67426099/experience_avengers_day.0.jpg', email='bruce@sciencecompany.com', password='password')
    wolverine = User(
        username='WeaponX', status='What do you want?', handle='#Bub', profileImage='https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/21/1464175888-hugh-jackman-muscles-claws-in-the-wolverine.jpg', email='scarybigclaws@xmen.com', password='password')
    spiderman = User(
        username='FriendlyNeighbor', status='Stop bullying!', handle='#Wooohooo', profileImage='https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg', email='peterparker@mail.com', password='password')


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
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
