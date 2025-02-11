from flask import Flask, render_template, request, url_for, redirect, session

app = Flask(__name__)
app.secret_key = 'Secret'


@app.route('/')
def home():
    if 'name' in session:
        name = session['name']

        return render_template('index.html', style = "/static/style.css")


@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        session['name'] = request.form['name']

        return redirect(url_for('home'))


@app.route('/logout')
def logout():

    session.pop('name', None)
    return redirect(url_for('Contact'))

@app.route('/about')
def About():
    if 'name' in session:
        name = session['name']
        
        return render_template('About.html')


@app.route('/contact')
def Contact():
    return render_template('Contact.html')


if __name__ == '__main__':
    app.run(debug=True)