from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/add', methods=['GET', 'POST'])
# def add_Project():
    

#     return render_template('AddProject.html')

if __name__ == '__main__':
    app.run(debug=True)
