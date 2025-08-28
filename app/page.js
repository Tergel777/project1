// "use client";
// import { useState } from "react";

// function Greetings ({ name }) {
//   return (
//     <div>
//       <h1>1</h1>
//     <h1>Hello, {name}!</h1>
//     </div>
//   );
// }

// function Profile ({ name, age, hobby }) {
//   return (
//     <div>
//       <h1>2</h1>
//       <h2>Hello, {name}!</h2>
//       <h2>your age, {age}!</h2>
//       <h2>oyur hobby, {hobby}!</h2>
//     </div>
//   );
// }

// function Box ({children}){
//   return (
//     <div>
//       <h1>3</h1>
//       {children}
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>4</h1>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}> increase</button>
//     </div>
//   );
// }

// function Swichtext() {
//   const [text, setText] = useState("Hello");

//   return (
//     <div>
//       <h1>5</h1>
//       <h1>{text}</h1>
//       <button onClick={() => setText(text === "Hello" ? "Goodbay" : "Hello")}>Toggle Text</button>
//     </div>
//   );
// }

// function Notext(){
//   const [text, setText] = useState("i will disepear");
//   return(

//     <div>
//       <h1>6</h1>
//       <h1>{text}</h1>
//       <button
//         onClick={() =>setText(text === "i will disepear" ? "  " : "i will disepear")}>Toggle Text</button>
//     </div>
//     );
// }

// function Likebutton() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>7</h1>
//       <h1>like button: {count}</h1>
//       <button onClick={() => setCount(count + 1)}> increase</button>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="bg-white">
//       <Greetings name="Alik" />
//       <Profile name="Alik" age="20" hobby="game" />
//       <Box>
//         <p>This is inside the box</p>
//       </Box>
//       <Counter />
//       <Swichtext/>
//       <Notext />
//       <Likebutton />
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="w-560 h-285 bg-red-100 border-5">
//       <div className="w-555 flex justify-between">
//         <div className="w-555 flex justify-between">
//           <div className=" w-40 h-10 bg-[url(/img/c.png)] bg-cover bg-center">
//             logo
//           </div>
//         </div>
//         <div className="w-90 flex justify-evenly">
//           <div>Home</div>
//           <div>about</div>
//           <div>contact</div>
//         </div>
//       </div>
//     </div>

//   );
"use client";

import React, { useEffect, useState } from "react";
import { Header } from "./header";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Product List */}
      <main className="p-6 max-w-6xl mx-auto">
        <div className="w-354 h-22 border-1px solid color-gray gap-10 ">
          <input placeholder="🔍Search option..."className="mb-4 justify-center items-center"></input>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded p-4 hover:shadow-lg transition"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-medium text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {product.description}
                </p>
                <p className="text-blue-600 font-bold mt-2">${product.price}</p>
                <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Pagination (static for now) */}
        <div className="flex justify-center mt-8 space-x-2">
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            1
          </button>
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            2
          </button>
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            3
          </button>
          <span className="px-3 py-1 text-gray-400">...</span>
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
