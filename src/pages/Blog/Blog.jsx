import Pagination from '../../components/Pagination';
import BlogCard from './BlogCard';
import SocialSide from './SocialSide';

const Blog = () => {
  return (
    <section className="container mx-auto mt-5">
      <div className="grid sm:grid-cols-[60%_40%] lg:grid-cols-[70%_30%]">
        <div>
          <BlogCard />
        </div>
        <div className="h-full">
          <SocialSide />
        </div>
      </div>
      <Pagination currentPage={1} totalPages={2} />
    </section>
  );
};

export default Blog;
