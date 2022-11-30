import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Книги',
      posts: {
        create: [
          {
            title: 'Худеющий',
            userId: '13',
            text: 'Недавно прочитал страшный роман «Худеющий».',
            announceText: 'На мой взгляд, это один из самых страшных романов Стивена Кинга.'
          },
        ]
      },
    }
  });
  await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Компьютеры',
      posts: {
        create: [
          {
            title: 'Мой ноутбук',
            userId: '13',
            text: 'Это полный текст',
            announceText: 'Несколько лет назад купил себе MacBook Pro…',
            comments: {
              create: [
                {
                  text: 'Вау! Отличный ноутбук.',
                  userId: '14',
                }
              ]
            }
          },
          {
            title: 'Первый PC',
            userId: '13',
            text: 'Первый PC появился в 2000-м году…',
            announceText: 'Это был Pentium II, 400 Mhz, 32Mb RAM…'
          }
        ]
      }
    }
  });
  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })

