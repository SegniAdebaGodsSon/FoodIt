from re import M, fullmatch
from typing import Text
from flask import Blueprint, Flask, jsonify, request, make_response
import random
from flask.wrappers import Response
from api import app
import jwt
import datetime
from functools import wraps
from flask_cors import CORS, cross_origin
from werkzeug.security import generate_password_hash, check_password_hash
from models import *
from maschema import *
from api import db
from flask_restful import Api, Resource, marshal_with,fields

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Blueprint('api', __name__, url_prefix='/api')
recipe_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'foodRecipe': fields.String,
    'user_id': fields.String,
    'rating_count': fields.String
}
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return jsonify({'message' : 'Token is missing'}), 403
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms="HS256")
        except:
            return jsonify({'message' : 'Token is Invalid'}), 403
        return f(*args, **kwargs)

    return decorated

@api.route('/authenticate')
@cross_origin()
def authenticate():
    email = request.args.get('email')
    password = request.args.get('password')
    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'message': "Incorrect credentials"})
    
    expiration = datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    token = jwt.encode({'user':user.email, 'expiration':str(expiration)}, app.config['SECRET_KEY'])
    return jsonify({'token': token, 'message':'validated'})


@api.route('/signup', methods=['GET','POST']) #signup page
@cross_origin()
def CreateAccount():
    data = request.get_json()
    fullname = data['fullname']
    email = data['email']
    password = data['password']
    passwordsalt = str(generate_salt())
    user = User.query.filter_by(email=email).first()

    if user:
        return jsonify({'message': "Email Already Exists"})

    user = User(fullname=fullname, email=email, password=generate_password_hash(password))
    db.session.add(user)
    db.session.commit()

    return jsonify({'message':'Account Created'})



#is a protected route
@api.route('/Recipes',methods=['GET']) #home page
@cross_origin()
# @token_required
def AllRecipes():
        
    recipeList=Recipe.query.all()
    rec_schema=RecipeSchema()
    return rec_schema.dump(recipeList)




@api.route('/Recipes/<int:id>',methods=['GET','POST'])#description of of the recipe 
@cross_origin()
# @token_required
def DesRecipe(id):
    if request.method=="GET":
        id=request.args.get(id)
        recipeList=Recipe.query.filter_by(id=id).first()
        rec_schema=RecipeSchema()
        return rec_schema.dump(recipeList)
    elif request.method=="PATCH":
        id=request.args.get(id)
        recipeList=Recipe.query.filter_by(id=id).first()
        if not recipeList:
            return ("404 doesnot exist, cannot update")
        else:
            result=res
        

@api.route('/<int:user_id>/recipes',methods=["GET","POST"])#my recipes
@cross_origin()
# @token_required0
# def UserRecipes(user_id):
#         if request.method=="GET":
#             user_id=request.args.get('user_id')
#             recipeList=Recipe.query.filter_by(user_id=user_id).first()
#             rec_schema=RecipeSchema()
#             return rec_schema.dump(recipeList)  
#         elif request.method=="POST":
#             nr=Recipe()
#             nr.name=request.json['name']
#             nr.description=request.json['description']
#             nr.foodRecipe=request.json['foodRecipe']
#             nr.user_id=request.json['user_id']
#             db.session.add(nr)
#             db.session.commit()
#             return{"Recipe":"register nr"}

def UserRecipes(user_id):
        if request.method=="GET":
            user_id=request.args.get('user_id')
            recipeList=Recipe.query.filter_by(user_id=user_id).first()
            rec_schema=RecipeSchema()
            return rec_schema.dump(recipeList)  
        elif request.method=="POST":
            data=request.get_json()
            name=data['name']
            description=data['description']
            foodRecipe=data['foodRecipe']
            user_id=data[request.args.get('user_id')]
            newRecipe=Recipe(name=name,description=description,foodRecipe=foodRecipe,user_id=user_id)
            db.session.add(newRecipe)
            db.session.commit()
            return{"Recipe":"register nr"}            

@api.route('/<int:user_id>/recipes/<int:rid>',methods=["DELETE"])
@cross_origin()
# @token_required0
def UserRecipesDelete(user_id,rid):
        if request.method=="DELETE":
            user_id = request.args.get('user_id')
            rid = request.args.get('rid')
            userList=Recipe.query.filter_by(user_id=user_id, id=rid).first()
            if not userList: return  ("not FileNotFoundError")
            db.session.delete(userList)
            db.session.commit()
            return "Deleted succesfully"
        elif request.method=="POST":
            nr=Recipe()
            nr.name=request.json['name']
            nr.description=request.json['description']
            nr.foodRecipe=request.json['foodRecipe']
            nr.user_id=request.json['user_id']
            db.session.add(nr)
            db.session.commit()
            return{"Recipe":"register nr"}
        



@api.route('/Recipes/<int:id>',methods=['GET','DELETE'])
@cross_origin
# @token_required
class RecipeId(Resource):
    @marshal_with(recipe_fields)
    def get(Self,):
        recipeList=Recipe.query.filter(recipe_id=id).first
        if recipeList: 
            return recipe_fields
        return {"nothing is found"}

    


# @api.route('/Recipes/<int:id>',methods=['GET','POST'])
# # @token_required
# class Recipe(Resource):
#     @marshal_with(recipe_fields)
#     def get(Self,):
#         recipeList=Recipe.query.filter()
#         if recipeList: 
#             return recipe_fields
#         return {"nothing is found"}


@api.route('/')
def index():
    return "Ok"
    
def generate_salt():
    choices = random.choices("abcdefghijklmnopqrstuvwxyz1234567890", k=10)
    return "".join(str(e) for e in choices)


