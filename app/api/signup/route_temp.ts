
import { PrismaClient } from "@/app/generated/prisma";
const client = new PrismaClient();

import {z} from "zod";

const userSchema = z.object({
    name: z.string().toLowerCase(),
    email : z.email().toLowerCase(),
    username: z.string().toLowerCase(),
    password : z.string().min(8).regex(/(?=.*[!@#$%^&*()_=+-/.{}|';":><?\\])/),
})

export async function POST(req:Request){
    const body = await req.json();

    const b = userSchema.safeParse(body);
    if(!b.success){
        return Response.json({
            message: "Invadlid Data"
        }, {status: 405})
    }
    const name = body?.name;
    const email = body?.email;
    const username = body?.username;
    const password = body?.password

    try{
    const c = await client.user.create({
        data: {
            name: name,
            email,
            username,
            password
        }
    })
    
    console.log(c);
    return Response.json({
        message: "User signed up succesfully"
    },{status: 200})
}
catch(e){
    const msg = e instanceof Error ? e.message : "Something went wrong";
    return Response.json({
        message: msg
    }, {status: 400})

}
}
