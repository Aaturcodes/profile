from flask import Flask, render_template
from markupsafe import escape

app = Flask(__name__)

@app.route("/name/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/articles')
def articles():
    return render_template('articles.html')

if __name__ == '__main__':
    app.run(debug=True)
