from api import db

class User(db.Model):
   __tablename__='users'
   id = db.Column( db.Integer, primary_key = True)
   fullname=db.Column(db.String(100))
   email = db.Column(db.String(120))   
   password = db.Column(db.Text)
   
   
class Recipe(db.Model):
   __tablename__='recipes'
   id =db.Column(db.Integer,primary_key=True)
   name=db.Column(db.String(700))
   description=db.Column(db.String(700))
   foodRecipe=db.Column(db.String(700))
   user_id=db.Column(db.Integer)
   ratingCount = db.Column(db.Integer) 
   averageScore = db.Column(db.Integer)

db.create_all()