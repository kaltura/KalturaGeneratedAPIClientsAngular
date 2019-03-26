export interface Environment {
    request: {
        apiVersion: string,
        avoidQueryString: boolean,
        fileFormatValue: number
    }
    response: {
        nestedResponse: boolean
    };
}

export const environment: Environment = {
    request: {
        apiVersion: '14.17.0',
        avoidQueryString: false,
        fileFormatValue: 1
    },
    response: {
        nestedResponse: false
    }
}