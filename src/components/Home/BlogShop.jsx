import { Link } from 'react-router-dom';

const promotionalBanners = [
  {
    id: 1,
    discount: 'WEEKEND DISCOUNT 40%',
    title: 'Natural Eggs',
    subtitle: 'Eat one every day',
    imageUrl: '/bacola-banner-05.jpg.svg',
    altText: 'Natural Eggs'
  },
  {
    id: 2,
    discount: 'WEEKEND DISCOUNT 40%',
    title: 'Taste the Best',
    subtitle: 'Shine the morning',
    imageUrl: '/bacola-banner-06.jpg.svg',
    altText: 'Taste the Best'
  },
  {
    id: 3,
    discount: 'WEEKEND DISCOUNT 40%',
    title: 'Ditch the Junk',
    subtitle: 'Breakfast made better',
    imageUrl: '/bacola-banner-08.jpg.svg',
    altText: 'Ditch the Junk'
  }
];

const blogPosts = [
  {
    id: 1,
    category: 'GROCERY',
    title: 'But I must explain to you how all this mistaken idea',
    date: 'Jan 13 2025',
    imageUrl: '/src/assets/images/blog-3.jpg.png',
    altText: 'Blog Post 1'
  },
  {
    id: 2,
    category: 'GROCERY',
    title: 'The Problem With Typefaces on the Web',
    date: 'Jan 13 2025',
    imageUrl: '/src/assets/images/blog-5.jpg.png',
    altText: 'Blog Post 2'
  },
  {
    id: 3,
    category: 'GROCERY',
    title: 'English Breakfast Tea With Tasty Donut Desserts',
    date: 'Jan 13 2025',
    imageUrl: '/blog-1.jpg.svg',
    altText: 'Blog Post 3'
  }
];

function PromotionalBanner({ discount, title, subtitle, imageUrl, altText }) {
  return (
    <div className="relative overflow-clip rounded-md bg-transparent p-8">
      <div className="text-sm text-green-500">{discount}</div>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-600">{subtitle}</p>
      <Link
        to="/shop"
        className="rounded-full bg-gray-400 px-6 py-2 text-white hover:bg-gray-500"
      >
        Shop Now
      </Link>
      <img
        src={imageUrl}
        alt={altText}
        className="absolute top-0 right-0 -z-1 h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function BlogPost({ category, title, date, imageUrl, altText }) {
  return (
    <Link to="/blog">
      <div className="group cursor-pointer overflow-clip rounded-md">
        <div className="mb-4 overflow-hidden">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full transform transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="text-sm text-gray-500 uppercase">{category}</div>
        <h3 className="mb-2 text-xl font-semibold group-hover:text-blue-600">
          {title}
        </h3>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </Link>
  );
}

function BlogShop() {
  return (
    <div className="mb-10">
      {/* Top Promotional Banners */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {promotionalBanners.map((banner) => (
          <PromotionalBanner key={banner.id} {...banner} />
        ))}
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default BlogShop;
