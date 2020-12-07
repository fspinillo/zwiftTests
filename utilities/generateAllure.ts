const allure = require('allure-commandline');
const fs = require('fs-extra');
const path = require('path');
const rimraf = require('rimraf')
require('ts-node').register({ transpileOnly: true })



class reportUtilites {
    private generateReport() {
        var generation = allure(['generate', 'allure-results', '--clean']);
        const reportError = new Error('Could not generate Allure report')
        return new Promise((resolve, reject) => {
            generation.on('exit', function(exitCode) {
                if (exitCode !== 0) {
                    return reject(reportError)
                }
                resolve()
            });
        })
    }
    
    private async copyHistory() {
        const historyPath = path.join(process.cwd(), '/allure-report/history')
        const resultsPath = path.join(process.cwd(), '/allure-results/history')
        if(await fs.pathExists(historyPath)) {
            await fs.copy(historyPath, resultsPath)
        }
    }

    public async cleanUpXMLFiles() {
        rimraf(path.join(process.cwd(), '/allure-results/*.xml'), (err: any) => { if(err) { console.log(err)}; });
    }

    public async createReport() {
        await this.copyHistory()
        await this.generateReport()
        await this.cleanUpXMLFiles()
    }
    
}

export default new reportUtilites()