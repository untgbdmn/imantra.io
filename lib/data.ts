import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getUsers = async () => {
    const session = await auth();
    if (!session || !session.user)
        redirect("/dashboard");
    console.log(session)

    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.log(error);
    }
};
