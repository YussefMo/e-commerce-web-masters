const BlogCard = () => {
  const cardDetails = [
    {
      Imgsrc: '../../../src/assets/images/blog-3.jpg.png',
      subTitle: 'Grocery',
      title: 'But I must explain to you how all this mistaken idea',
      date: { date: 'Jan 13 2025 ', address: ' Sinan ISIK' },
      description:
        ' Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...'
    },

    {
      Imgsrc: '../../../src/assets/images/blog-5.jpg.png',
      subTitle: 'Grocery',
      title: 'The Problem With Typefaces on the Web',
      date: { date: 'Jan 13 2025 ', address: ' Sinan ISIK' },
      description:
        ' Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...'
    }
  ];
  return (
    <>
      {cardDetails.map((item, index) => {
        return (
          <div key={index} className="px-2.5 py-5">
            <img
              src={item.Imgsrc}
              alt="Blog Image"
              className="w-full transform rounded-t-md transition duration-1000 hover:scale-95"
              loading="lazy"
            />
            <div>
              <h6 className="my-5 text-[#9B9BB4]">{item.subTitle}</h6>
              <p className="text-blog-text font-medium sm:text-3xl md:text-4xl">
                {item.title}
              </p>
              <p>
                <span className="pr-2 text-sm font-medium text-[#71778E]">
                  {item.date.date}
                </span>
                <span className="text-blog-text text-sm font-medium">
                  {item.date.address}
                </span>
              </p>
              <p className="text-blog-text my-5 pr-14 text-sm font-medium">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
