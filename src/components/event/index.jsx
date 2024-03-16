import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Image from 'next/image';

const Popup = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) {
    return null; // Render nothing if isOpen is false or content is null
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="fixed inset-0 backdrop-blur-sm"></div>
      
      <div className="mt-16 md:mt-0 relative z-50 bg-[var(--primary-color)] shadow-lg w-[90%] md:w-[50%] rounded-md p-10">
        <button onClick={onClose} className="absolute top-0 right-0 p-3">
          <span className="sr-only">Close</span>
          <IoClose className="text-white text-3xl" />
        </button>
        <div className='flex justify-between items-center w-full flex-col-reverse md:flex-row '>
        <div className='w-[95%] md:w-[70%] md:pr-5'>
        <div className="w-full flex justify-start items-center flex-wrap">
            <div className="w-[35%] md:w-fit text-right border-dotted border-r-2 pr-3 border-white mr-3">
              <h2 className="font-bold text-3xl mb-1 md:mb-0 md:text-5xl md:leading-[40px]">{content.date}</h2>
              <p className="uppercase md:leading-10 text-xs md:text-base">March 2024</p>
            </div>
            <div className="w-[45%] md:w-[60%] ml-3 text-left flex justify-start items-start flex-col">
              <h2 className="text-lg md:text-3xl font-extrabold md:leading-10">{content.title}</h2>
              <p className="uppercase text-xs md:text-base">{content.subtitle}</p>
            </div>
            <p className='mt-5 text-sm md:text-base text-center md:text-left'>{content.description}</p>
          </div>
        </div>
        <div className='w-[95%] md:w-[30%] my-5 md:my-0'>
        <Image src={content.src} alt='event_img' width={500} height={900} className='w-full h-[100px] md:h-[200px] object-cover rounded-lg'/>
        </div>
       
        </div>

      
       
      </div>
    </div>
  );
};

