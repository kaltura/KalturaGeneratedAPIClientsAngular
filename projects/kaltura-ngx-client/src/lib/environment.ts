export interface Environment {
    request: {
        apiVersion: string,
        avoidQueryString: boolean,
        fileFormatValue: number
    }
    response: {
        nestedResponse: boolean,
        customErrorInHttp500: boolean
    };
}

export const environment: Environment = {
    request: {
        apiVersion: '16.12.0',
        avoidQueryString: false,
        fileFormatValue: 1
    },
    response: {
        nestedResponse: false,
        customErrorInHttp500: false
    }
}