import {
    addNewContact,
    getContacts,
    getContactById,
    updateContact
} from '../controllers/crmController';


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
        .delete((req, res) =>
            res.send('DELETE successful')
        );
}

export default routes;