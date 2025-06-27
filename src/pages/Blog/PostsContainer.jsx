import blogImg1 from '../../../src/assets/images/blog-3.jpg.png';
import blogImg2 from '../../../src/assets/images/blog-5.jpg.png';
import blogImg3 from '../../../src/assets/images/blog-1.jpg.png';

const PostsContainer = () => {
  return (
    <>
      {/* post div 1 */}
      <div className="mt-5 w-[48%] sm:w-full">
        <div className="flex items-center justify-between gap-1">
          <div className="relative w-1/4">
            <span className="badget">1</span>
            <img
              src={blogImg1}
              alt="post image"
              className="h-[50px] w-[50px] rounded-full"
            />
          </div>
          <p className="post-text">
            But I must explain to you how all this mistaken idea
          </p>
        </div>
      </div>

      {/* post div 2 */}

      <div className="mt-5 w-[48%] sm:w-full">
        <div className="flex items-center justify-between gap-1">
          <div className="relative w-1/4">
            <span className="badget">2</span>
            <img
              src={blogImg2}
              alt="post image"
              className="h-[50px] w-[50px] rounded-full"
            />
          </div>
          <p className="post-text">
            But I must explain to you how all this mistaken idea
          </p>
        </div>
      </div>

      {/* post div 3 */}
      <div className="mt-5 w-[48%] sm:w-full">
        <div className="flex items-center justify-between gap-1">
          <div className="relative w-1/4">
            <span className="badget">3</span>
            <img
              src={blogImg3}
              alt="post image"
              className="h-[50px] w-[50px] rounded-full"
            />
          </div>
          <p className="post-text">
            But I must explain to you how all this mistaken idea
          </p>
        </div>
      </div>
    </>
  );
};

export default PostsContainer;
