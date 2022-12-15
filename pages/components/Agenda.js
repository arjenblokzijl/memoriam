import Sun from "../../svg/sun.svg";
import Sunset from "../../svg/sunset.svg";
import Moon from "../../svg/moon.svg";
import ClockHalfBefore from "../../svg/clockhalfbefore.svg";
import ClockHalfAfter from "../../svg/clockhalfafter.svg";
import ClockQuarter from "../../svg/clockquarter.svg";
import Clock from "../../svg/clock.svg";

export default function Agenda() {
  return (
    <div className="w-full max-w-md p-5 bg-brown-80">
      <h1 className="font-medium uppercase pb-7 font-montserrat text-brown-200">
        {" "}
        <span className="font-bold">Januari</span> 2022{" "}
      </h1>

      <article>
        <h2 className="pt-1 pb-1 pl-2 text-sm uppercase rounded-sm bg-brown-100 font-montserrat text-brown-200">
          {" "}
          Ochtend{" "}
        </h2>

        <div className="flex flex-row items-start justify-between pt-5 pb-10">
          <div className="flex items-center p-2 bg-white border rounded-sm border-brown-90">
            <Sun height={36} width={36} />
          </div>

          <div className="w-64">
            <h2 className="text-base pb-2.5 text-left text-yellow font-domine">
              {" "}
              8:30{" "}
            </h2>
            <p className="text-4xl leading-10 text-left font-domine">
              Gertjan komt op bezoek
            </p>
          </div>

          <Clock />
        </div>
      </article>

      <article>
        <h2 className="pt-1 pb-1 pl-2 text-sm uppercase rounded-sm bg-brown-100 font-montserrat text-brown-200">
          {" "}
          Middag{" "}
        </h2>

        <div className="flex flex-row items-start justify-between py-4 pb-8">
          <div className="flex items-center p-2 bg-white border rounded-sm border-brown-90">
            <Sunset height={36} width={36} />
          </div>

          <div className="flex-col">
            <div className="flex items-center justify-between border-b border-solid">
              <div className="flex flex-col">
                <h2 className="text-xs font-semibold text-left font-montserrat text-yellow ">
                  {" "}
                  10 over 4{" "}
                </h2>
                <p className="pb-2.5 font-normal text-left font-domine text-md">
                  Karaoke met Rick
                </p>
              </div>

              <Clock />
            </div>

            <div className="flex items-center justify-between border-b border-solid">
              <div className="flex flex-col">
                <h2 className="pt-3 text-xs font-semibold text-left font-montserrat text-yellow">
                  {" "}
                  Half 5{" "}
                </h2>
                <p className="pb-2.5 font-normal text-left font-domine text-md">
                  Bier drinken met Milan
                </p>
              </div>

              <Clock />
            </div>

            <div className="flex items-center justify-between border-b border-solid w-80">
              <div className="flex flex-col">
                <h2 className="pt-3 text-xs font-semibold text-left font-montserrat text-yellow ">
                  {" "}
                  2 uur{" "}
                </h2>
                <p className="pb-2.5 font-normal text-left font-domine text-md">
                  Kerstborrel
                </p>
              </div>
              <Clock />
            </div>

            <div className="flex items-center justify-between border-b border-solid w-80">
              <div className="flex flex-col">
                <h2 className="pt-3 text-xs font-semibold text-left font-montserrat text-yellow ">
                  {" "}
                  8 uur{" "}
                </h2>
                <p className="pb-2.5 font-normal text-left font-domine text-md">
                  Potje tafelvoetbal
                </p>
              </div>

              <Clock />
            </div>
          </div>
        </div>
      </article>

      <article>
        <h2 className="pt-1 pb-1 pl-2 text-sm uppercase rounded-sm bg-brown-100 font-montserrat text-brown-200">
          {" "}
          Avond{" "}
        </h2>

        <div className="flex flex-row items-start justify-between py-4">
          <div className="flex items-center p-1.5 bg-white border rounded-sm border-brown-90">
            <Moon height={36} width={36} />
          </div>

          <div className="flex-col">
            <div className="flex items-center justify-between w-80">
              <div className="flex flex-col">
                <h2 className="text-xs font-semibold text-left font-montserrat text-yellow">
                  {" "}
                  Half 5{" "}
                </h2>
                <p className="font-normal text-left font-domine text-md">
                  Fysiotherapie met Jan
                </p>
              </div>

              <Clock />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
