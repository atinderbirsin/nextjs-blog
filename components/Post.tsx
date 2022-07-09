import Image from "next/image";
import Link from "next/link";
import { Character } from "../types";

export default function Post(props: Character) {
  const name:string = props.name.toLowerCase().split(' ').join('-');
  return (
    <>
      <Link href={name}>
        <a className="border border-solid rounded-xl border-slate-400 h-1/6 flex bg-gray-800">
          <div className="w-2/4">
            <Image
              src={props.image}
              width="100%"
              height="100%"
              layout="responsive"
              className="rounded-l-lg"
            />
          </div>

          <div className="p-3 pr-10 text-white">
            <div>
              <h1 className="text-4xl font-bold">{props.name}</h1>
              <p className="mb-3">{new Date(props.created).toDateString()}</p>
            </div>
            <div>
              <p className="text-gray-400">Status - Species</p>
              <p className="mb-3">
                {props.status} - {props.species}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Last Known Location:</p>
              <p>{props.location.name}</p>
            </div>
          </div>
        </a>
      </Link>
      </>
  );
}
