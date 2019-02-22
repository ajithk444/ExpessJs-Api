import mongoose from 'mongoose';
import { ProjectSchema } from '../models/projectModel';


const Project = mongoose.model('Project', ProjectSchema);

export const addNewProject = (req, res) => {
    let newProject = new Project((req.body));
    newProject.save((err, project) => {
        if (err) {
            res.send(err);
        }
        res.json(project);
    });
};


export const getProjects = (req, res) => {
    Project.find({}, (err, project) => {
        if (err) {
            res.send(err);
        }
        res.json(project);
    });
};
