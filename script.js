document.addEventListener('DOMContentLoaded', () => {
    const folderNameInput = document.getElementById('folderName');
    const createFolderButton = document.getElementById('createFolder');
    const folderSelect = document.getElementById('folderSelect');
    const fileInput = document.getElementById('fileInput');
    const uploadFileButton = document.getElementById('uploadFile');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const fileList = document.getElementById('fileList');

    // Create a new folder
    createFolderButton.addEventListener('click', () => {
        const folderName = folderNameInput.value.trim();
        if (folderName) {
            const option = document.createElement('option');
            option.value = folderName;
            option.textContent = folderName;
            folderSelect.appendChild(option);
            folderNameInput.value = ''; // Clear input
        }
    });

    // Upload files
    uploadFileButton.addEventListener('click', () => {
        const files = fileInput.files;
        if (files.length > 0) {
            loadingIndicator.style.display = 'block'; // Show loading indicator
            setTimeout(() => { // Simulate upload delay
                for (const file of files) {
                    const li = document.createElement('li');
                    li.textContent = file.name;
                    fileList.appendChild(li);
                }
                loadingIndicator.style.display = 'none'; // Hide loading indicator
                fileInput.value = ''; // Clear input
            }, 2000); // Simulate a delay of 2 seconds
        }
    });
});