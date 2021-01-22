export class Error {
    code: number | undefined;
    message: string | undefined;
}

export class RPCResponse<T> {
    result?: T;
    error?: Error;
    id: string | undefined;
}