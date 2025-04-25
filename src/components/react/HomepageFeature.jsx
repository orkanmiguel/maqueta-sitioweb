import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";
import { markdownify } from "@/lib/utils/textConverter";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="mx-2 mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4 p-5 ">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div
            key={i}
            style={{ backgroundColor: "#64CCC9" }}
            className="flex flex-col justify-between rounded-lg bg-surface p-4 shadow-lg hover:shadow-xl hover:shadow-secondary/50 transition-all hover:scale-105"
          >
            <div>
              <div className="flex flex-row items-center">
                {/*TODO: Agregar icono o imagen aca
                 <span className="icon">
                  <FeatherIcon />
                </span> */}
                <div className="hover:shadow-secondary/50 transition-all hover:scale-125">
                  <img
                    src={`/images/iconos/icon${i}.svg`}
                    alt="Descripción de la imagen"
                    height={50}
                    width={50}
                  />
                </div>
                <h3 className="ml-2 text-sm md:text-lg">{item.title}</h3>
              </div>
              <div className="whitespace-normal break-words overflow-wrap break-word">
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{
                    __html: markdownify(item.content),
                  }}
                ></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
