from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from models import *


ma=Marshmallow()

class UsersSchema(ma.SQLAlchemyAutoSchema):
   class Meta:
      model=User
      include_relationships=True
      load_instance=True
      include_fk=True



class RecipeSchema(ma.SQLAlchemyAutoSchema):
   class Meta:
      model=Recipe
      include_relationships=True
      load_instance=True
      include_fk=True




  



