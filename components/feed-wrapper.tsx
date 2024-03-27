import { ReactNode } from "react";

interface FeedWrapperProps {
  children: ReactNode;
}

export const FeedWrapper = ({ children }: FeedWrapperProps) => {
  return (
    <div className="flex-1 relative top-0 pb-10">
      {children}
    </div>
  );
};