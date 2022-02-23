import Image from "next/image";
import React from "react";
import PostImg from "../../assets/images/image2.jpg";
import AuthorCard from "../AuthorCard/AuthorCard";
import Subscribe from "../Subscribe/Subscribe";

const SinglePost = () => {
  return (
    <div className="lg:flex gap-7 font-[Poppins] mt-5 lg:mt-7">
      <div className="w-full">
        <div className="overflow-hidden rounded-2xl">
          <Image layout="responsive" src={PostImg} alt="Post image" />
        </div>
        <h2 className="text-3xl font-semibold mt-5">
          WooLentor is a powerful WordPress plugin for WooCommerce
        </h2>
        <p className="text-gray-700 text-base mt-1 mb-4">06 NOV, 2019</p>
        <div className="postContent">
          <p>
            id you know that “despite its name, salted duck eggs can also be
            made from chicken eggs, though the taste and texture will be
            somewhat different, and the egg yolk will be less rich.”?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pharetra sapien nibh, sed tempor mauris suscipit ac. Duis libero
            nibh, porttitor at posuere at, luctus et urna. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Fusce et augue vitae nisl ultrices posuere. Sed facilisis
            metus rutrum, commodo lorem sed, consequat sem. Morbi enim orci,
            molestie a rutrum cursus, pellentesque nec ligula. Etiam porttitor
            iaculis purus sed imperdiet. Nulla consectetur eu sem ut dapibus.
            Duis nec viverra nisl, quis tincidunt massa.
            <br />
            <br />
            Nam ut egestas dolor. Vestibulum ac dignissim sem, vel sollicitudin
            urna. Vivamus consequat est urna, eget feugiat orci porta fermentum.
            Maecenas pulvinar lacinia sapien. Fusce vitae orci tempus, congue
            lectus vel, luctus enim. Ut tempor felis eu ex accumsan volutpat.
            Vestibulum gravida vel est sed hendrerit. Curabitur finibus
            dignissim ipsum quis cursus. Sed eleifend non dui ac dictum. Nam
            dictum augue eget lorem ullamcorper, in iaculis urna dapibus. Nulla
            nunc ante, mattis in accumsan et, aliquet eget magna. Donec
            venenatis ut diam at condimentum. Mauris malesuada elit vel ante
            blandit scelerisque. Cras enim orci, luctus at consequat non,
            interdum ac ex. Donec quis venenatis eros.
            <br />
            <br />
            Aliquam condimentum eu tortor eget feugiat. Maecenas tincidunt
            ultrices arcu venenatis rutrum. Suspendisse eu lectus eu erat
            aliquet tempus a ac urna. Integer euismod erat elementum magna
            pellentesque dapibus. Praesent interdum dolor felis, et auctor purus
            tempus rhoncus. Suspendisse cursus enim eu lacus semper, sed dictum
            neque tincidunt. Praesent pellentesque, quam vel congue accumsan,
            massa erat pulvinar velit, interdum fermentum nunc lacus posuere
            massa. Donec auctor semper metus, vel tempor neque cursus eu. Nam
            ultrices, ex sed dapibus dignissim, quam lorem auctor dui, eget
            varius felis erat lacinia lacus. Fusce vestibulum nec tortor in
            congue. Phasellus id quam efficitur, rutrum est at, hendrerit velit.
            Nulla laoreet ultricies metus quis pharetra. Curabitur libero ante,
            suscipit sit amet ex consectetur, mollis cursus magna.
            <br />
            <br />
            Sed nec eros feugiat, porta sapien non, porta metus. Morbi pharetra
            eros non commodo aliquet. Cras at magna massa. Proin rhoncus libero
            arcu, vehicula pretium dui egestas nec. Nunc ornare dui et egestas
            sodales. Mauris imperdiet risus ut ex pharetra cursus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla massa nulla,
            congue vitae nulla sit amet, fringilla laoreet felis. Donec risus
            ante, lobortis at vulputate eu, euismod sed metus. Duis eu molestie
            dui. Etiam gravida augue tortor, id congue ex luctus a. Donec
            ultrices id nisi in vulputate.
            <br />
            <br />
            Proin dolor augue, accumsan id luctus ut, tristique eu ligula. Sed
            eu blandit tortor. Maecenas semper nunc eu augue semper, ac tempus
            leo blandit. Suspendisse nunc erat, tincidunt at diam nec, varius
            varius sapien. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec accumsan, ipsum
            quis aliquet dapibus, quam purus fermentum ex, vel dignissim dolor
            nisl vulputate neque. Suspendisse sit amet tempus ipsum, quis
            vehicula eros. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </div>
        <div className="tags text-lg mt-4 flex flex-wrap">
          <span className="font-semibold text-xl py-2 mr-2">Tags: </span>
          <h6 className="bg-slate-100 p-2 rounded-md mr-1 sm:mr-2 hover:text-[#fe5f55] transition-all duration-200 cursor-pointer mb-2">
            Javascript
          </h6>
          <h6 className="bg-slate-100 p-2 rounded-md mr-1 sm:mr-2 hover:text-[#fe5f55] transition-all duration-200 cursor-pointer mb-2">
            React Js
          </h6>
          <h6 className="bg-slate-100 p-2 rounded-md mr-1 sm:mr-2 hover:text-[#fe5f55] transition-all duration-200 cursor-pointer mb-2">
            Next Js
          </h6>
          <h6 className="bg-slate-100 p-2 rounded-md mr-1 sm:mr-2 hover:text-[#fe5f55] transition-all duration-200 cursor-pointer mb-2">
            Recoil
          </h6>
          <h6 className="bg-slate-100 p-2 rounded-md mr-1 sm:mr-2 hover:text-[#fe5f55] transition-all duration-200 cursor-pointer mb-2">
            Tailwind CSS
          </h6>
        </div>
      </div>
      <div>
        <AuthorCard />
        <Subscribe />
      </div>
    </div>
  );
};

export default SinglePost;
