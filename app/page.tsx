
import { Sidebar } from "../components/Header";
import { Main } from "../components/Main";

export default function Home() {
return (
  <div>
    {/* <p className="text-white">Good luck ok!</p> */}
    <Sidebar />
    <main>
     <Main /> 
    </main>
    {/* player here */}
  </div> 
  );
}
