"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Loader from "@/components/ui/Loader";

interface LoadingContextType {
  progress: number;
  setProgress: (progress: number) => void;
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType>({
  progress: 0,
  setProgress: () => {},
  isLoading: true,
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ progress, setProgress, isLoading }}>
      {/* Container locks view height while loading */}
      <div className={isLoading ? "h-screen overflow-hidden relative" : "min-h-screen"}>
        {isLoading && (
          <Loader
            progress={progress}
            onComplete={() => setIsLoading(false)}
          />
        )}
        
        {/* Render page children in DOM so 3D models fetch immediately */}
        <div className={isLoading ? "invisible opacity-0" : "visible opacity-100 transition-opacity duration-500"}>
          {children}
        </div>
      </div>
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);