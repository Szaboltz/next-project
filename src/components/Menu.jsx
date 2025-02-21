import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-center p-4 w-1/2 bg-neutral-800">
      <ul className="flex gap-4 w-full justify-between px-4" >
        <li className="border rounded-lg border-white bg-black px-2"><Link href='/'>Home</Link></li>
        <li className="border rounded-lg border-white bg-black px-2"><Link href='/about'>About</Link></li>
        <li className="border rounded-lg border-white bg-black px-2">Services</li>
        <li className="border rounded-lg border-white bg-black px-2">Contact</li>
      </ul>
    </div>
  )
}
