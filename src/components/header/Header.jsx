import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import BottomHeader from './BottomHeader';

function Header() {
  return (
    <header>
      {/* alert header */}
      <div className="bg-primaryColor p-2.5 text-center">
        <p className="text-white text-sm text-ellipsis line-clamp-1">
          Due to current circumstances, there may be slight delays in order processing
        </p>
      </div>
      {/* main header */}
      <div className="container mx-auto px-4">
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />
      </div>
    </header>
  )
}

export default Header
