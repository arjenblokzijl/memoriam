import Sun from "../../svg/sun.svg";
import Link from "next/link";

export default function Agenda() {
  return (
    <div className="w-full max-w-md p-5 bg-white">
      <h1 className="pb-4 font-montserrat text-[15px] text-brown-200">
        {" "}
        <span className="font-extrabold">Januari</span> 2022{" "}
      </h1>

      <article>
        <h2 className="p-1 text-sm uppercase rounded-sm bg-brown-100 font-montserrat text-brown-200">
          {" "}
          Ochtend{" "}
        </h2>

        <div className="flex flex-row items-start justify-between py-5">
          <div className="flex items-center p-3 border rounded-sm border-brown-200">
            <Sun />
          </div>

          <div className="w-64">
            <h2 className="text-xs text-left text-orange-400"> 08:30 </h2>
            <p className="text-4xl font-bold text-left">
              Gertjan komt op bezoek
            </p>
          </div>

          <div className="w-5 h-5 bg-slate-900"></div>
        </div>
      </article>

      <article>
        <h2 className="p-1 text-sm uppercase rounded-sm bg-brown-100 font-montserrat text-brown-200">
          {" "}
          Middag{" "}
        </h2>

        <div className="flex flex-row items-start justify-between py-4">
          <div className="w-10 h-10 bg-slate-900"></div>

          <div className="flex-col">
            <div className="flex items-center justify-between border-b border-solid">
              <div className="flex flex-col py-1">
                <h2 className="text-xs text-left text-orange-400 ">
                  {" "}
                  10 over 4{" "}
                </h2>
                <p className="text-left text-md">Logopedie met Anna</p>
              </div>

              <div className="w-5 h-5 bg-slate-900"></div>
            </div>

            <div className="flex items-center justify-between border-b border-solid">
              <div className="flex flex-col py-1">
                <h2 className="text-xs text-left text-orange-400"> Half 5 </h2>
                <p className="text-left text-md">Fysiotherapie met Jan</p>
              </div>

              <div className="w-5 h-5 bg-slate-900"></div>
            </div>

            <div className="flex items-center justify-between border-b border-solid w-80">
              <div className="flex flex-col py-1">
                <h2 className="text-xs text-left text-orange-400"> 2 uur </h2>
                <p className="text-left text-md">Kerstborrel</p>
              </div>

              <div className="w-5 h-5 bg-slate-900"></div>
            </div>

            <div className="flex items-center justify-between border-b border-solid w-80">
              <div className="flex flex-col py-1">
                <h2 className="text-xs text-left text-orange-400"> 8 uur </h2>
                <p className="text-left text-md">Karaoke met Rick</p>
              </div>

              <div className="w-5 h-5 bg-slate-900"></div>
            </div>
          </div>
        </div>
      </article>

      <article>
        <h2 className="p-1 text-sm uppercase rounded-sm bg-brown-100 font-montserrat text-brown-200">
          {" "}
          Avond{" "}
        </h2>

        <div className="flex flex-row items-start justify-between py-4">
          <div className="w-10 h-10 bg-slate-900"></div>

          <div className="flex-col">
            <div className="flex items-center justify-between w-80">
              <div className="flex flex-col py-1">
                <h2 className="text-xs text-left text-orange-400 "> Half 5 </h2>
                <p className="text-left text-md">Fysiotherapie met Jan</p>
              </div>

              <div className="w-5 h-5 bg-slate-900"></div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
