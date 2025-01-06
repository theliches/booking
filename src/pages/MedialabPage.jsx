import Header from "../components/common/Header";
import { Users, Tv, ClipboardPen } from 'lucide-react';

const MedialabPage = () => {
	return (
		<div className="flex-1 relative z-10 overflow-auto">
			<Header title={"Medialab 2.7"} />

			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				
				{/* Info Box */}
				<div className="flex items-center justify-start bg-[#f0f0f0] p-4 rounded-md shadow-md mb-8 space-x-8 border border-gray-300">
					{/* Text & Icons */}
					<div className="flex items-center">
						<Users className="text-[#2c2e33] text-3xl mr-2" />
						<span className="text-[#333] text-lg">2-8 personer</span>
					</div>
					<div className="flex items-center">
						<Tv className="text-[#2c2e33] text-3xl mr-2" />
						<span className="text-[#333] text-lg">Skærm</span>
					</div>
					<div className="flex items-center">
						<ClipboardPen className="text-[#2c2e33] text-3xl mr-2" />
						<span className="text-[#333] text-lg">Tavle</span>
					</div>
				</div>

				{/* Text */}
				<div className="mb-8">
					<p className="text-gray-600">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						{/* Repeat the Lorem Ipsum text to make it 500 lines */}
					</p>
				</div>
				<div className="mb-8">
					<p className="text-gray-600">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						{/* Repeat the Lorem Ipsum text to make it 500 lines */}
					</p>
				</div>
			</main>
		</div>
	);
};

export default MedialabPage;
