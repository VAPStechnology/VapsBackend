import mongoose, { Schema } from "mongoose";

const ContactUsSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
)

export const ContactUs = mongoose.model("ContactUs", ContactUsSchema);

