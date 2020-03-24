const fs = require('fs');

class Runner {
    constructor() {
        this.files = [];
    }

    // Walk through directory structure to find test files and add them to this.files
    async collectFiles(targetPath) {
        const files = await fs.promises.readdir(targetPath);

        return files;
    }
}

module.exports = Runner;