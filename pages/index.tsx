import Image from "next/image";
import Wars from '../public/images/wars.jpg';
import Hung from '../public/images/hung.webp';
import Number from '../public/images/anwar-numbers.jpg';
import Muhyiddin from '../public/images/muhyiddin.jpg';
import Tired from '../public/images/tired.jpg';
import Cuti from '../public/images/cuti.jpg';
import Zahid from '../public/images/zahid.webp';
import Hisham from '../public/images/hisham.webp';
import Red from '../public/images/red.png'
import Blue from '../public/images/blue.png'
import Numb from '../public/images/numb.jpg'
import Fire from '../public/images/fire.jpg'
import Deadline from '../public/images/deadline.jpg'
import BN from '../public/images/BN.jpg'
import DSAI from '../public/images/DSAI.jpg'
import GPS from '../public/images/GPS.jpg'
import HN from '../public/images/HN.webp'
import PN from '../public/images/PN.jpg'
import BNPN from '../public/images/BNPN.jpg'
import BNPH from '../public/images/BNPH.jpg'
import Anwar from '../public/images/anwar.jpg'
import Haircut from '../public/images/haircut.jpg'
import Hint from '../public/images/hint.jpg'
import Meeting from '../public/images/meeting.jpg'
import Nina from '../public/images/nina.jpg'
import Numbers from "../components/Numbers";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="container pb-16">
        <Image className=" w-[600px] mx-auto" src={Wars} alt="Parliament Wars" />
        <p className="pb-8 text-[11px] text-gray-600 text-center">u/chantengri via Reddit</p>
        <h5 className="text-center text-[11px] font-bold text-white uppercase">GE15 Election</h5>
        <h1 className="px-4 pt-1 pb-2 leading-none text-center text-4xl font-semibold font-serif text-white">Start the Parlimen Wars</h1>
        <p className="px-4 pb-4 text-center text-[11px] font-normal text-gray-500">
          A brief account of events following the 15th Malaysian general election held on 19th November 2022. </p>
        <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          After many years of waiting, the highly anticipated sequel to the nation's closely followed saga is now in theatres near you.
          Will we finally put an end to Anwar's 24-year long quest of becoming Prime Minister?
          Or will we see Mahiaddin secure his second term?
        </p>
        <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          The votes have been cast, now all the Rakyat has to do is wait for a government to form,
          and ask the all-important question:</p>
        <div className="max-w-screen px-4 py-4">
          <Image className="mx-auto" width="400" src={Cuti} alt="Bila cuti" />
          <p className="pb-1 text-[11px] text-center text-gray-600">MGAG, KC Green</p>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        <h5 className="text-center text-md tracking-tight font-normal text-gray-400">Counting Votes</h5>
        <p className="pb-4 text-center text-2xl font-semibold font-serif text-white">A Game of Numbers</p>
        <div className="py-2">
          <Image className="mx-auto" width="600" src={Hung} alt="Hung Parliament" />
          <p className="pb-1 text-[11px] text-center text-gray-600">@kuasasiswa via Twitter</p>
          <p className="px-4 py-2 md:w-[500px] text-md mx-auto font-serif text-gray-400">
            Season 15 of Game of Numbers begins with a hung parliament. No single coalition takes majority, but
            Pakatan Harapan holds the most seats with 82 seats, whereas Perikatan Nasional is at a close second with 73 seats.</p>
        </div>
        <div className="py-4 flex flex-row space-x-4 md:space-x-8 place-content-center">
          <div className="w-[200px]">
            <Image width="200" src={Muhyiddin} alt="" />
            <p className="pb-1 text-[11px] text-gray-600">SCMP</p>
            <p className="text-sm font-serif text-gray-400">Muhyiddin claims PN is in the lead to form government</p>
          </div>
          <div className="w-[200px]">
            <Image width="200" src={Number} alt="" />
            <p className="pb-1 text-[11px] text-gray-600">SCMP</p>
            <p className="text-sm font-serif text-gray-400">But Anwar says that he has the numbers (again for the nth time) </p>
          </div>
        </div>
        <div className="py-4">
          <Image className="mx-auto" width="500" src={Zahid} alt="Zahid Hamidi" />
          <p className="pb-1 text-center text-[11px] text-gray-600">FMT</p>
          <p className="px-4 py-2 md:w-[500px] text-md mx-auto font-serif text-gray-400">
            Meanwhile BN is the biggest loser of the election, taking only 30 seats.
            They will likely be playing as the kingmaker alongside GPS and GRS. </p>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        <h5 className="text-center text-md tracking-tight font-normal text-gray-400">You Get The Numbers, You Get The Numbers</h5>
        <p className="pb-4 text-center text-2xl font-semibold font-serif text-white">Everyone Gets The Numbers</p>
        <p className="px-4 py-2 md:w-[500px] text-md mx-auto font-serif text-gray-400">
          Both Muhyiddin and Anwar claim they have the numbers.
          Which begs the question: Who is number? Agong or the rakyat?</p>

        <div className="py-4 flex flex-col md:flex-row place-content-center">
          <div className="px-4 w-[350px] md:w-[400px]">
            <p className="py-2 mx-auto text-sm font-bold font-serif text-gray-400">Agong:</p>
            <Image width="400" src={Tired} alt="Tired" />
            <p className="pb-1 text-[11px] text-gray-600">u/puppymaster123 via Reddit</p>
          </div>
          <div className="px-4 w-[350px] md:w-[400px]">
            <p className="py-2 mx-auto text-sm font-bold font-serif text-gray-400">Rakyat:</p>
            <Image width="400" src={Numb} alt="Numb" />
            <p className="pb-1 text-[11px] text-gray-600">@TheMokumentary via Twitter</p>
          </div>
        </div>

        <p className="px-4 py-4 md:w-[500px] text-center text-md mx-auto font-serif text-gray-400">
          Jokes aside, here are the actual numbers.</p>
        <Numbers />

        <p className="pt-12 text-center text-md font-serif text-gray-400">
          Considering PN will not work with PH, these two options seem most likely.</p>
        <div className="py-4 flex flex-row space-x-4 md:space-x-8 place-content-center">
          <div className="w-[200px]">
            <Image width="200" src={Red} alt="Red pill" />
            <p className="pb-1 text-[11px] text-gray-600">Reddit</p>
          </div>
          <div className="w-[200px]">
            <Image width="200" src={Blue} alt="Blue pill" />
            <p className="pb-1 text-[11px] text-gray-600">Reddit</p>
          </div>
        </div>
        <p className="py-4 text-center text-md font-serif text-gray-400">
          Which one would you choose?</p>
      </div>

      <div className="container px-4 py-8 mx-auto">
        <h5 className="text-center text-md tracking-tight font-normal text-gray-400">PN + BN + Borneo</h5>
        <p className="pb-2 text-center text-2xl font-semibold font-serif text-white">Alliance Born Anew</p>
        <p className="px-4 py-4 md:w-[500px] text-md mx-auto font-serif text-gray-400">
          As Malaysians experience its first hung parliament, emergency meetings are being held to deal with the implications that came along it.</p>
        <Image className="mx-auto" width="500" src={Meeting} alt="Muhyiddin with Hadi Awang and Abang Johari" />
        <p className="pb-1 text-[11px] text-center text-gray-600">Muhyiddin Yassin via Facebook</p>
        <p className="px-4 py-4 md:w-[500px] text-md mx-auto font-serif text-gray-400">
          Muhyiddin shares a picture after meeting PAS chairman Tan Sri Abdul Hadi Awang
          and GPS chairman Tan Sri Abang Johari Openg at his residence.</p>
        <div className="py-4 flex flex-row space-x-4 md:space-x-8 place-content-center">
          <div className="w-[200px]">
            <Image width="200" src={Deadline} alt="Agong sets deadline" />
            <p className="pb-1 text-[11px] text-gray-600">Malaysiakini</p>
            <p className="text-sm font-serif text-gray-400">
              Istana Negara sets deadline for the list of MPs by Monday, 2pm</p>
          </div>
          <div className="w-[200px]">
            <Image width="200" src={GPS} alt="GPS agrees" />
            <p className="pb-1 text-[11px] text-gray-600">The Borneo Post</p>
            <p className="text-sm font-serif text-gray-400">
              Hours after the meeting, GPS agrees to form government with PN, BN and GRS</p>
          </div>
        </div>
        <p className="py-4 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          So in the end, were Anwar's numbers just another fluke?
          Is Muhyiddin back for his second term as Prime Minister? 
          Where exactly is Anwar right now and what's his response? 
          So many questions and yet only time will tell..</p>

        <p className="py-4 text-center text-md font-serif text-gray-400">
          Voting PN to teach BN a lesson, they say..</p>
        <div className="max-w-screen">
          <Image className="mx-auto" width="300" src={BNPN} alt="BNPN Meme" />
          <p className="text-[11px] text-center text-gray-600">u/SheepDogee via Reddit</p>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        <h5 className="text-center text-md tracking-tight font-normal text-gray-400">PH + BN</h5>
        <p className="pb-4 text-center text-2xl font-semibold font-serif text-white">A National Hope? </p>
        <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          Hours after news broke, Zahid denies the claim of working with PN to form government
          and reminds BN MPs that they have signed a pledge giving him the mandate to determine
          any political cooperation.</p>
        <div className="py-2">
          <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
            Meanwhile, PH supporters rejoice as Zahid comes in with a clutch save just when Anwar's hope was starting to fade.</p>
          <Image className="pt-2 mx-auto" width="300" src={HN} alt="Harapan Nasional" />
          <p className="pb-1 text-[11px] text-center text-gray-600">u/superfiery via Reddit</p>
        </div>
        <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          Speaking of which, Anwar has also broken silence. It turns out..</p>

        <div className="py-2 flex flex-row space-x-4 md:space-x-8 place-content-center">
          <div className="w-[200px]">
            <Image width="200" src={Haircut} alt="Anwar Haircut" />
            <p className="pb-1 text-[11px] text-gray-600">Anwar Ibrahim via Twitter</p>
            <p className="text-sm font-serif text-gray-400">
              Anwar was getting a hair cut. He maintains he has the numbers, but declines to reveal his backers.</p>
          </div>
          <div className="w-[200px]">
            <Image width="200" src={Hint} alt="P M and 10 circled on name card" />
            <p className="pb-1 text-[11px] text-gray-600">@lanterahijauas via Twitter</p>
            <p className="text-sm font-serif text-gray-400">
              Perhaps he is hinting us of what is to come in his tweet, as what a Twitter user is suggesting?</p>
          </div>
        </div>

        <p className="px-4 pt-12 pb-4 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          The next morning, members of PH arrive at Seri Pacific Hotel to meet BN chairperson Zahid
          and the other 29 MPs.</p>
        <div className="py-2">
          <Image className="mx-auto" width="500" src={BNPH} alt="Meeting between PH and BN" />
          <p className="pb-1 text-[11px] text-center text-gray-600">Fahmi Fadzil via Facebook</p>
          <p className="px-4 py-4 text-md md:w-[500px] mx-auto font-serif text-gray-400">
            After the meeting, Anwar says he is pleased with the ongoing negotiations with BN to form a government under his leadership.
            BN however has requested for more time to finalise their agreement.</p>
        </div>

        <div className="container px-4 py-8 mx-auto">
          <h5 className="text-center text-md tracking-tight font-normal text-gray-400">Stalemate</h5>
          <p className="pb-4 text-center text-2xl font-semibold font-serif text-white">The King vs The Kingmaker</p>
          <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
            On the next day, tables turn as BN Treasurer-General Hishammuddin announces that he would rather be sacked than work with DAP or Anwar.</p>
          <Image className="mx-auto pt-4" width="400" src={Hisham} alt="Hisham refuses to work with PH" />
          <p className="pb-1 text-[11px] text-center text-gray-600">Hishammuddin Hussein</p>
          <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
            Similarly, daughter of PM Ismail Sabri also claims his father is ready to be sacked from UMNO should BN work with PH.</p>
          <Image className="mx-auto pt-4" width="250" src={Nina} alt="Ismail refuses to work with PH" />
          <p className="pb-1 text-[11px] text-center text-gray-600">Nina Ismail Sabri</p>

          <p className="px-4 py-4 md:w-[500px] mx-auto text-md font-serif text-gray-400">
            And on Tuesday 2pm sharp, Ismail Sabri states that BN has decided to support neither PH nor PN to form
            government and will remain as opposition.</p>

          <div className="py-4 flex flex-row space-x-4 md:space-x-8 place-content-center">
            <div className="w-[200px]">
              <Image width="200" src={DSAI} alt="Anwar" />
              <p className="pb-1 text-[11px] text-gray-600">Mistar</p>
              <p className="text-sm font-serif text-gray-400">
                At 4.30pm, Anwar and Muhyiddin were summoned by Agong but no decisions were made during the audience.</p>
            </div>
            <div className="w-[200px]">
              <Image width="200" src={PN} alt="Muhyiddin declines" />
              <p className="pb-1 text-[11px] text-gray-600">New Straits Times</p>
              <p className="text-sm font-serif text-gray-400">
                Muhyiddin reveals he declined Agong's request for PH and PN to work together to form government.</p>
            </div>
          </div>

          <p className="px-4 pt-12 pb-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
            The next day, BN meets with PN leaders at St Regis hotel after audience with Agong, raising further questions of a PN-BN partnership.
            On the other hand, a letter by Zahid to Agong goes viral as the letter shows support of BN's 30 MPs to Anwar as 10th Prime Minister.</p>
          <Image className="mx-auto py-4" width="400" src={BN} alt="PH and PN wants BN dacing(scales)" />

          <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
            Has BN performed a U-turn on their decision yesterday? If so, will they choose to work with PH or PN?
            Again, only time will tell..</p>

          <p className="px-4 pt-12 md:w-[500px] text-center text-md mx-auto font-serif text-gray-400">
            Meanwhile at Istana Negara.. </p>
          <div className="w-[300px] md:w-[400px] mx-auto">
            <p className="py-2 mx-auto text-sm font-bold font-serif text-gray-400">Agong:</p>
            <Image className="mx-auto" width="400" src={Fire} alt="Agong comes back to a fire" />
            <p className="pb-1 text-[11px] text-center text-gray-600">Reddit</p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        <h5 className="text-center text-md tracking-tight font-normal text-gray-400">End Game</h5>
        <p className="pb-4 text-center text-2xl font-semibold font-serif text-white">Hope Prevails</p>

        <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          In an unexpected turn of events, BN's UMNO gives full support for Agong's unity government plan not headed by PN.
          Yet, PN Deputy Hadi Awang maintains they are ahead and motions to stay calm.</p>
        <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          Later in the morning, Agong holds a special meeting with fellow Rulers at Istana Negara.
          Meanwhile, DAP Secretary-General Anthony Loke visits Premier Sarawak and makes open apology on behalf of DAP.
          Lim Guan Eng also apologises to both Sarawak Premier and GPS for his previous remarks.</p>
        <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          As GRS follows suit to give support to Agong's unity government, 
          PN now agrees to <span className="italic">consider</span> Agong's unity government proposal as a last-ditch effort.</p>

        <p className="px-4 py-2 md:w-[500px] mx-auto text-md font-serif text-gray-400">
          But PN's efforts came in too little, too late as the Rulers have already DSAIded.</p>
        <Image className="mx-auto pt-4" width="500" src={Anwar} alt="Dato Seri Anwar Ibrahim" />
        <p className="pb-1 text-[11px] text-center text-gray-600">Anwar Ibrahim Twitter</p>
        <p className="px-4 py-2 text-center mx-auto text-md font-serif text-gray-400">
          Dato Seri Anwar Ibrahim will be appointed as Malaysia's 10th Prime Minister.</p>
        <p className="px-4 pt-48 text-center mx-auto text-md font-serif text-gray-400">
          P.S. Cuti you asked? He's got you covered - next Monday (28/11) will be a public holiday.</p>
      </div>
    </div>
  );
}
