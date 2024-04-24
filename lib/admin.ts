import { auth } from "@clerk/nextjs";

const IdsAdmin = ["user_2e04gkToA4ac4dGeoT8rq8yTadj"];

export const isAdmin = () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }

  return IdsAdmin.indexOf(userId) !== -1;
};
