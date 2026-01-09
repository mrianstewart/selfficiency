type PrimaryButtonProps = {
  label: string;
};

export default function PrimaryButton({ label }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-transparent hover:text-ink hover:ring-1 hover:ring-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      {label}
    </button>
  );
}
