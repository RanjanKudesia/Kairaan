// "use client";
// import { useState } from "react";
// import { Gallery } from "react-grid-gallery";
// import "react-image-lightbox/style.css";
// import { images, CustomImage } from "./images";
// import Lightbox from 'react-image-lightbox';


// export default function Imagegallery() {
//   const [index, setIndex] = useState(-1);

//   const currentImage = images[index];
//   const nextIndex = (index + 1) % images.length;
//   const nextImage = images[nextIndex] || currentImage;
//   const prevIndex = (index + images.length - 1) % images.length;
//   const prevImage = images[prevIndex] || currentImage;

//   const handleClick = (index, item) => setIndex(index);
//   const handleClose = () => setIndex(-1);
//   const handleMovePrev = () => setIndex(prevIndex);
//   const handleMoveNext = () => setIndex(nextIndex);

//   return (
//     <div>
//       <Gallery
//         images={images}
//         onClick={handleClick}
//         enableImageSelection={false}
//       />
//       {!!currentImage && (
//         /* @ts-ignore */
//         <Lightbox
//           mainSrc={currentImage.original}
//           imageTitle={currentImage.caption}
//           mainSrcThumbnail={currentImage.src}
//           nextSrc={nextImage.original}
//           nextSrcThumbnail={nextImage.src}
//           prevSrc={prevImage.original}
//           prevSrcThumbnail={prevImage.src}
//           onCloseRequest={handleClose}
//           onMovePrevRequest={handleMovePrev}
//           onMoveNextRequest={handleMoveNext}
//         />
//       )}
//     </div>
//   );
// }