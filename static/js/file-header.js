let files = [];
let activeFile = null;

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementsByClassName('add-button')[0];
    const fileHeader = document.getElementsByClassName('file-header')[0];
    const codeArea = document.getElementById('code');

    // Initial main file
    files.push({ name: 'Main.java', content: '' });
    activeFile = files[0];

    codeArea.addEventListener("input", () => {
        if (activeFile) {
            activeFile.content = codeArea.value;
        }
    });

    // File click handler
    fileHeader.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("file-item")) {
            switchActiveFile(target.innerText);
        }
    });

    // Add file button click
    addButton.addEventListener("click", () => {
        const inp = document.createElement('input');
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';

        inp.placeholder = "Enter filename";
        fileItem.appendChild(inp);
        fileHeader.insertBefore(fileItem, addButton);

        inp.focus();

        inp.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                const name = inp.value.trim();
                if (name && !files.some(f => f.name === name)) {
                    const newFile = { name: name, content: '' };
                    files.push(newFile);
                    fileItem.innerText = name;
                    switchActiveFile(name);
                    console.log(files);
                } else {
                    alert("Invalid or duplicate filename.");
                    fileItem.remove();
                }
            }
        });
    });

    // Load Main.java content initially
    codeArea.value = activeFile.content;
});

function switchActiveFile(name) {
    const codeArea = document.getElementById('code');

    // Save current content
    if (activeFile) {
        activeFile.content = codeArea.value;
    }

    const file = files.find(f => f.name === name);
    if (file) {
        activeFile = file;
        codeArea.value = file.content;
    }
}
