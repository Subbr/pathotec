import logoAsset from "@/assets/pathotec-logo-v2.png.asset.json";

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  const sub = light ? "text-background/75" : "text-slate-blue";
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoAsset.url}
        alt="Pathotec"
        className={`h-8 w-auto md:h-9 ${light ? "brightness-0 invert" : ""}`}
      />
      {!compact && (
        <div className={`hidden border-l pl-3 leading-tight sm:block ${light ? "border-background/25" : "border-border"}`}>
          <div className={`text-[10px] uppercase tracking-[0.18em] ${sub}`}>
            Anatomia Patológica<br />Veterinária
          </div>
        </div>
      )}
    </div>
  );
}
