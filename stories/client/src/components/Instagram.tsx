import React, { useState, useEffect, useRef } from 'react';
import './Instagram.css';

interface Post {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
}

const Instagram: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const accessToken = 'IGQWROZAUtJdzFtcGplRlFINmFlbFZA6dDItYVVEWWNHc0czSmJzMGx6dWtHa3JvdVBOTXNNMzllV19DRmxpSmp2MlVyR1FfSUxxVkZAEZAlFnamhQa0ZAYN3J4S1hZAUGpNUnNQQjhCeHV3VmxvY1pRTVlsb19GcUk0eXcZD';
      const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`;

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const handleTransitionEnd = () => {
      setTransitionEnabled(false);
    };

    if (carousel) {
      carousel.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, []);

  useEffect(() => {
    const slideToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(posts.length / 3));
      setTransitionEnabled(true);
    };

    if (posts.length > 0) {
      const interval = setInterval(() => {
        slideToNext();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [posts]);

  return (
    <div className="h-auto p-5 flex flex-col justify-center items-center -mt-8">
      <div className="flex flex-col items-center md:flex-row justify-center md:space-x-4 w-full text-center">
        <h1 className="text-xl mt-2 pt-2 md:text-4xl mb-2 md:mb-6 font-custom6">Follow @ManyStories On Instagram</h1>
      </div>

      <div className="container mx-auto p-4 md:h-auto">
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex"
            style={{
              width: `${(posts.length / 4) * 100}%`,
              transform: `translateX(-${currentIndex * (100 / Math.ceil(posts.length / 3))}%)`,
              transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative ${window.innerWidth >= 768 ? 'w-1/3' : 'w-full'} carousel-post`}
              >
                <img className="w-72 h-96 object-cover" src={post.media_url} alt={post.caption} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;





// import React, { useState, useEffect, useRef } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import './Instagram.css';

// interface Post {
//   id: string;
//   caption: string;
//   media_url: string;
//   permalink: string;
// }

// const Instagram: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [transitionEnabled, setTransitionEnabled] = useState(true);

//   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const accessToken = 'IGQWROZAUtJdzFtcGplRlFINmFlbFZA6dDItYVVEWWNHc0czSmJzMGx6dWtHa3JvdVBOTXNNMzllV19DRmxpSmp2MlVyR1FfSUxxVkZAEZAlFnamhQa0ZAYN3J4S1hZAUGpNUnNQQjhCeHV3VmxvY1pRTVlsb19GcUk0eXcZD';
//       const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`;

//       try {
//         const response = await fetch(endpoint);
//         const data = await response.json();
//         setPosts(data.data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     const handleTransitionEnd = () => {
//       setTransitionEnabled(false);
//     };

//     if (carousel) {
//       carousel.addEventListener('transitionend', handleTransitionEnd);
//     }

//     return () => {
//       if (carousel) {
//         carousel.removeEventListener('transitionend', handleTransitionEnd);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const slideToNext = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(posts.length / (isMobile ? 2 : 3)));
//       setTransitionEnabled(true);
//     };

//     if (posts.length > 0) {
//       const interval = setInterval(() => {
//         slideToNext();
//       }, 5000);

//       return () => clearInterval(interval);
//     }
//   }, [posts, isMobile]);

//   const calculateWidth = () => {
//     return isMobile ? `${(posts.length / 2) * 100}%` : `${(posts.length / 3) * 100}%`;
//   };

//   const calculateTranslateX = (index: number) => {
//     return isMobile ? `translateX(-${index * (100 / Math.ceil(posts.length / 2))}%)` : `translateX(-${index * (100 / Math.ceil(posts.length / 3))}%)`;
//   };

//   return (
//     <div className="h-auto p-5 flex flex-col justify-center items-center -mt-8">
//       <div className="flex flex-col items-center md:flex-row justify-center md:space-x-4 w-full text-center">
//         <h1 className="text-xl mt-2 pt-2 md:text-4xl mb-2 md:mb-6 font-custom6">Follow @ManyStories On Instagram</h1>
//       </div>

//       <div className="container mx-auto p-4 md:h-auto">
//         <div className="relative overflow-hidden">
//           <div
//             ref={carouselRef}
//             className="flex"
//             style={{
//               width: calculateWidth(),
//               transform: calculateTranslateX(currentIndex),
//               transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
//             }}
//           >
//             {posts.map((post) => (
//               <a
//                 key={post.id}
//                 href={post.permalink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`block relative ${isMobile ? 'w-1/2' : 'w-1/3'} carousel-post`}
//               >
//                 <img className="w-72 h-96 object-cover" src={post.media_url} alt={post.caption} />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Instagram;
