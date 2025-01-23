"use client";
import { useState } from "react";

const images = [
  {
    src: "https://static8.depositphotos.com/1229718/862/i/450/depositphotos_8627291-stock-photo-human-heart.jpg",
    url: "https://live.triorama.ai/p/scene_6b32e6d353854ebc9a86fda53da76da0_000091",
  },
  {
    src: "https://www.verywellhealth.com/thmb/1uqnbay7M1iYIo9SePDbwxTcjdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/enlarged-uterus-signs-symptoms-complications-4174349-notext-final-ba21fb1460ee41ce90575d11de04b062.png",
    url: "https://live.triorama.ai/p/scene_0521d412511f43989a39c739072ccac5_00008b",
  },
];

const ImageSection = () => {
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-10 mt-16">
        Explore Interactive AI Visualizations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Gallery Image ${index + 1}`}
            className="cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[400px] h-[400px]"
            onClick={() => setSelectedUrl(img.url)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-[95vw] h-[95vh] max-w-9xl max-h-[95vh]">
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelectedUrl(null)}
            >
              &times;
            </button>
            <iframe
              src={selectedUrl}
              className="w-full h-full rounded-lg"
              allow="xr-spatial-tracking"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSection;
