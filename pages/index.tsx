import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function Home() {
  const introduce = [
    {
      id: 1,
      title: "why를 생각하는 개발자",
      desc: "모든 일을 행하기에 앞서 가장 중요한 것은 ‘왜?’ 라는 질문을 통해 핵심을 파악하는 일이라고 생각합니다. 라이브러리를 쓴다면 왜 써야하는지, 왜 이 라이브러리를 써야하는지, 지금 이 코드는 왜 필요한지, 스스로 질문하며 탄탄한 개발을 지향하고 있습니다.",
    },
    {
      id: 2,
      title: "협업할 줄 아는 친절한 동료",
      desc: "협업할줄아는  동료개발자",
    },
    {
      id: 3,
      title: "꾸준히 성장하는 사람",
      desc: "꾸준히 성장하고 나아가는 사람이 되고싶습니다",
    },
  ];

  const [play, setPlay] = useState(true);
  const [swiperState, setSwiperState] = useState<any>(null);

  const swiperPlay = () => {
    swiperState?.autoplay.start();
  };
  const swiperPause = () => {
    swiperState?.autoplay.stop();
  };

  useEffect(() => {
    if (play) {
      swiperPlay();
    } else {
      swiperPause();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  return (
    <Layout>
      <Head>
        <title>Serin-B Portfolio</title>
        <meta name="description" content="Serin's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center md:flex-row m-4 gap-3">
        <div className="flex">
          <Image src={"/image/sunny.jpg"} width={400} height={400} alt="logo" />
        </div>
        <button
          onClick={() => setPlay(!play)}
          className="w-fit h-fit p-2 bg-l-yellow rounded-full text-white shadow-lg"
        >
          {play ? <FaPause /> : <FaPlay />}
        </button>
        <div className="flex-1 w-full md:w-3/5">
          <Swiper
            onSwiper={setSwiperState}
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            keyboard={{ enabled: true }}
            slidesPerView={1}
            onAutoplay={() => {
              setPlay(true);
            }}
            onAutoplayPause={() => {
              setPlay(false);
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              // pauseOnMouseEnter: true,
            }}
            className="m-auto swiper-container"
          >
            {introduce.map((el) => (
              <SwiperSlide key={el.id}>
                <div className="flex flex-col gap-4 px-14 md:px-20 pb-12">
                  <h2 className="h-title">{el.title}</h2>
                  <p>{el.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}
