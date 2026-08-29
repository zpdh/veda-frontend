import iconsUrl from "../../assets/icons.svg"
export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-5 border-t border-veda-border py-8">
      <span className="text-xs text-veda-text-muted">
        <a
          href="https://github.com/zpdh/monumenta-veda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-veda-text-muted hover:text-veda-text flex items-center gap-1"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 19 19">
            <use href={`${iconsUrl}#github-icon`}/>
          </svg>
          Repository
        </a>
      </span>
    </footer>
  );
}
