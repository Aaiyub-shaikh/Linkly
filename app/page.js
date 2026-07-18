import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-200">
      <section className="grid grid-col-2 h-[70vh] justify-center">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-3xl font-bold text-black">
            The best URL shortener
          </p>
          <p className="text-black px-56 text-center">
            This platform short the given url. <br/>
            easy to use no need to login just visit website and enjoy.
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Link href='/shorten'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>try now</button></Link>
          <Link href='/github'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>github</button></Link>
        </div>
        <div className=" flex justify-center relative">
          <Image className="mix-blend-darken" alt="an image of an vector" src={"/vector.jpg"} height={1000} width={500}/>
        </div>
    </section>
  </main>
  );
}
