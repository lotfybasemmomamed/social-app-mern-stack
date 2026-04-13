import { CircleX, Image } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AddPostModal({ open, onClose }) {
  const { t } = useTranslation("addpost");
  const [selectedImage, setSelectedImage] = useState(null);
  function handleImageChange(e) {
    console.log();
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    console.log(imageUrl);

    setSelectedImage(imageUrl);
  }
  function removeImage( ){
    setSelectedImage(null)
  }
  return (
    <div className="fixed bg-black/40 z-40 inset-0">
      <div className="card-border fixed flex flex-col justify-around  bg top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 min-w-[35vw] min-h-[75vh] max-w-[100vw]">
        <div className="flex justify-between p-4 border-b border-gray-300 dark:border-gray-700">
          <h2 className="font-bold text-xl">Add post photo</h2>
          <div className="cursor-pointer dark:text-white hover:text-red-600 dark:hover:text-red-400">
            <CircleX onClick={onClose} />
          </div>
        </div>
        <div className="flex gap-5 mb-4 p-4">
          <div className="h-10 w-10 rounded-full overflow-hidden ">
            <img
              className="w-full h-full  object-cover"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA3gMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAwIEBQAGB//EADsQAAIBAwMBBQUFBwMFAAAAAAECAAMEEQUSITEGE0FRYSIycZGhFEJigbEHFSMzUsHxJNHwJjRDcuH/xAAbAQADAQEBAQEAAAAAAAAAAAAAAQIDBAYFB//EAC8RAQEAAgICAgEBBgUFAAAAAAABAhEDBCExBRJBURMiMmGBkSNCUnGxFBUzwdH/2gAMAwEAAhEDEQA/ANwGeneVdmPQRYwKogxgd0NGIaIO3QDswDt0D2kGi0NpK0NHKYpk1UpimI4YpzJpuarSpkCpURCegZgMybYqS0zwz4QDjGESYAAY6QgxGkDEBBiMcwDswA5gAzGTsxaFRJlaSyQ03Y7dujKos0cJHdGHAw0NiGi0Njui0YFo9EG+IbEPDRpBoaPZqNJsOULq9oWNrUurmoKdKkNzMfCRlZjN1phLldY+3zvVu2N7qb1VtrgWNjnC87XYep/2nyObt5ZXWPp9fh6eOE3l7efTUrdAyNXq1XZuHzuPznHu27dsxk8LGn9qdQ026U2VZ+7z/KqNlXHljwm/Fz54X2w5OvhnL4fW9C1inrOnpdINrYw9POdrT6+GX2xmU/L43JjcMrjfwvlpaNhugNjnmMbSBi0exBi0ex3Q0Nu3Q0NuzDQ27MNJDdDQAtGTGVuJ0aYDuhobRLRkjujDt0A7dAO3QGw3QAboAQ0AkG5isM1HisPbzP7SW/6eQ78AXCeyPvcHj+/5Ti70/wAF3dC/439GT2N7M2+p1Eub5RUQcLTx4Ty3Y58sb9Y9X1uvjcftk+m2/Yrs6oB/dVuMDHFMTCZZ3za6LhhPUZfar9n+i3en1fsFmltcKpKPTGMnylY82eF9py4sMp6eZ/ZqrW5vrQ1CwphcrngHmel+PyuWFeV+RxmOcr3JM+g+fsMwMQYBLdAxDRaIcwPbsxaG3ZjDswDswJEmMrWMp4m7AcxgCYBEmBBmMATHoO3Q0W0d0NDYb4aG3b4aPYipFobMWpDQ28/2+oG57Ouy8m3qrV/LkH6Ezj7uFy4a7OhyTHnm/wA+DNBpPSSki1L+nuwtNbMDgDAySZ5Hl/jr2fFv6Te3vezep3NWlc2lwS1e19kVmxl/DJ9Zj9tNrirWT31avWFSvqHDnaayIaR4zjI5xDLzPI9ZeHnOz9olvrvaCtSXbSa5FNR8Bk/Uz0vxc/wtvKfL3/G1J4b+Z9TT5crt3MShzAxzAJAxAQYAQYB2YB2YAMwKos0ad7YytxN2Q5jIC0eitR3Q0WwLR6G0C8ZAXhoAXhotoF+Y9DY7ohtHfzGNpipDRWqOvIa+lVEHJyOPOfL+WlnX3PxZt9T4XKXtav5l02uw97Rr6bltjNjO3y46zyHYmuTy9v17vji12d1aiLrUhUpVd5b3gPYPOAMxa8Hbu+Hru+oG3LqVxjkqeIrqFrLbzXeI1nRdVw1RmqZxjIZiR9J9f4WW82X+z4vztk6+H+//ANL3T0unl44GLR7EGJW0sxGIMAlmAcDADmADMCAmBbQJlJY6tNmY5lJ2BMCtRJjCJMAiTHokS0cKll407QLwL7AakNF9g7zmGh9h7yPRXIHK1kKOMgyeXhw5cLhn5lLi7PJwck5OO6sY+iXlvpusV7C6d1oOzJgHGFPQ/WeL+R6/7Pmsx/Fe9+L7X7Xhxyy92Pf9l/s1pRS3uqdRqgO1ajVnAqeXA46eU4JlhfcfWsuvGSethNKt7pxWqd5cY/hFshfAAZ55MWOH35JJ+qM85hhcrfRFOpUahRR3J7tAo9AJ7Pg6vFwS/Sea8H2O5y9jX3viOzOhjBBiUIMAlmICDEcSBgbswDswLbswAExkWTHE2sdTN2Q5jIMwCLNHotoFo9J2gWjLaDPDSbSTUlaRtAvGSBf1gNBugekg0CqW9UQs7BVHUnoIWyeymFyuowtXsP3hm8s2y2Rh1GQRieO+R7GF7eWruPcfHdbPDp4bmq9B2d1btLSopQSw+1bPdcuAAPPmfMynFve31OPLmk1p6i1028ut+rayVNVVPcUFOVT8RPiY+HKTlxmP6z/kufHK8WVy/S/8ILPcV4HH0niQ0jsQU4QA5gEgYtHBzEBzABmMnZiAE4jhFseZUiaxVM3ZJ5gESY4VLYxptQLRpKZ5UiLSmbMadlkwPSJaLZ6Q3cydqmIqctj8+fKY59jDHw6cOnnn5vhNqdUBioxjkZEwy7Of4jqw6XHPd2p3NJqqt7RJwGTJ4xObPPLOfvV1cfHhx/wxt9lEpXyvTyA7E5QnlT5Ynlu518+LP14eq6fZw5uPzfP6Pc6BYLQtAtRcVBkTlnl05Xz4WtZubex09zcMoXbhUzy58hNuLgz5spjg5+bmw4sftn6fPaGqVqNVU2h0CklGHQD1+QnsccssZJfLyGfFhlblJps22o2lwBiqEY/dfiXM5WGXFlitlJcqLNFkYjIIAQYAcwAgwDswDswCJMZUsmOIYymbM0sxlUSY4nZTtGm0lm9ZURaWxjSgTA0CZNVIWzRKkLHt1RT8+TOXscn1kxju6vFMr9quPTKMOMrnKfHxX8x0nFrT6NaDoqqD1HHPmJZVTq2/DqhG6m+U/Pwhomfc0nt6wu7VqiZ530zhl9PWRnhjlPMPHPLG+G3ZazqdSkuzUKxUjg5B+uJlOl18vP0jb/rOxJr7UK7VK2a1zVeq/wCI5J+E3w48OOawmmGfJnnd5XavTpnu7qq46naMeAHh84/5gadLDGj4UgB9JKlq0vbi1VQp3o/K0258eAJcy0zy48cm+CKiBwMbgDibY1x5Y/W6QMpACMDEY5gTswDsxhEmCaWx5lExVmrOpkxlstjKRSKjSpGVpTGMkSYHIgxiqpCnaTtchDvItaSJaeDVrVHDEFOAR4T5/NftyPqdfH68bVBFZNj4p1PukdMydNTNxexCdHakw48COI/ZGYNZdy5UVEz8+RH+AitHvFDYADjcRjof8wKxm2hFlqHcgYoXBJUf0ODgiRPFP3GxUGWQHjAM0qdIpTzYKvTe2frJ/Cle4JV73qGNdVGD4FRJNPd3tchDxnYhHgo4J/X6QDdsGzSZfLkTXC/hz8+P5NabOZERk6AGAdABAImOIpTdZSaxwZpE5OJlRBbmUjIljKjMsmB6QJi2otjFVSEu0itJFWq+JllW2OJ+lAGo706nLdAeh8x68/2nz/edsfSnjGNrZ3nGNtTHKNyGH/PzmshbV6tU0KtBMnId/lnP+0m+FS7XLXHcU1GfZUDrnpHAem3B54FQjp4NzAMe5p98l8BxUtbrvFx5EZmd9U2rQqd9b0ag4PusPIypfBU1V/hIPLr85QI1FAC785L02OB6n/5Jpq9o4VQSRkgZ9B5RwNzS2ySSeTKw9sub+FcebxxoRk6AdAOgAMCQMqJpbHmNFY6maROTj0lppTRxnSWMpBZiqogTEopjFVyK9UzO1rjFOs+CeceAJ85zcucxxuVdfDx3LKSN2001npCtQoOQRyu04z4H/E+bj3etvVzfUy6Xa1v6eHsNE0m2qi1dras1zbDF1Z3fvbiMZXzHl5/GfO7Hf5JbhP6WPpcPx/FZM76/SvMdsNPqaVqdseWtqwZqbY48OPjO7rdudjCb9uDtdS8Gdk9VC1q+yAOnpO7GuKtCj7ZOTw6fUcxmyg/d6xfq2NlVKbEY8x1+kifxU/xFy1zSXn74XcB5gSpCXadQc8EZ8fGMKWp1yKi0+M1aZAGenI5/WL86H4Lt6G0hic/Ex6LbTtK4FzRH3S2M48SI8faOTzi1nm7iLjDoB0A6AAwJBpUSUxjQxlmkKjLZ0p44iktKSWYjLaJcKeRVxWqniRlfDbGK9Id5coPxT5Pyef16+T7HxWH27GL6ZY2tu1itOuSqnHKnBB8MEeM8dvy9nZ4byJWpuKV5WP2pf5NyRgtx7r+v6zb8/ve2Gtz91idvLZ9Q0Ksaabnola64HTB9oD8p0dTl/Z80v6uft8X34L/J4Cwuf9Hb1M+JXM9Phf3Xmcp5bFtWPf00I88fKas9s1236i7E/wAyyU/IkSJ/Er8LtKqdoUnDbQWHpKx9JtAV+7O/KlDwfSTvSvbIr3zXfaNqSe0tCmqgAZyTyT+nymV5ZOTzWn7LK4TU3Xp7ayvKygraV6nlhDKva4J7zhTrc9/yVdp6deUj3tW1qoBgkkY6TK/IdXH/ADtZ8f2cpf3FwnIn0p5fGvi6cOkYdEbowECAwJAyk0to4isVZrCy9uMpnSnjjOkmUSJiplNJXCXk1pFWr0meTbFXpttuKbD+oT5Pys316+z8TddiPpumNTubYU6wDKRgg+U8dfb2WttF9Ut6dJ7S4vVep/4qxO4jH9XqPPxmv237Z3DV8JG9tDa/9xTdnGWGfHxk+j0+U6xSTSKte1QjuRW7ylz0U84/LkT0vT5/2nBN+3mu71/2XPdeltdRT7WMHoD9Z9H9pjLuvnfS2eIVbNcV760ajbV6mKb0m2oTjnic2Xa4sLLllG+PW5s5ZMa3LfR9ZuGV6dgaJpn2TVcAFT1UgHOJhn8r1sfV3/R0YfF9rL3Nf71brdkb+qjDvadNKnvBSWP18fWcfN8vL/48f7uzi+Is/wDJl/Zi0+zzdne0NKqbh6q3C9XABBB9PjPnc3ZvNjvJ9Lg6s4L+7fD6dp1zuoKMzjldVh2oYqWrfCFvgYe3mFOVE991rvhwv8o/Pe3Jj2M5P1qQmrGD4RKdAOjID0gRZlFS26xxnWMk0hX2JlopVQRxnSG6yklt1ipwtpK4S4k1pKrVRM8muKqMCtTz03DPzny/kpvrZPr/ABl12cX0LT0q0QrYJUjg+E8ZXtp6a1nQtMs7Ul3McsccmBXwuixtqqjKqfiIy+1Qfs9YVzipRRh5ECVLlPVRlq+4dQ0Gzo806FJT/wCojtyvulvGeotU7KhSycID5xfWH9qYXo0wSWA+JxDwXlD942NXNNLq3Zx91agJlWFNvHdt7inUNq1BTUrU63tLTG44IPlJx87i7+B0nWQzpSZXRicYZSJFmlzy9Pc1f9E5/CTEWnn090fCfoPDPrx4z+T857F+3Nnf50wCWmDEboB0CRMZaQYR7IpxzKjOsamMzSFUivEqILdY4iwlhLQUwhThTCRVQlhFWkIqiZ1ripVhjM4+zx/fiyx/WO7q8n05ccv0r6V2XvEvNIpISO8AwQf7TwueOsrK99jl9sZWwtIY90D4STLqVhSOArH4QDhqLKMJRqsfRTGWibjWKlIZcimPxHn5CHkfVVt9X+2vto3A69W9n6dTDyDrjR6d5k17h6ueoDYHyhsBbdn7G2xstkGPELzDdPwv0dPtR7tJQfQRFs/7NQGN1PAENDdR1MBbGoVPG2PDG5ZTGfmpyymONt/SsULgCfoM8TT83t3bUxBUHEW1OgQYjCJECqDCVElMOZTOsekJcKmbZRIOscTYQ6ypWdhDCNJTCJUKYSa0ivUEitMaq1V5mVb41d07tE+lWjUfsoqsPcbdjE892Picc+S5Y5a29J1fl8sOP6ZY70inbLVatVaYCYbwGf1mV+K45qfatv8Au2fv6xfPabU0p42UyfOF+Hx/1X+xf95y/wBM/uUdc1i8pVlFYUmXpsE24viuGTzuseX5bnvrUhdCzurgrcJc1lrOmS27xnb/ANFwZ4zG4uKdznwyuUyRNxqNKt3VwlOqx9xmXYzfmJw8nxGNusbp38XzHJP4ptct+0VxavscVkx13DcPyM4OT4vmx9eXdx/LcGXvw2rPtfTIVajrn1M48+rzYe8a7cO1wZ+so17bXLW5HFVVb48zC42e28svppULxMDdUV8+EUo0Vqd3Tq00oUTwTlseAE+j8ZwXm7OP6Tzf/T5vyvP+w62X65eJ/X2pYnsXiYkBEqDiJQERlQxBIERkgwjiSWHMpFZNEcTSFTMRkgwgVJqLKiLFeospnYQwhQWwyImkJcSauVVqrMsmuNZ1yuMzl5HXx1PRKIq3+D5TDX7zrl8PTXlr/CyAfZmtnhE9kWiLSvFXHFRcH4yZdU7Nxo2gFGpTU4wHK/OXvSdLF3b0q6lHOxlbhh1U+BEL5HpWp0BdUqoqInf0DtqgDPwI9IS78UrNelG606mV4HSFxhxWp6eEwQpGPKZZcOOXuLnJnj6unqtLsKVbTabPuD5PtKxB6zPL4/rZzziq/Jdvjz8Z/wB2oiFQASTjxM26/V4uvLOOe3N2u3y9rKXlvpLE6NuaQQMRGMDCBUCIyAiBIMJUKksOZUQyLfpNWZ0UNBhKIlxxKiaRUjZ1WeUlAyauEuJK1aqJnk0xZ9yOTObN18ax2fUfaqh8QV/vOa+3bh6ewr01+z7sczVMZF4ArUivBVhiTkqLt0B3IqAYbjmV+ExZu1Bo0K3R3UFsePAh+DkVbao1HVqToeansOD0Ik/kNXUKFNWYBeMzRCgUUqeIg3NIGNPQfib9Zcc/J/EtESojQRE6BjiAAwKhGQGMkDHCpNTrKjOv/9k="
            />
          </div>
          <input
            className="text-color text-3xl focus:outline-none"
            placeholder={t("placeholder")}
          />
        </div>
        <div className="flex-1  p-4 flex flex-col">
          <p className="text-start text-color mb-2">Upload attachment</p>
          <div className=" flex-1 card-border border-2 border-dashed flex flex-col justify-center items-center ">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  className=" rounded-sm w-full h-full object-cover "
                />
               

                <div
                  className="bg-red-500 hover:bg-red-400 text-white rounded-full absolute -top-12 -right-1 cursor-pointer  "
                    onClick={removeImage}
                >
                  <CircleX onClick={onClose} />
                </div>
              </div>
            )}
            {!selectedImage && (
              <>
                <label className="cursor-pointer w-20 h-20 flex flex-col items-center justify-center">
                  <Image className="w-full h-full text-color" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>

                <p className="text-sm text-color">
                  Drag here or click to upload photo.
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4 p-4 border-t mt-4 border-gray-300 dark:border-gray-700">
          <button className="cursor-pointer bg-red-200 hover:text-white transition-colors duration-300 hover:bg-red-500 p-3 rounded-sm">
            Cancel
          </button>
          <button className="cursor-pointer bg-green-200 hover:text-white transition-colors duration-300 hover:bg-green-500 p-3 rounded-sm">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
