const tokenPrefix = "injection-token-";
const stateTokenPrefix = tokenPrefix + "state-";
const toolsTokenPrefix = tokenPrefix + "tools-";
const apiTokenPrefix = tokenPrefix + "api-";

const STATE = {
    QUERY: {
        ROOT: stateTokenPrefix + "query-root"
    },
    COMMAND: {
        ROOT: stateTokenPrefix + "command-root"
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