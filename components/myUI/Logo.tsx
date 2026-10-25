import Image from "next/image";

function Logo({ className }: { className?: string }) {
  return (
    <div>
      <Image
        src="/Logo.png"
        alt="logo"
        width={70}
        height={70}
        className={className}
      />
    </div>
  );
}

export default Logo;
