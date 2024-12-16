import React from "react";
import Image from "next/image";

export default function FeaturedPosts() {
    const posts = [
      {
        id: 1,
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        image: "/pic1.png",
      },
      {
        id: 2,
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        image: "/pic2.png",
      },
      {
        id: 3,
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        image: "/pic3.png",
      },
    ];

    return (
      <div className="p-6 bg-gray-100 h-[800px] mt-[100px]">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Featured Posts</h1>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white h-[520px] w-[328px] rounded-lg shadow-md overflow-hidden">
              <img className=" object-cover h-[300px] w-[348px]" src={post.image} alt={post.title} />
              <div className="p-4">
                <span className="text-xs text-blue-500 uppercase">New</span>
                <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.description}</p>
                <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
                  <div>
                    <span>{post.date}</span>
                  </div>
                  <div>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
                <button className="mt-4 text-blue-500 text-sm hover:underline">Learn More </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }