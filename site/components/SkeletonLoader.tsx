interface SkeletonLoaderProps {
  className?: string;
  height?: string;
  width?: string;
}

export default function SkeletonLoader({ 
  className = "", 
  height = "20px", 
  width = "100%" 
}: SkeletonLoaderProps) {
  return (
    <div 
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ height, width }}
    />
  );
}

export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} style={{ aspectRatio: "16/9" }} />
  );
}

export function TextSkeleton({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonLoader 
          key={i}
          height="16px" 
          width={i === lines - 1 ? "75%" : "100%"}
          className="mb-2"
        />
      ))}
    </div>
  );
}

