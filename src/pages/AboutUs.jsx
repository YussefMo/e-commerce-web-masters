const CioImg = [
  {
    Imgsrc: '/CIO-Manger.png',
    Title: 'CIO Manger'
  }
];
export default function AboutUs() {
  return (
    <>
      <div className="content-one flex h-100 flex-col items-center justify-center bg-[url(/about-header.jpg.svg)] text-center text-white shadow-md">
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#00000066]">
          <h2 className="text-4xl">About for Bacola</h2>
          <span>We can do more for you</span>
        </div>
      </div>

      <div className="content-two mx-auto w-3/4">
        <div className="description-1">
          <p className="mt-7 mb-6">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
          <h1 className="mb-7 ml-7 text-xl font-bold">
            Quisque erat urna, congue et libero in <br /> eleifend euismod
            velit.
          </h1>
          <p className="mb-4 ml-7">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>

        <div className="relative flex flex-col justify-between gap-x-6 gap-y-6 md:flex-row">
          {CioImg.map((item, index) => (
            <div key={index} className="img w-full md:w-1/2">
              <img
                src={item.Imgsrc}
                alt="CIO Manager"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}

          <div className="title flex w-full flex-col justify-between md:w-1/2">
            <p className="mt-5 mb-4 text-base font-medium">
              Rachel Leonard - Bacola CEO
            </p>

            <h2 className="mt-5 mb-4 text-2xl leading-tight font-bold md:text-3xl">
              Duis convallis luctus pretium. <br /> Pellentesque habitant morbi
            </h2>

            <p className="mt-6 mb-6 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

            <p className="mt-8 mb-7 leading-relaxed text-gray-700">
              In fermentum mi ut sapien semper, a sagittis lorem vulputate.
              Integer gravida, dui eget aliquet tempus, turpis orci vehicula
              ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
              lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis.
              Integer tortor nulla, ultricies et nisi sit amet, interdum dictum
              felis. In semper laoreet dui vitae pharetra. Etiam sit amet
              molestie nulla, eu efficitur orci. Praesent rutrum ante justo,
              eget malesuada ante ornare ac. Ut dignissim blandit urna, eget
              euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Quisque lobortis
              libero ante. Nullam in feugiat erat. Aenean sed justo dapibus,
              sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl
              condimentum fermentum at et sem. Curabitur fermentum dolor eu
              lacus consectetur varius.
            </p>

            <p className="relative z-10 mt-6 w-full rounded bg-white p-4 leading-relaxed text-gray-800 shadow">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut
              libero commodo iaculis. Donec augue diam, tristique et ultricies
              nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus
              id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum
              metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
              interdum turpis. Curabitur porta auctor quam, pretium facilisis
              nisl. Pellentesque efficitur elit ante, vel vulputate tortor
              blandit nec.
            </p>
          </div>
        </div>

        <footer className="mt-6 mb-8">
          <p>
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </footer>
      </div>
    </>
  );
}
