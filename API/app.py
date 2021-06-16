from flask import Flask,Request
from flask_marshmallow import Marshmallow
from werkzeug.utils import cached_property
from flask_restx import Api, Resource, fields


from settings import *
from models import *
from maschema import *

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] ="postgresql://gdndtdwhpzvfez:ad98683535d8dca430cf492ba1501227d672b6f13b7f6248f04454201b1cc0b3@ec2-54-158-232-223.compute-1.amazonaws.com:5432/dd0u73q5k3elm3" 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db.init_app(app)
ma=Marshmallow(app)

api=Api(app)



user_schema=UsersSchema()
users_Schema=UsersSchema(many=True)

recipe_schema=RecipeSchema()
recipes_schema=RecipeSchema(many=True)

review_schema=ReviewSchema()
reviews_schema=ReviewSchema(many=True)


@api.route('/recipes')
class RecipeResource(Resource):
    def get(self):
        recipes=Recipe.query.all()
        return recipes_schema.dump(recipes)