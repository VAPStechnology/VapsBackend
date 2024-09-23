import { ContactUs } from "../models/contactUs.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import sendEmail from "../utils/mailer.js";



const formSubmit = asyncHandler(async(req,res)=>{

    const {name, email, message} = req.body;
    
    if(!name ||!email ||!message){
        throw new ApiError(400, "Please fill in all fields");
    }

    const userForm = await ContactUs.create({
        name,
        email,
        message,
    })

    await sendEmail(
        "ankitgupta98685@gmail.com",
        "New Contact Us Form Submission",
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`

    );

    const createdForm = await ContactUs.findOne({email});

    if(!createdForm){
        throw new ApiError(500, "Failed to create contact us form");
    }
    
    return res
    .status(201)
    .json(new ApiResponse(200, null, "Form submitted successfully"));

});


export { formSubmit };






