import mongoose from "mongoose";
declare const model: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    role: "User" | "Admin";
    cart: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }>;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: "User" | "Admin";
    cart: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }>;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    email: string;
    password: string;
    role: "User" | "Admin";
    cart: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }>;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    email: string;
    password: string;
    role: "User" | "Admin";
    cart: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }>;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: "User" | "Admin";
    cart: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }>;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    name: string;
    email: string;
    password: string;
    role: "User" | "Admin";
    cart: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }>;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        email: string;
        password: string;
        role: "User" | "Admin";
        cart: mongoose.Types.DocumentArray<{
            quantity: number;
            product?: mongoose.Types.ObjectId | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            quantity: number;
            product?: mongoose.Types.ObjectId | null;
        }, {}, {}> & {
            quantity: number;
            product?: mongoose.Types.ObjectId | null;
        }>;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        name: string;
        email: string;
        password: string;
        role: "User" | "Admin";
        cart: mongoose.Types.DocumentArray<{
            quantity: number;
            product?: mongoose.Types.ObjectId | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            quantity: number;
            product?: mongoose.Types.ObjectId | null;
        }, {}, {}> & {
            quantity: number;
            product?: mongoose.Types.ObjectId | null;
        }>;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    email: string;
    password: string;
    role: "User" | "Admin";
    cart: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }>;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    email: string;
    password: string;
    role: "User" | "Admin";
    cart: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null;
    }>;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default model;
//# sourceMappingURL=userModel.d.ts.map