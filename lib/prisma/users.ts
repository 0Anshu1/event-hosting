import prisma from "./client";

export async function syncUser(clerkId: string, email: string, name?: string) {
  try {
    const user = await prisma.user.upsert({
      where: { clerkId },
      update: {
        email,
        name,
      },
      create: {
        clerkId,
        email,
        name,
      },
    });
    return user;
  } catch (error) {
    console.error("Error syncing user:", error);
    throw error;
  }
}
