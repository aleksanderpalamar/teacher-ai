"use client";

import { challengeOptions, challenges, userSubscription } from "@/db/schema";
import { useAudio, useWindowSize, useMount } from "react-use";


interface Props {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: typeof challengeOptions.$inferSelect[];
  })[];
  userSubscription: typeof userSubscription.$inferSelect & {
    isActive: boolean;
  } | null;
}

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription
}: Props) => {

  const { width, height } = useWindowSize()

  return (
    <>
    </>
  )
}