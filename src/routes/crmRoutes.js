import {
    addNewContact,
    getContacts,
    getContactById,
    updateContact   ,
    deleteContactById
} from '../controllers/crmController';

import {
    addNewProject,
    getProjects
} from '../controllers/projectController';

const routes = (app) => {
    app.route('/contact')
        // .get((req, res, next) => {
        //     //middleware
        //     console.log(`request from ${req.originalUrl}`);
        //     console.log(`request from ${req.method}`);
        //     next();
        // }, getContacts)

        //GET endpoint
        .get(getContacts)

        //POST endpoint
        .post(addNewContact);

    app.route('/contact/:contactId')
        //GET method // get contact by ID
        .get(getContactById)

        //PUT method
        .put(updateContact)

        //DELETE method
        .delete(deleteContactById);

    app.route('/project')
        //GET endpoint
        .get(getProjects)
        
        //POST endpoint
        .post(addNewProject);
}

export default routes;
