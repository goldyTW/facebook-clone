import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";



function Widgets() {
    const contacts = [
        { src:"https://links.papareact.com/f0p", name:"Jeff Bezoz"},
        {
        name:"Elon Musk",
        src:"https://links.papareact.com/kxk",
        },
         {
        name:"Mark Zuckerberg",
        src:"https://links.papareact.com/snf",
    },
    {
        name:"Bill Gates",
        src:"https://links.papareact.com/zvy",
    }
    ];
    return (
        <div className="hidden lg:flex flex-col w-80 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contact</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"></VideoCameraIcon>
                    <SearchIcon className="h-6"></SearchIcon>
                    <DotsHorizontalIcon className="h-6"></DotsHorizontalIcon>
                </div>
            </div>
            {contacts.map((contact, i) => (
                <Contact key={i} src={contact.src} name={contact.name}></Contact>
            ))}
        </div>
    )
}

export default Widgets
