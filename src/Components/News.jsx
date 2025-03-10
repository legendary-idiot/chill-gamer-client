import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("../News.json")
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-center text-3xl font-bold">Latest Stories</h2>
      <p className="text-center text-lg my-4 sm:w-[80%] mx-auto">
        Stay ahead of the curve with the latest news and stories from the gaming
        world. From exclusive interviews to breaking updates, we've got you
        covered!
      </p>
      <div className="space-y-6">
        {news.map((news, idx) => {
          return (
            <div
              key={idx}
              className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 shadow-sm rounded-md border border-gray-300"
            >
              <figure className="relative md:col-span-1 xl:max-h-[230px]">
                <img
                  src={news.img}
                  alt={news.tag}
                  className="w-full h-full rounded-md object-cover"
                />
                <figcaption className="absolute bottom-2 left-2 opacity-80 bg-gray-200 px-2 py-1 rounded">
                  {news.tag}
                </figcaption>
              </figure>
              <div className="space-y-4 md:col-span-2 flex flex-col justify-between">
                <h3 className="text-2xl md:text-3xl font-bold text-accent">
                  {news.title}
                </h3>
                <p className="text-xl">{news.description}</p>
                <p className="text-lg text-gray-600">
                  By <span className="font-semibold">{news.author}</span>
                </p>
                <Link
                  to={news.link}
                  className="text-lg text-blue-700 font-semibold hover:text-blue-400"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
