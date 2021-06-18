const tokenPrefix = "injection-token-";
const stateTokenPrefix = tokenPrefix + "state-";
const toolsTokenPrefix = tokenPrefix + "tools-";
const apiTokenPrefix = tokenPrefix + "api-";

export const STATE = {
    QUERY: {

    },
    COMMAND: {

    }
}

export const INJECTION_TOKEN = {
    STATE: STATE,
    API: {

    },
    TOOLS:{
        TOASTER: toolsTokenPrefix + "tools-toaster"
    }
}