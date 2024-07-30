from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'C:/Users/Nina/Desktop/FinalBlogProject/backend/users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.model):
    __tablename__ = 'users'
    username = db.Column(db.String(200), unique=True, primary_key=True)
    password = db.Column(db.String(200))
    email =  db.Column(db.String(200))
    phone = db.Column(db.Integer)
    age = db.Column(db.Integer)
    firstName = db.Column(db.String(200))
    lastName = db.Column(db.String(200))
    city = db.Column(db.String(200))
    country = db.Column(db.String(200))

    def __init__(self, username, password, email, phone, age, firstName, lastName, city, country):
        self.username = username
        self.password = password
        self.email = email
        self.phone = phone
        self.age = age
        self.firstName =  firstName
        self.lastName = lastName
        self.city = city
        self.country = country

def create_new_user(username, password, email):
    new_user = User(username=username, password=password, email=email)
    db.session.add(new_user)
    db.session.commit()
    
@app.route('/' , methods=['GET'])
def hello():
    return jsonify({"message": "ok"})

@app.route("/register", methods=['GET'])
def addNewUser():
    data = request.get_json()
    if 'username' in data and 'password' in data and 'email' in data:
        username = data['username'].strip()
        password = data['password'].strip()
        email = data['email'].strip()
        newUser = User.query.filter_by(email=email).first()
        if newUser:
            app.logger.info(f"Account already exists with this email: {newUser.email}")
            return jsonify({"message": "Account already exists with this email"}), 409
        
        create_new_user(username, password, email)
        return jsonify({"message": "User registered successfully"}), 201


if __name__ == '__main__':
    app.run(debug=True)
