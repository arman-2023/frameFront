import { init } from "@rematch/core";
import * as models from "./blogModel";
import loadingPlugin from "@rematch/loading"
const store = init({ 
    models: models, 
    plugins: [loadingPlugin()],
});



export default store;