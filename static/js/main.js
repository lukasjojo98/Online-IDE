function sendFormForJava() {
    const form = document.codeForm;
    let input = document.createElement('input');
    input.value = document.getElementById('code').value;
    input.style = 'display: none;';
    input.name = 'code-text';
    input.style = "display: none;";
    form.append(input);
    let input2 = document.createElement('input');
    input2.value = 'Java';
    input2.name = 'Language';
    input2.style = "display: none;";
    form.append(input2);
    form.submit();
}

function sendFormForOwn() {
    const form = document.codeForm;
    let input = document.createElement('input');
    input.value = document.getElementById('code').value;
    input.style = 'display: none;';
    input.name = 'code-text';
    input.style = "display: none;";
    form.append(input);
    let input2 = document.createElement('input');
    input2.value = 'Own';
    input2.name = 'Language';
    input2.style = "display: none;";
    form.append(input2);
    form.submit();
}

function sendFormForIDE() {
    const form = document.codeForm;
    const value = document.getElementById('select-item').value;
    if(value == "java") {
        form.action = '/java';
    }
    else if(value == "own") {
        form.action = '/own';
    }
    form.submit();
}
