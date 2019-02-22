import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: 'Project name is required'
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    projectLocation: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    createdUserId: {
        type: Number
    }
});
