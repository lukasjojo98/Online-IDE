import subprocess
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/java', methods=['POST'])
def java():
    return render_template('java.html')

@app.route('/own', methods=['POST'])
def own():
    return render_template('own.html')

@app.route('/compile', methods=['POST'])
def compile_code():
    language = request.form.get('Language')
    code = request.form.get('code-text')
    if language == "Java":
        # Save the Java code to a temporary file
        with open('Main.java', 'w') as file:
            file.write(code)

        # Compile the Java code
        compilation_output = subprocess.getoutput('javac Main.java')
        runtime_output = subprocess.getoutput('java Main')

        return render_template('java.html', runtime_output=runtime_output)
    
    elif language == "Own":
        return render_template('own.html', runtime_output='none')
