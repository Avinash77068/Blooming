import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { bgBlack, bgWhite } from "../../GlobalTextColor/bg";
import { textBlack, textWhite } from "../../GlobalTextColor/text";
import { RootState } from "../../store/Store";
import Navbar from "../../common/Navbar";

type PageShellProps = {
  subtitle: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageShell({
  subtitle,
  title,
  description,
  children,
}: PageShellProps) {
  const isOpen = useSelector((state: RootState) => state.user.isOpen);
  const bgClass = isOpen ? bgBlack : bgWhite;
  const textClass = isOpen ? textWhite : textBlack;

  return (
    <div className={`${bgClass} min-h-screen`}>
      <Navbar />
      <div className="pt-[70px]">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <p className={`text-xs uppercase tracking-[0.4em] ${textClass}`}>
            {subtitle}
          </p>
          <h1 className={`mt-4 text-4xl font-bold ${textClass}`}>{title}</h1>
          {description && (
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
              {description}
            </p>
          )}
          <div className="mt-10 text-left space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
