export interface ColouredRingsProps {
  side?: 'left' | 'right';
}

export const ColouredRings = ({ side = 'left' }: ColouredRingsProps) => {
  return (
    <div
      className={`h-full aspect-square absolute bottom-0 translate-y-1/2
      ${side === 'left' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`}>
      <div className="w-full h-full rounded-full bg-primary/30 hover:bg-primary/50 grid place-items-center transition-all duration-1000 ease-in-out">
        <div className="w-7/10 aspect-square rounded-full bg-primary/30 hover:bg-primary/65 transition-all duration-1000 ease-in-out" />
      </div>
    </div>
  );
};
