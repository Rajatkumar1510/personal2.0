import { Document, model, ObjectId, Schema } from "mongoose";
const mongoose = require('mongoose');
const userSchema = new Schema(
    {
        email: { type: String },
        password: { type: String, required: true },
        isVerified: { type: Boolean, default: false },
        fullname: { type: String },
        contact: { type: Number, trim: true },
        country_code: { type: Number, trim: true },
        password_change: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
        email_verify: { type: Boolean, default: false },
        contact_verify: { type: Boolean, default: false },
        username: { type: String, required: true, unique: true, trim: true },
        profile_picture: { type: String },
        business: { type: Schema.Types.ObjectId },
        institute: { type: Schema.Types.ObjectId, ref: "institute" },
        lastLoginAt: { type: String, enum: ["LMS", "Ecommerce", "Services", "Landing", "null"], default: "null" },
        vertical_type: { type: String, enum: ["Edneed", "Webneed"] },
        activeRole: { type: Schema.Types.ObjectId, ref: 'role' },
        user: { type: Schema.Types.ObjectId },
        whatsapp_contact: { type: Number, trim: true },
        lastLoginDate: { type: Date },
        googleID: { type: String },
        verifyShortToken: { type: String },
        signup_method: { type: String, enum: ["Email", "Contact"] },

        resetShortToken: { type: String },
    },
    {
        timestamps: true,
    }
);

export interface IUser extends Document {
    email: String | Number;
    googleID: String;
    fullname: string;
    firstname: string;
    lastname: string;
    contact: Number | String
    isVerified: Boolean;
    contact_verify: Boolean;
    otp: String;
    otpId: String;
    password: string
    role: string;
    institute: ObjectId;
    modified_on?: Date;
    token?: string;
    refreshToken?: string;
    userRoles?: string[];
    whatsapp_contact?: number;
    whatsapp_country_code?: Number;
    lastLoginDate?: Date;
    otherUserTypeName: string;
    username: string;
    institute_domain: any;
    isContactLogin: any;
    message: string;
    activeRole: ObjectId;
    _id: ObjectId;
    user_role: any
    email_verify: Boolean;
    lastLoginAt: String,
    websiteType: any,
    business: ObjectId | undefined,
    country_code: Number,
    password_change: Boolean,
    user: ObjectId | unknown,
    vertical_type: any
}
// user

export default model<IUser>("Users", userSchema);
