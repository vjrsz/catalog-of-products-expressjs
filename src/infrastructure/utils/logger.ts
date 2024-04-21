import * as fs from 'fs';
import moment from "moment";
import config from "../../config/config";
import winston from "winston";

class Logger {
    private readonly baseDir: string;
    private readonly fileName: string;
    private readonly logger: winston.Logger;

    constructor() {
        let _dateString = moment().format('YYYY-MM-DD');

        this.baseDir = config.logger.dir;
        this.fileName = `${_dateString}.log`;

        this.logger = winston.createLogger({
            format: winston.format.json(),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: `${this.baseDir}/${this.fileName}` }),
            ],
        });

    }
    //`${this.linePrefix} [${kind}] ${msg}\n`
    public info(message: string): void {
        this.log('info', message)
    }

    public warn(message: string): void {
        this.log('warn', message)
    }

    public error(message: string): void {
        this.log('error', message)
    }

    public log(level: string, message: string): void {
        let meta = this._getDefaultMeta()

        this.logger.log(level, message, meta);
    }

    public clean (): void {
        //
    }

    private _getDefaultMeta(){
        return {
            time: moment().format("HH:mm:ss")
        }
    }
}

export default new Logger();
