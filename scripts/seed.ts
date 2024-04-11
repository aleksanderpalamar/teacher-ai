import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "English",
        imageSrc: "/assets/gb.svg",
      },
      {
        id: 2,
        title: "Spanish",
        imageSrc: "/assets/es.svg",
      },
      {
        id: 3,
        title: "Italian",
        imageSrc: "/assets/it.svg",
      },
      {
        id: 4,
        title: "French",
        imageSrc: "/assets/fr.svg",
      },
      {
        id: 5,
        title: "Japanese",
        imageSrc: "/assets/jp.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // English
        title: "Unit 1",
        description: "Learn the basics of English",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 3,
        title: "Verbs",
      },
      {
        id: 4,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 4,
        title: "Verbs",
      },
      {
        id: 5,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 5,
        title: "Verbs",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // Which one of these is "the man"?
        imageSrc: "/assets/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/audio/audio/es_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/assets/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/audio/audio/es_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/assets/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/audio/audio/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // "the man"?
        correct: true,
        text: "el hombre",
        audioSrc: "/audio/es_man.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "la mujer",
        audioSrc: "/audio/es_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "el robot",
        audioSrc: "/audio/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // Which one of these is the "the robot"?
        imageSrc: "/assets/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/audio/es_man.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/assets/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/audio/es_woman.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/assets/robot.svg",
        correct: true,
        text: "el robot",
        audioSrc: "/audio/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2, // Verbs
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 5,
        lessonId: 2, // Verbs
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 6,
        lessonId: 2, // Verbs
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
