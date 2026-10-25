import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

function Skills({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
      {skills.map(({ name, Icon, color }) => (
        <div
          key={name}
          style={{
            backgroundColor: `color-mix(in srgb, ${color} 8%, #202329)`,
            borderColor: `color-mix(in srgb, ${color} 22%, transparent)`,
          }}
          className="flex min-w-0 items-center justify-center gap-1.5 rounded-lg border px-2 py-2.5 transition-all duration-300 hover:-translate-y-0.5 sm:gap-2 sm:px-2.5"
        >
          <Icon size={18} color={color} className="shrink-0 sm:size-5" />

          <span className="min-w-0 truncate text-xs font-medium text-foreground sm:text-sm">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
