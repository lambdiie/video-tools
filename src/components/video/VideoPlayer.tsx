export default function VideoPlayer({ src }: { src: string }) {
	return <>{src ? <video controls src={src} className="w-3xl" /> : null}</>;
}
