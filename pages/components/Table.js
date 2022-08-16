import React from "react";
import { useState, useEffect } from "react";
import { firebase } from "../../lib/firebase";

const Table = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [list, setList] = useState("");

  const [book, setBook] = useState([]);

  const [search, setSearch] = useState('')

  useEffect(() => {
    firebase
      .firestore()
      .collection("books")
      .onSnapshot((snapshot) => {
        setBook(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <div className=" h-6 mb-4  content-center">
        <center>
          <input
            type="search"
            placeholder="Search"
            className="h-6 ml-5 mr-5 sm:text-sm   p-4 rounded-lg shadow-xl md:text-2xl w-10/12 "
            onChange={(e) => setSearch(e.target.value)}
          />
        </center>
      </div>

      <center>
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide ">Name</th>
              <th className="p-3 text-sm font-semibold tracking-wide ">
                Author
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide ">
                Postion Shelf
              </th>
            </tr>
          </thead>

          <tbody>
            {book.filter((boi) => {
              if(search === ''){
                return boi
              }
              else if(boi.name.toLowerCase().includes(search.toLowerCase())){
                return boi
              }
              else if(boi.author.toLowerCase().includes(search.toLowerCase())){
                return boi
              }
             
              
            }).map((boi, pos) => (
              <tr className="bg-white border-b-2" key={pos}>
                <td className="p-3 text-sm font-semibold text-center">
                  {boi.name}
                </td>
                <td className="p-3 text-sm font-semibold text-center">
                  {boi.author}
                </td>
                <td className="p-3 text-sm font-semibold text-center">
                  {boi.list}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Table;
