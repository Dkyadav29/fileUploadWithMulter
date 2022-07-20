const {register, login,upload} = require('../controlers/index')
const  uploadFileMiddleware = require('../middleware/uploadfiles')

module.exports = (app) => {
     
    app.post("/registeruser",  register);
    // app.post("/login",login);
    //  app.post("/upload",  upload);
};
