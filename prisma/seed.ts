import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@sanghadhammakolhapur.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@sanghadhammakolhapur.com",
      role: "ADMIN",
    },
  });

  // Create sample post
  const post = await prisma.post.upsert({
    where: { slug: "welcome-to-sangha-dhamma" },
    update: {},
    create: {
      title: "Welcome to Sangha Dhamma",
      slug: "welcome-to-sangha-dhamma",
      excerpt:
        "An introduction to our community and approach to Buddhist teachings",
      bodyPath: "content/posts/welcome-to-sangha-dhamma.mdx",
      tags: "introduction,community",
      status: "PUBLISHED",
      publishedAt: new Date(),
      authorId: admin.id,
    },
  });

  // Create sample event
  const event = await prisma.event.upsert({
    where: { id: "sample-event" },
    update: {},
    create: {
      id: "sample-event",
      title: "Weekly Meditation Session",
      description: "Join us for guided meditation and discussion",
      startsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Next week
      location: "Main Hall",
      status: "UPCOMING",
    },
  });

  console.log({ admin, post, event });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
