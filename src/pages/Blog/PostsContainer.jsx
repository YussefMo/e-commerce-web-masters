import blogImg1 from '../../../src/assets/images/blog-3.jpg.png';
import blogImg2 from '../../../src/assets/images/blog-5.jpg.png';
import blogImg3 from '../../../src/assets/images/blog-1.jpg.png';

const PostsContainer = () => {
  const posts= [
    {image: blogImg1},
     {image: blogImg2},
      {image: blogImg3},
  ]
  return (
  <>

  {
    posts.map((post,index) => {
      return(
          <div key={index} className="mt-5 w-[48%] sm:w-full">
      <div className='flex  justify-between items-center gap-1 ' >
        <div className='relative w-1/4'>
          <span className='badget'>1</span>
          <img
            src={post.image}
            alt="post image"
            className="h-[50px] w-[50px] rounded-full"
            loading='lazy'
          />
        </div>
        <p className='post-text '>But I must explain to you how all this mistaken idea</p>
      </div>
    </div>
      )
    }
    )
  }
  
  
  </>
    


  );
};

export default PostsContainer;
