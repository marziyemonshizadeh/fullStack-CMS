export default function DetailsSection({ text, value }) {
  return (
    <section className="flex justify-between items-center gap-10 my-2">
      <span className="font-bold">{text}</span>
      <div className="bg-slate-50 border-2 border-slate-100 rounded-xl p-3 w-2/3">
        {value}
      </div>
    </section>
  );
}
