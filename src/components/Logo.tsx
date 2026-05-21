import { Microscope } from "lucide-react";

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  const fg = light ? "text-background" : "text-royal-deep";
  const sub = light ? "text-background/70" : "text-slate-blue";
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
          light ? "bg-background/10 ring-1 ring-background/20" : "bg-primary text-primary-foreground"
        }`}
      >
        <Microscope className="h-5 w-5" strokeWidth={1.5} />
      </div>
      {!compact && (
        <div className="leading-tight">
          <div className={`font-display text-xl tracking-tight ${fg}`}>ADVET</div>
          <div className={`text-[10px] uppercase tracking-[0.18em] ${sub}`}>
            Anatomia Patológica Vet.
          </div>
        </div>
      )}
    </div>
  );
}