const EventSection = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [showMoreEvents, setShowMoreEvents] = useState(false);

  const handleMoreInfo = (content) => {
    setPopupContent(content);
  };

  const handleClosePopup = () => {
    setPopupContent(null);
  };

  const events = [
    {
      date: "21",
      title: "TARANG",
      subtitle: "(Talent Show for Persons with Disabilities)",
      description: "TARANG is one of the most important events of KAIRAAN that aims to ignite inclusivity and celebrate the artistic spirit of specially-abled individuals. The event explores an array of fun activities, ranging from games to singing and dancing competitions, witnessing exceptional performances. It encourages individuals to go the extra mile by overcoming their reservations and showcasing their true selves. Last year, TARANG observed active participation from schools in and around Bhubaneswar and Cuttack. As an event, it provides an amazing opportunity for its participants to strengthen their interaction with society.",
      src:"/assets/b7.jpg",
    },
    {
      date: "21",
      title: "Project Runaway",
      subtitle: "(Fashion Show)",
      description: `Take a Deep Dive into your closet and dress to impress for Project Runway- where glamour takes centre stage once again! Join us for a night of unparalleled style and runway magic as we showcase the dreamiest looks and trendsetting designs. Be part of the ultimate chic affair and prepare to make every step a statement at Project Runway! Don your heart out on your sleeve and dazzle everyone around with your chicest outfit!`,
      src:"/assets/b7.jpg",
    },
    {
      date: "22",
      title: "Camp Rock",
      subtitle: "(Battle of Bands)",
      description: "Get ready to unleash the thunder at KAIRAAN’s electrifying 'Battle of the Bands' – Camp Rock! This adrenaline pumping event is not just a platform for seasoned artists but an open invitation for all music enthusiasts. Whether you’re into classic rock, indie vibes, or the latest pop anthems, there’s a spot for every musical tribe. Gather your bandmates, fine-tune your instruments, and hit us with your hottest track! Let the music roar!",
      src:"/assets/b7.jpg",
    },
    {
      date: "22",
      title: "RANGMANCH",
      subtitle: "(Theatre competition)",
      description: "The vibrant cultural tapestry of KAIRAAN, unfurls its first chapter of Rangmanch, a captivating exploration of the world of theatre arts. This event promises to transport you to a realm of storytelling, expression, and raw human emotions. From thought-provoking skits and monologues to captivating full-length plays, Rangmanch aims to showcase the talent of budding thespians from NLUO and beyond.",
      src:"/assets/b7.jpg",
    },
    {
      date: "22",
      title: "Pitch Perfect",
      subtitle: "(Solo Singing Competition)",
      description: "As the spotlight illuminates the stage, each performer steps into the limelight, ready to mesmerise the audience with their melodious voice. From soothing tunes to upbeat pop anthems, the solo singing performances span across various genres reflecting the diverse musical tastes of the contestants. With every note sung, be the protagonist of your own musical universe, and create an emotional and enchanting atmosphere that captivates everyone.",
      src:"/assets/b7.jpg",
    },
    {
      date: "22",
      title: "Step Up",
      subtitle: "(Solo Dance Competition)",
      description: `Set the stage on fire with "Step Up" by bringing your A-game to the floor. In “Step up,” with a mix of styles from hip-hop to contemporary, each performer tells their story through movement. The energy is contagious as the audience cheers on the dancers, swept up in the rhythm and passion on display. Judges watch closely, evaluating technique, creativity, and stage presence. The atmosphere crackles with excitement, making "Step Up" a highlight of the fest where talent shines the brightest under the spotlight.`,
      src:"/assets/b7.jpg",
    },
    {
      date: "23",
      title: "High Strung",
      subtitle: "(Group Dance Competition)",
      description: `"High Strung" takes centre stage at our college cultural fest with its exhilarating group dance competition. Here, teams of dancers come together to showcase their collective talent and creativity, setting the floor ablaze with their synchronised moves and infectious energy. At KAIRAAN, we have performances ranging from contemporary fusions to traditional cultural expressions, each telling a captivating story, drawing the audience into a whirlwind of rhythm and motion. With cheers echoing and spirits soaring, "High Strung" transforms the fest into a vibrant celebration of unity and artistry that leaves a lasting impression on all who attend.`,
      src:"/assets/b7.jpg",
    }
  ];

  const visibleEvents = showMoreEvents ? events : events.slice(0, 3); // Show all events if showMoreEvents is true, else show only the first 3 events

  return (
    <section className="relative z-50 px-[30px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px] py-[50px] w-full min-h-[50vh] flex justify-center items-center flex-col">
      <h2 className="text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold text-center md:mb-5 lg:mb-10">
      Events
      </h2>
      {visibleEvents.map((event, index) => (
        <div key={index} className="w-full flex justify-around items-center flex-col border-y-2 py-5 border-white m-3">
          <div className="w-full flex justify-around items-center flex-wrap">
            <div className="w-[45%] md:w-fit text-right border-dotted border-r-2 pr-3 border-white">
              <h2 className="font-bold text-3xl mb-1 md:mb-0 md:text-5xl md:leading-[40px]">{event.date}</h2>
              <p className="uppercase md:leading-10 text-xs md:text-base">March 2024</p>
            </div>
            <div className="w-[calc(55%-0.75rem)] md:w-[40%] ml-3 md:ml-0 text-left flex justify-start items-start flex-col">
              <h2 className="text-xl md:text-3xl font-extrabold leading-10">{event.title}</h2>
              <p className="uppercase text-xs md:text-base">{event.subtitle}</p>
            </div>
            <div className="w-[40%] flex justify-center md:justify-end items-center">
              <button
                onClick={() => handleMoreInfo(event)}
                className="text-xs md:text-base mt-5 md:mt-0 flex justify-center items-center uppercase border-2 border-white text-white py-3 px-5 md:py-4 md:px-10 rounded-lg hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] hover:transition hover:duration-300"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      ))}

      <br />
      {!showMoreEvents ? (
        <button
          onClick={() => setShowMoreEvents(true)}
          className="text-xs md:text-base mt-5 md:mt-0 flex justify-center items-center uppercase border-2 border-white text-white py-3 px-5 md:py-4 md:px-10 rounded-lg hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] hover:transition hover:duration-300"
        >
          View More
        </button>
      ) : (
        <button
          onClick={() => setShowMoreEvents(false)}
          className="text-xs md:text-base mt-5 md:mt-0 flex justify-center items-center uppercase border-2 border-white text-white py-3 px-5 md:py-4 md:px-10 rounded-lg hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] hover:transition hover:duration-300"
        >
          View Less
        </button>
      )}
      <Popup isOpen={!!popupContent} onClose={handleClosePopup} content={popupContent} />
    </section>
  );
};

export default EventSection;
