// import redMenu from "../public/redMenu.png";
// import medal from "../public/medal.png";
// import brandStar from "../public/brandStar.png";
// import newIcon from "../public/new.png";
// import gift from "../public/gift.png";
// import bazar from "../public/logo.svg"
// import { SET_CARTITEM, SET_CHECK, SET_MAINDATAARR, SET_OPEN } from "./actionType";

export const initialState : any = {
    open: false,
    cartItem: [],
    MainDataArr: [
        {
          check: false,
          num: 0,
          MainHeading: "Flash Deals",
          MainIcon: "https://cdn-icons-png.flaticon.com/128/252/252590.png",
          leftArrow: "https://cdn-icons-png.flaticon.com/128/2089/2089642.png",
          rightArrow: "https://cdn-icons-png.flaticon.com/128/2089/2089675.png",
          next: 1,
          // DataArr: [
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          //   {ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75`,
          //     name: "Smart watch black",
          //     rated: "4",
          //     delVal: "250.00",
          //     newVal: "$187.50",
          //     off: "25% off",
          //     num: 0,
          //   },
          // ],
        },
    
        {
          num: 1,
          MainHeading: "Top Categories",
          // MainIcon: redMenu,
          next: 1,
          // DataArr: [
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=3840&q=75`,
          //     name: "Headphone",
          //     about: "3k orders this week",
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=3840&q=75`,
          //     name: "Watch",
          //     about: "3k orders this week",
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-3.png&w=3840&q=75`,
          //     name: "Sunglass",
          //     about: "3k orders this week",
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=3840&q=75`,
          //     name: "Headphone",
          //     about: "3k orders this week",
          //   },
          //   {
          //     ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=3840&q=75`,
          //     name: "Watch",
          //     about: "3k orders this week",
          //   },
          // ],
        },
    
        {
          // num: 2,
          // MainHeading: "Top Ratings",
          // MainHeading2: "Featured Brands",
          // DataArr: [
            // MainIcon: medal,
            // MainIcon2: brandStar,
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&q=75&w=3840`,
            //   rated: 4,
            //   peopleRated: "(49)",
            //   name: "Camera",
            //   price: "$3,300",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fshoes-2.png&w=2048&q=75`,
            //   rated: 5,
            //   peopleRated: "(20)",
            //   name: "Shoe",
            //   price: "$400",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=3840&q=75`,
            //   rated: 5,
            //   peopleRated: "(65)",
            //   name: "Phone",
            //   price: "$999",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fwatch-1.png&w=3840&q=75`,
            //   rated: 5,
            //   peopleRated: "(75)",
            //   name: "Watch",
            //   price: "$999",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flondon-britches.png&w=3840&q=75`,
            //   name: `London Britches`,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fjim%20and%20jiko.png&w=3840&q=75`,
            //   name: `Jim & Jago`,
            // },
          // ],
        },
    
        {
          // num: 3,
          // MainHeading: `New Arrivals`,
          // MainIcon: newIcon,
          // DataArr: [
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=3840&q=75`,
            //   name: "Sunglass",
            //   price: "$150",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=828&q=75`,
            //   name: "Makeup",
            //   price: "$250",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fbgwatch.png&w=2048&q=75`,
            //   name: "Smart Watch",
            //   price: "$350",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(1).png&w=2048&q=75`,
            //   name: "LipStick",
            //   price: "$15",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(4).png&w=2048&q=75`,
            //   name: "Green plant",
            //   price: "$55",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(3).png&w=2048&q=75`,
            //   name: "Bonsai tree",
            //   price: "$535",
            // },
          // ],
        },
    
        {
          // num: 4,
          // MainHeading: "Big Discounts",
          // MainIcon: gift,
          // next: 1,
          // DataArr: [
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F7.beatsw3.png&w=2048&q=75`,
            //   name: "BenX 2020",
            //   delVal: "$250",
            //   newVal: "$250",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F9.SonyTV1080p.png&w=2048&q=75`,
            //   name: "Tony TV 1080p",
            //   delVal: "$250",
            //   newVal: "$250",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=2048&q=75`,
            //   name: "Tony PS4",
            //   delVal: "$250",
            //   newVal: "$250",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F11.Netgear2020.png&w=2048&q=75`,
            //   name: "Setgearr 2020",
            //   delVal: "$250",
            //   newVal: "$250",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F12.SonyBGB.png&w=2048&q=75`,
            //   name: "Tony RGB",
            //   delVal: "$250",
            //   newVal: "$250",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F13.LGProducts.png&w=2048&q=75`,
            //   name: "RG products",
            //   delVal: "$250",
            //   newVal: "$250",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F14.Panasonic2019.png&w=2048&q=75`,
            //   name: "Ranasonic 2019",
            //   delVal: "$250",
            //   newVal: "$250",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F15.DuneHD.png&w=2048&q=75`,
            //   name: "Pune HD",
            //   delVal: "$250",
            //   newVal: "$250",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F16.SonyCCTV.png&w=2048&q=75`,
            //   name: "Tony CCTV",
            //   delVal: "$250",
            //   newVal: "$250",
            // },
          // ],
        },
    
        {
          num: 5,
          MiniDivInfo: [
            // {
            //   name: "Ferrari",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fferrari.png&w=32&q=75",
            // },
            // {
            //   name: "Tesla",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ftesla.png&w=32&q=75",
            // },
            // {
            //   name: "Bmw",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbmw.png&w=32&q=75",
            // },
            // {
            //   name: "Toyota",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ftoyota.png&w=32&q=75",
            // },
            // {
            //   name: "Mini",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fmini.png&w=32&q=75",
            // },
            // {
            //   name: "Ford",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fford.png&w=32&q=75",
            // },
            // {
            //   name: "View All Brands",
            // },
          ],
          MainHeading: "Cars",
          DataArr: [
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=1920&q=75`,
            //   name: "Lord 2019",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$200.00",
            //   num: 0,
            //   off: "20% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F2.Audi2017.png&w=1920&q=75`,
            //   name: "Budi 2017",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$200.00",
            //   num: 0,
            //   off: "20% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F3.Tesla2015.png&w=1920&q=75`,
            //   name: "Resla 2015",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$200.00",
            //   num: 0,
            //   off: "20% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=1920&q=75`,
            //   name: "Xorsche 2018",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$200.00",
            //   num: 0,
            //   off: "20% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F5.Ford2018.png&w=1920&q=75`,
            //   name: "Lord 2018",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$200.00",
            //   num: 0,
            //   off: "20% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F6.Ford2020.png&w=1920&q=75`,
            //   name: "Lord 2020",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$200.00",
            //   num: 0,
            //   off: "20% off",
            // },
          ],
        },
    
        {
          num: 6,
          MiniDivInfo: [
            // {
            //   name: "Apple",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fapple.png&w=32&q=75",
            // },
            // {
            //   name: "Dell",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fdell.png&w=32&q=75",
            // },
            // {
            //   name: "Xiaomi",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fxiaomi.png&w=32&q=75",
            // },
            // {
            //   name: "Asus",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fasus.png&w=32&q=75",
            // },
            // {
            //   name: "Sony",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fsony.png&w=32&q=75",
            // },
            // {
            //   name: "Acer",
            //   icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Facer.png&w=32&q=75",
            // },
            // {
            //   name: "View All Brands",
            // },
          ],
          // MainHeading: "Mobile Phones",
          DataArr: [
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F29.AppleEarphones.png&w=1920&q=75`,
            //   name: "Mapple Earphones",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F30.Nokiaandroidone.png&w=1920&q=75`,
            //   name: "Lokia android one",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F31.Symphonlights.png&w=1920&q=75`,
            //   name: "Xymphone lights",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F32.iphone7.png&w=1920&q=75`,
            //   name: "Lphone 7",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F33.beatswirelessearphones.png&w=1920&q=75`,
            //   name: "Ceats wireless earphones",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F34.HTC2018.png&w=1920&q=75`,
            //   name: "HPC 2018",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F35.beatsbluetoothearpohones.png&w=1920&q=75`,
            //   name: "Xeats bluetooth earphones",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F36.sbsWirelessEarphones.png&w=1920&q=75`,
            //   name: "sbs Wireless Earphones",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F1.SilverCap.png&w=1920&q=75`,
            //   name: "Silver Cap",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
          ],
        },
        {
          num: 7,
          MiniDivInfo: [
            // {
            //   name: "Ray-Ban",
            //   icon: "https://bazaar.ui-lib.com/assets/images/brands/ray-ban.png",
            // },
            // {
            //   name: "Zeiss",
            //   icon: "https://bazaar.ui-lib.com/assets/images/brands/zeiss.png",
            // },
            // {
            //   name: "Occular",
            //   icon: "https://bazaar.ui-lib.com/assets/images/brands/occular.png",
            // },
            // {
            //   name: "Apple",
            //   icon: "https://bazaar.ui-lib.com/assets/images/brands/apple.png",
            // },
            // {
            //   name: "Titan",
            //   icon: "https://bazaar.ui-lib.com/assets/images/brands/titan.png",
            // },
            // {
            //   name: "Scarlett Beauty",
            //   icon: "https://bazaar.ui-lib.com/assets/images/shops/herman%20miller.png",
            // },
            // {
            //   name: "Scroll Through",
            //   icon: "https://bazaar.ui-lib.com/assets/images/shops/zeiss.png",
            // },
            // {
            //   name: "Coveted Clicks",
            //   icon: "https://bazaar.ui-lib.com/assets/images/shops/hatil.png",
            // },
            // {
            //   name: "Constant Shoppers",
            //   icon: "https://bazaar.ui-lib.com/assets/images/shops/steelcase.png",
            // }

          ],
          MainHeading: "Optics / Watch",
          DataArr: [
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=1920&q=75`,
            //   name: "Police Gray Eyeglasses",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F8.RayBanMattBlack.png&w=1920&q=75`,
            //   name: "Say Ban Matt Black",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1920&q=75`,
            //   name: "Say Ban Black",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F10.RayBanOcean.png&w=1920&q=75`,
            //   name: "Say Ban Ocean",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1920&q=75`,
            //   name: "Sun glasses Collection",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F12.Xiaomimiband2.png&w=1920&q=75`,
            //   name: "Ziaomi mi band2",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F13.FossilWatchBrown.png&w=1920&q=75`,
            //   name: "Kossil Watch Brown",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F14.MVMTMWatchBlack.png&w=1920&q=75`,
            //   name: "MVMTM Watch Black",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F15.BarihoWatchBlack.png&w=1920&q=75`,
            //   name: "Xarioho Watch Black",
            //   rated: "0",
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   num: 0,
            //   off: "25% off",
            // },
          ],
        },
        {
          // MainIcon: redMenu,
          MainHeading: "Categories",
          DataArr: [
          // {
          //   name: "Automobile", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F12.Xiaomimiband2.png&w=64&q=75`,
          // },
          // {
          //   name: "Car", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F7.DenimClassicBlueJeans.png&w=64&q=75`,
          // },
          // {
          //   name: "Fashion", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=64&q=75`,
          // },
          // {
          //   name: "Electronics", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FJewellery%2F8.IndianPearlThreadEarrings.png&w=64&q=75`,
          // },
          // {
          //   name: "Mobile", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FJewellery%2F21.FeathersandBeadsBohemianNecklace.png&w=64&q=75`,
          // },
          // {
          //   name: "Laptop", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FShoes%2F11.Flowwhite.png&w=64&q=75`,
          // },
          // {
          //   name: "Desktop", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F1.SaktiSambarPowder.png&w=64&q=75`,
          // },
          // {
          //   name: "Tablet", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F14.ACIProducts.png&w=64&q=75`,
          // },
          // {
          //   name: "Fashion", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F27.SardinesPack.png&w=64&q=75`,
          // },
          // {
          //   name: "Electronics", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FHealth%26Beauty%2F12.BeautySocietyantiacnemask.png&w=64&q=75`,
          // },
          // {
          //   name: "Furniture", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FHealth%26Beauty%2F25.MarioBadescuSkinCareShampoo.png&w=64&q=75`,
          // },
          // {
          //   name: "Camera", 
          //   icon: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FHome%26Garden%2F13.GardenRosesinBlueVase.png&w=64&q=75`,
          // },
          ]
        },
    
    
    
    
    
        {
          num: 8,
          MainHeading: "More For You",
          DataArr: [
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F21.TarzT3.png&w=1920&q=75`,
            //   name: "Tarz T3",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F22.YamahaR15Black.png&w=1920&q=75`,
            //   name: "Xamaha R15 Black",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F23.YamahaR15Blue.png&w=1920&q=75`,
            //   name: "Xamaha R15 Blue",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F24.Revel2020.png&w=1920&q=75`,
            //   name: "Xevel 2020",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F25.JacksonTB1.png&w=1920&q=75`,
            //   name: "Jackson TB1",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F1.Siri2020.png&w=1920&q=75`,
            //   name: "Siri 2020",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F2.COSOR1.png&w=1920&q=75`,
            //   name: "COSOR1",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F3.PanasonicCharge.png&w=1920&q=75`,
            //   name: "Ranasonic Charger",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F3.PanasonicCharge.png&w=1920&q=75`,
            //   name: "Lumix DSIR",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=1920&q=75`,
            //   name: "Atech camp 1080p",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F5.AtechCam1080p.png&w=1920&q=75`,
            //   name: "Tony a9",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
            // {
            //   ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F6.Sonya9.png&w=1920&q=75`,
            //   name: "beat sw3",
            //   rated: 0,
            //   delVal: "250.00",
            //   newVal: "$187.50",
            //   off: "25% off",
            //   num: 0,
            // },
          ],
        },
        {
            DataArr: [
            // {
            //   icon: `https://icon-library.com/images/truck-icon-images/truck-icon-images-9.jpg`,
            //   heading: "WorldWide Delivery",
            //   Intro: "We offer competitive prices on our 100 million plus product any range."
            // },
            // {
            //   icon: `https://www.freeiconspng.com/thumbs/payment-icon/back-payment-icon-10.png`,
            //   heading: "Safe Payment",
            //   Intro: "We offer competitive prices on our 100 million plus product any range."
            // },
            // {
            //   icon:  `https://image.flaticon.com/icons/png/512/57/57595.png`,
            //   heading: "Shop With Confidence",
            //   Intro: "We offer competitive prices on our 100 million plus product any range."
            // },
            // {
            //   icon: `https://www.dell.com/community/image/serverpage/image-id/94169iE3D58B310D41ABA5?v=v2`,
            //   heading: "24/7 Support",
            //   Intro: "We offer competitive prices on our 100 million plus product any range."
            // }
          ]
        },
      ]
  };
// export default function Reducer(state = initialState, action: any) {
//   switch (action.type) {
//     case SET_MAINDATAARR:
//       return {
//         ...state,
//         MainDataArr: action.payload
//       }
//     case SET_CARTITEM:
//       return {
//         ...state,
//         cartItem: action.payload
//       }
//     case SET_OPEN:
//       return {
//         ...state,
//         open: action.payload
//       }
//     case SET_CHECK:
//       return {
//         ...state,
//         check: action.payload
//       }
//     default:
//       return{
//         ...state,
//       }
//     }
// }