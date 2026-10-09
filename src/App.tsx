import VideoEdit from "@/components/video/VideoEdit";
import VideoInput from "@/components/video/VideoInput";
import { useFileStore } from "@/store/store";

function App() {
	const file = useFileStore((state) => state.file);
	const setFile = useFileStore((state) => state.setFile);

	const handleInput = (file: File | undefined) => {
		if (file) {
			setFile(file);
		}
	};

	return (
		<main className="h-screen flex flex-col items-center">
			{file ? (
				<VideoEdit />
			) : (
				<>
					<h1 className="text-center m-16 text-2xl">lambdiie's video tools</h1>
					<VideoInput handleInput={handleInput} />
				</>
			)}
		</main>
	);
}

export default App;
