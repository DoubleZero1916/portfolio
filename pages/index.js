import Head from "next/head";
import Image from "next/image";
import { Preahvihear } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import Script from "next/script";
import Project from "@/components/Project";

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: '400' 
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Oqtay Hashimli</title>
      </Head>
      {/* <main> */}
      <div className="px-[20px] md:pt-[100px] pt-[50px] pb-[58px] md:pb-[115px]"> {/* pb-[100px] only for test */}
        <div className="m-auto max-w-[1200px]">
          <section className="md:pb-[85px] pb-[43px]"> {/* ABOUT SECTION */}
            <div className={`${preahvihear.className} pb-[50px]`}>
              <div className="flex">
                <div className="pr-[25px]">
                  <div className="flex relative">
                    <div className="z-10">
                      <Image
                        src='/avatar.svg'
                        width={165}
                        height={223}
                      />
                    </div>
                    {/* <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                      <Image
                        src={`/ellipse.svg`}
                        width={100}
                        height={500}
                        sizes="1000px"
                      />
                    </div> */}
                  </div>
                </div>
                <div className="pl-[25px]">
                  <div className="text-[17px] underline decoration-[0.1px] decoration-[#888]">A Developer who</div>
                  <div className="text-[50px] max-w-[380px]">
                    Judges a book by its <span className="text-[#7127BA] relative">
                    <Image className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src={`/ellipse1.svg`} width={160} height={200} />cover</span>...
                  </div>
                  <div className="text-[11px]">Because if the cover does not impress you what else can?</div>
                </div>
              </div>
            </div>
            <div className={`${preahvihear.className} pt-[50px]`}>
              <div className="pb-[35px]">
                <div className="text-[30px] sm:text-[50px]">
                  <h2 className="inline">I&apos;m a Full Stack Developer.</h2><span>|</span>
                </div>
                <div className="sm:text-[16px] text-[12px]"> { /* API Admin panel */ }
                  Currently, I&apos;m a Full Stack Developer at <span className="text-[#0ff0ff]">Karabakh University</span>, 
                </div>
              </div>
              <div className="pt-[35px] max-w-[890px] text-[18px] sm:text-[22px]">
                <p>
                  A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                  I make meaningful and delightful digital products that create an equilibrium
                  between user needs and business goals.
                </p>
              </div>
            </div>
          </section>
          <section className="md:pt-[85px] pt-[43px] pb-[40px] md:pb-[80px]">
            <div>
              <div className="pb-[20px]">
                <h2 className={`${preahvihear.className} text-[40px]`}>Work Experience</h2>
              </div>
              <div className="pt-[20px]"> {/* API admin panel */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 pb-[9px]">
                  <Card img={`skills1`} title={`Front-end Developer`} desc={`Take your client onboard seamlessly by our amazing tool of digital onboard process.`} />
                  <Card img={`skills2`} title={`Back-end Developer`} desc={`Take your client onboard seamlessly by our amazing tool of digital onboard process.`} />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 pt-[9px]">
                  <Card img={`skills3`} title={`Full-stack Developer`} desc={`Take your client onboard seamlessly by our amazing tool of digital onboard process.`} />
                  <Card img={`skills4`} title={`NASA`} desc={`Take your client onboard seamlessly by our amazing tool of digital onboard process.`} />
                </div>
              </div>
            </div>
          </section>
          <section className="md:pt-[80px] pt-[40px] pb-[48px] md:pb-[95px]">
            <div className="flex flex-col items-center">
              <div className={`${preahvihear.className} pb-[15px]`}>
                <div>
                  <p className="text-center sm:text-[24px] text-[20px]">
                    I&apos;m currently looking to join a <span className="text-[#A362FF]">cross-functional</span> team
                  </p>
                </div>
                <div>
                  <p className="text-center text-[12px] sm:text-[17px]">
                    that values improving people&apos;s lives through accessible design
                  </p>
                </div>
              </div>
              <div className="pt-[15px]">
                <div className="flex flex-wrap justify-center w-full max-w-[380px] gap-[10px] m-auto">
                  <Logo width={`21`} img={`/logo/figma.svg`} />
                  <Logo width={`32`} img={`/logo/react.svg`} />
                  <Logo width={`32`} img={`/logo/c.svg`} />
                  <Logo width={`32`} img={`/logo/node-js.svg`} />
                  <Logo width={`26`} img={`/logo/redux.svg`} />
                  <Logo width={`26`} img={`/logo/js.svg`} />
                  <Logo width={`32`} img={`/logo/c.svg`} />
                  <Logo width={`32`} img={`/logo/c.svg`} />
                  <Logo width={`26`} img={`/logo/js.svg`} />
                  <Logo width={`32`} img={`/logo/react.svg`} />
                  <Logo width={`21`} img={`/logo/figma.svg`} />
                  <Logo width={`26`} img={`/logo/redux.svg`} />
                  <Logo width={`26`} img={`/logo/node-js.svg`} />
                </div>
              </div>
            </div>
          </section>
          <section className={`md:pt-[95px] pt-[48px] ${poppins.className}`}>
            <div className="flex flex-col gap-[105px] md:gap-[210px]"> {/* API admin panel */}
              <Project
                title={`Tam Store`}
                desc={`A web app for visualizing personalized Spotify data. View your
                      top artists, top tracks, recently played tracks, and detailed audio
                      information about each track. Create and save new playlists of
                      recommended tracks based on your existing playlists and more.`}
                img={`/projects/tamstore.png`}
              />
              <Project
                title={`Elok.az`}
                desc={`A web app for visualizing personalized Spotify data. View your
                      top artists, top tracks, recently played tracks, and detailed audio
                      information about each track. Create and save new playlists of
                      recommended tracks based on your existing playlists and more.`}
                img={`/projects/tamstore.png`}
              />
            </div>
          </section>
        </div>
      </div>
      
      {/* </main> */}
    </>
  );
}
