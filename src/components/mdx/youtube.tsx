export default function YouTube({ id, title }: { id: string; title?: string }) {
  return (
    <div className="aspect-video w-full my-6">
      <iframe
        className="w-full h-full rounded-2xl shadow-soft"
        src={`https://www.youtube.com/embed/${id}`}
        title={title ?? "Embedded video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
