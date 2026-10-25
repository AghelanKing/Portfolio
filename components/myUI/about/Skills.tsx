import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

function Skills({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map(({ name, Icon, color }) => (
        <div
          key={name}
          style={{
            backgroundColor: `color-mix(in srgb, ${color} 8%, #202329)`,
            borderColor: `color-mix(in srgb, ${color} 22%, transparent)`,
          }}
          className="flex h-12 w-36 shrink-0 items-center justify-center gap-2 rounded-xl border transition-all duration-300 hover:-translate-y-1"
        >
          <Icon size={19} color={color} />

          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
