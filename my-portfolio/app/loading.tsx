export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brass animate-pulse">
        Retrieving record
      </p>

      <div className="h-px w-24 overflow-hidden bg-ink-line">
        <div className="h-full w-1/3 animate-[loading_1.2s_ease-in-out_infinite] bg-brass-bright" />
      </div>
    </main>
  );
}