import Image from "next/image";

 
 const Card = ({title, desc, src} : {title: string; desc: string; src: string}) => {

    return (
        <div className=" p-2 bg-slate-300 rounded-sm">
            <div>
                <Image src={src} width={100} height={100} alt={"Searched song"} />
              <img src={src} alt="searched result" />
            </div>

            <div>
              <h1 className="text-xl font-bold">{title}</h1>
              <p>{desc}</p>
            </div>

          </div>
    )
 }

 export default Card;