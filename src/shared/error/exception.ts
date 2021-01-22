export class Exception extends Error {
    constructor(message: string) {
        super();
        this.message = message;
        this.name = 'ERROR';
    }
}