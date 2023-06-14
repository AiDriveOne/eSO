from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/perform_task', methods=['POST'])
def perform_task():
    data = request.json

    # Extract the task and data from the request
    task = data.get('task')
    data = data.get('data')

    if task and data:
        # Perform the task and get the result
        result = perform_task_logic(task, data)

        # Return the result as JSON response
        return jsonify({'result': result})

    return jsonify({'error': 'Invalid task or data'})

def perform_task_logic(task, data):
    # Placeholder implementation for the task logic
    # Replace with your actual logic
    if task == 'text_classification':
        return "Performing text classification on: " + data
    elif task == 'voice_classification':
        return "Performing voice classification on: " + data
    else:
        return "Unsupported task"

if __name__ == '__main__':
    app.run()
