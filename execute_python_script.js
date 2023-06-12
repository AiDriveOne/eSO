const { spawn } = require('child_process');

function runPythonScript(scriptPath, args) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python3', [scriptPath, ...args]);

    let result = '';
    let error = '';

    pythonProcess.stdout.on('data', (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      error += data.toString();
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        resolve(result.trim());
      } else {
        reject(new Error(`Python process exited with code ${code}. Error: ${error.trim()}`));
      }
    });
  });
}

// Example usage:
runPythonScript('/Users/mac/My Drive/eso/my_script.py', ['arg1', 'arg2'])
  .then((result) => {
    console.log('Python script execution result:', result);
  })
  .catch((error) => {
    console.error('Error executing Python script:', error);
  });
