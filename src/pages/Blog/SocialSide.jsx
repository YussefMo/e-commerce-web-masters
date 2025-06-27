import React from 'react';
import PostsContainer from './PostsContainer';
import SocialMedia from './SocialMedia';
import WidgetBaner from './WidgetBaner';
import Tags from './Tags';

const SocialSide = () => {
  return (
    <section className="px-2.5 py-5">
      <h6 className="text-sm font-semibold text-[#202435]">RECENT POSTS</h6>
      <div className="flex flex-row flex-wrap gap-2.5 md:flex-col">
        <PostsContainer />
      </div>
      <SocialMedia />
      <WidgetBaner />
      <Tags />
    </section>
  );
};

export default SocialSide;
