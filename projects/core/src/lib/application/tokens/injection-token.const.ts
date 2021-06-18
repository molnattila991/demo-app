const tokenPrefix = "injection-token-";
const stateTokenPrefix = tokenPrefix + "state-";
const toolsTokenPrefix = tokenPrefix + "tools-";
const apiTokenPrefix = tokenPrefix + "api-";

const STATE = {
    QUERY: {
        ROOT: stateTokenPrefix + "query-root",
        FeatureA: stateTokenPrefix + "query-feature-a",
        FeatureB: stateTokenPrefix + "query-feature-b"
    },
    COMMAND: {
        ROOT: stateTokenPrefix + "command-root",
        FeatureA: stateTokenPrefix + "command-feature-a",
        FeatureB: stateTokenPrefix + "command-feature-b"
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