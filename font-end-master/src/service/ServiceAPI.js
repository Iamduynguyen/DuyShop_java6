import React from 'react';

const ServerAPI = {
    convertNameFile(nameFile){
        let date = new Date();
        return date + nameFile;
    },
    toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    },
    saveToGit(data, nameFile) {
        fetch('https://api.github.com/repos/ngocnqph12806/Repo_File/contents/' + nameFile, {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer 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",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "message": "uploading a file in date: " + nameFile,
                "content": data
            }),
        })
            .then(response => response.json())
            .then(out => {
                console.log("up thành công");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
};

export default ServerAPI;