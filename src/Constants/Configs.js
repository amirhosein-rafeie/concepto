import {
  calc,
  Ai,
  bioTech,
  btc,
  coding,
  Ecom,
  grapghic,
  medic,
  music,
  scince,
  media,
  space,
  transport,
  cinema,
} from "../assets/images/index.js";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DomainAddOutlinedIcon from "@mui/icons-material/DomainAddOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { maram, sakoo, startup, digikalaProgram } from "../assets/images";
import { BluSearch } from "../assets/images";
import { TapsiSearch } from "../assets/images";
import { digikalaSearch } from "../assets/images";
import { AliBabaSearch } from "../assets/images";
import { SnappFoodSearch } from "../assets/images";
import { IranCellSearch } from "../assets/images";
import { Snapp } from "../assets/images";
import Snappcomp from "../assets/snappcomp.png";
import Alibabcomp from "../assets/alibabcomp.png";
import Digicomp from "../assets/Digicomp.png";
import Farabicomp from "../assets/Farabi.png";
import snapp from "../assets/snapp2.png";
import Alibaba from "../assets/Alibabapic.png";
import Farabi from "../assets/Farabipic.jpg";
import Digikala from "../assets/Digi.png";

import Greensnapp from "../assets/Greensnapp.png";
import Ali from "../assets/Ali.png";
import Amir from "../assets/Omid.png";
import Farhad from "../assets/F.png";
import Atousa from "../assets/Atousa.png";
import Snappfood from "../assets/snappfood.png";

import { blu, asiatech, farabi, bimeh, alibaba } from "../assets/images";
export const recentEventsCategories = [
  {
    id: 1,
    title: "بوت کمپ برنامه نویسی دیجی کالا",
    discription:
      "در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب دیجی‌کالا، بوژان و...",
    img: digikalaProgram,
    location: "تهران ,ایران",
    time: "۲۹ بهمن",
  },
  {
    id: 2,
    title: "سکوی پرتاب غزال.",
    discription:
      "سکوی پرتاب غزال، 27 دی ماه سال جاری با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های سازنده بازی های رایانه ای برگزار خواهد شد.",
    img: sakoo,
    location: "تهران، ایران",
    time: "27 دی",
  },
  {
    id: 3,
    title: "سکوی پرتاب قزوین.",
    discription:
      "رویداد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های این استان برگزار می‌شود.",
    img: maram,
    location: "قزوین , ایران",
    time: "24 آبان",
  },
  {
    id: 4,
    title: "فراخوان جذب ایده و استارتاپ.",
    discription:
      "در حاشیه همایش معدن‌کاری دیجیتال، خانه خلاق و نوآوری دنیای اقتصاد برای ایده‌ها و استارتاپ‌های حوزه معدن جذب سرمایه می‌کند.",
    img: startup,
    location: "تهران، ایران",
    time: "22 شهریور",
  },
];
export const OfferCategories = [
  { id: 1, name: "blu", amount: 12, linkName: "بلو بانک", img: blu },
  { id: 2, name: "asiaTech", amount: 16, linkName: "آسیاتک", img: asiatech },
  {
    id: 3,
    name: "farabi",
    amount: 11,
    linkName: "کارگزاری فارابی",
    img: farabi,
  },
  {
    id: 4,
    name: "bimeBazar",
    amount: 14,
    linkName: "بیمه بازار",
    img: bimeh,
  },
  {
    id: 5,
    name: "Alibaba",
    amount: 18,
    linkName: "گروه علی بابا",
    img: alibaba,
  },
  { id: 6, name: "snapp", amount: 23, linkName: "اسنپ", img: Snapp },
];
export const Boxes = [
  {
    id: 1,
    pre: "تجارت الکترونیک",
    title: "اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست",
    description:
      "در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و ۶۵ سفر روزانه در سرویس خودرو و باکس را زد. این رکورد در روز چهارشنبه، دوم اسفند، ثبت شد.",
    profilepic: Farhad,
    headerImage: Greensnapp,
    name: "فرهاد رئوفی",
    date: "1402/12/11",
    brand: "اسنپ",
  },
  {
    id: 2,
    pre: "تجارت الکترونیک",
    title: "بار دیگر اسنپ فود به دلیل مشکل فنی از دسترس خارج شد",
    description:
      "بار دیگر اسنپ‌فود به‌دلیل مشکل فنی از دسترس کاربران خارج شد. این مشکل اوایل بهمن هم تکرار شده بود و رفع آن ساعت‌ها طول کشید.",
    profilepic: Amir,
    headerImage: Snappfood,
    name: "امیر بختیاری",
    date: "1402/12/5",
    brand: "اسنپ فود",
  },
  {
    id: 3,
    pre: "تجارت الکترونیک",
    title:
      "رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد: ثبت ۲ خدمت در هر ثانیه",
    description:
      "با نزدیکی به سال نو و افزایش سفرهای بین شهری، رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد.",
    profilepic: Atousa,
    headerImage: Ali,
    name: "آتوسا صفوی زاده",
    date: "1402/12/3",
    brand: "علی بابا",
  },
];
export const boxes = [
  {
    id: 1,
    pre: "تجارت الکترونیک",
    title: "شرکت اسنپ",
    description:
      "از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.",
    headerImage: Snappcomp,
    city: "تهران ، ایران",
    brand: "اسنپ",
    rate: "5",
    newContacts: 392,
    newInvestors: 2134,
    prof: snapp,
  },
  {
    id: 2,
    pre: "تجارت الکترونیک",
    title: "شرکت دیجی کالا",
    description:
      "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و.",
    headerImage: Digicomp,
    city: "تهران ، ایران",
    brand: "دیجی کالا",
    rate: "4",
    newContacts: 423,
    newInvestors: 2110,
    prof: Digikala,
  },
  {
    id: 3,
    pre: "تجارت الکترونیک",
    title: "کارگزاری فارابی",
    description:
      "کارگزاری بورس خدماتی شامل خرید و فروش سهام و دریافت کد بورسی را ارائه می‌کند؛ همه این خدمات در کارگزاری فارابی به‌صورت غیرحضوری در اختیار شماست.",
    headerImage: Farabicomp,
    city: "تهران ، ایران",
    brand: "کارگزاری فارابی",
    rate: "5",
    newContacts: 332,
    newInvestors: 2130,
    prof: Farabi,
  },
  {
    id: 4,
    pre: "تجارت الکترونیک",
    title: "شرکت علی بابا",
    description:
      "علی‌بابا برندی از هلدینگ پرافتخار توشا (توسعه تجربه شایسته سفر) است، سامانه‌ای که به‌واسطه پشتیبانی و حمایت شما در سکوی اول گردشگری کشور ایستاده.",
    headerImage: Alibabcomp,
    city: "تهران ، ایران",
    brand: "علی بابا",
    rate: "5",
    newContacts: 396,
    newInvestors: 2910,
    prof: Alibaba,
  },
];
export const MainSearchComponent = [
  { icon: FavoriteBorderOutlinedIcon, label: "ذخیره شده‌ها", path: "/saved" },
  { icon: DomainAddOutlinedIcon, label: "شرکت‌ها", path: "/companies" },
  { icon: CallOutlinedIcon, label: "مخاطبین", path: "/contacts" },
  { icon: AttachMoneyOutlinedIcon, label: "سرمایه گذار", path: "/investors" },
  { icon: EventOutlinedIcon, label: "رویداد‌ها", path: "/events" },
];
export const companiesList = [
  {
    name: "بلوبانک",
    img: BluSearch,
    category: "طراحی گیمینگ",
    location: "تهران",
    explanation: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید ",
    type: "private",
    views: 31500,
    likes: 25100,
    rating: 5.3,
    industryScore: 5.1,
    private: false,
    employees: 12,
  },
  {
    id: 2,
    name: "گروه اسنپ",
    img: Snapp,
    category: "حمل و نقل و تدارکات",
    location: "ایران، شیراز",
    explanation: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید ",
    type: "public",
    views: 350440,
    likes: 250210,
    rating: 4.3,
    industryScore: 4.1,
    private: false,
    employees: 23,
  },
  {
    id: 3,
    name: "گروه علی بابا",
    img: AliBabaSearch,
    category: "طراحی گیمینگ",
    location: "اصفهان",
    explanation: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید ",
    type: "private",
    views: 35040,
    likes: 25030,
    rating: 5.2,
    industryScore: 1.1,
    private: false,
    employees: 97,
  },
  {
    id: 4,
    name: "اسنپ فود",
    img: SnappFoodSearch,
    category: "طراحی گیمینگ",
    location: "مشهد",
    explanation: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید ",
    type: "public",
    views: 1033498,
    likes: 231313,
    rating: 9.2,
    industryScore: 2.1,
    private: false,
    employees: 4,
  },
  {
    id: 5,
    name: "تپسی",
    img: TapsiSearch,
    category: " حمل و نقل و تدارکات",
    location: "کرج",
    explanation: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید ",
    type: "private",
    views: 234342,
    likes: 1932,
    rating: 4.3,
    industryScore: 6.2,
    private: false,
    employees: 15,
  },
  {
    id: 6,
    name: "ایرانسل",
    img: IranCellSearch,
    category: "طراحی گیمینگ",
    location: "تهران",
    explanation: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید ",
    type: "private",
    views: 6500,
    likes: 123500,
    rating: 3.9,
    industryScore: 3.9,
    private: false,
    employees: 56,
  },
  {
    id: 7,
    name: "دیجی‌کالا",
    img: digikalaSearch,
    category: "تجارت الکترونیک و خرده فروشی",
    location: "تهران",
    explanation: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید ",
    type: "private",
    views: 2600,
    likes: 2600,
    rating: 4.1,
    industryScore: 4.1,
    private: false,
    employees: 45,
  },
  {
    id: 8,
    name: "تپسی",
    img: TapsiSearch,
    category: "حمل و نقل و تدارکات",
    location: "اصفهان",
    explanation: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید ",
    type: "private",
    views: 2500,
    likes: 2500,
    rating: 4.3,
    industryScore: 4.3,
    private: false,
    employees: 100,
  },
  {
    id: 9,
    name: "اسنپ فود",
    img: SnappFoodSearch,
    category: "طراحی گیمینگ",
    location: "تهران",
    explanation: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید ",
    type: "public",
    views: 3000,
    likes: 3000,
    rating: 4.2,
    industryScore: 4.2,
    private: false,
    employees: 17,
  },
];

export const cards = [
  {
    id: 1,
    text: "با کسب و کارها ارتباط بگیر",
    type: "contact",
  },
  {
    id: 2,
    text: "کسب و کارهای مناسب رو پیدا کن",
    type: "search",
  },
  {
    id: 3,
    text: "شرکت‌های مورد علاقت رو پیدا کن",
    type: "contact",
  },
];
export const categories = [
  { id: 1, name: "هوش مصنوعی", discription: "هوش مصنوعی", img: Ai },
  { id: 2, name: "برنامه نویسی", discription: "برنامه نویسی", img: coding },
  { id: 3, name: "ارز دیجیتال", discription: "ارز دیجیتال", img: btc },
  { id: 4, name: "حسابداری", discription: "حسابداری", img: calc },
  { id: 5, name: "گرافیک", discription: "گرافیک", img: grapghic },
  { id: 6, name: "رسانه ها", discription: "رسانه ها", img: media },
  { id: 7, name: "هوا فضا", discription: "هوا فضا", img: space },
  { id: 8, name: "پزشکی", discription: "پزشکی", img: medic },
  {
    id: 9,
    name: "تجارت الکترونیک",
    discription: "تجارت الکترونیک",
    img: Ecom,
  },
  { id: 10, name: "علمی", discription: "علمی", img: scince },
  { id: 11, name: "موسیقی", discription: "موسیقی", img: music },
  { id: 12, name: "بیو تکنولوژی", discription: "بیو تکنولوژی", img: bioTech },
  { id: 13, name: "فیلم و سینما", discription: "فیلم و سینما", img: cinema },
  { id: 14, name: "حمل و نقل", discription: "حمل و نقل", img: transport },
];
export const marks = [
  { id: 1, loc: [35.6, 51.39], title: "Tehran" },
  { id: 2, loc: [32.6, 51.6], title: "Tabriz" },
  { id: 3, loc: [38.08, 46.29], title: "Isfahan" },
];
export const SearchInvestor = [
  {
    id: 1,
    name: "بلوبانک",
    img: BluSearch,
    sarmayeh: "120.000",
    explanation:
      "تهران، خیابان خالد اسلامبولی، منطقه ۱۷، بلوار چمران، کوچه ۱۵، پلاک ۳۰",
    outcome: "547",
    private: false,
  },
  {
    id: 2,
    name: "گروه علی بابا",
    img: AliBabaSearch,
    sarmayeh: "3.000.000.000",
    explanation:
      "تهران، خیابان ولیعصر، منطقه ۱۷، بلوار جنت آباد، کوچه ۱۵، پلاک ۳۰",
    outcome: "329",
    private: false,
  },
  {
    id: 3,
    name: "تپسی",
    img: TapsiSearch,
    sarmayeh: "190.000",
    explanation:
      "تهران، خیابان مجاهدین اسلام، منطقه ۴، بلوار مطهری، کوچه ۵، پلاک ۴۰۰",
    outcome: "587",
    private: true,
  },
  {
    id: 4,
    name: "دیجی‌کالا",
    img: digikalaSearch,
    sarmayeh: "۲۳.000.000",
    explanation: "تهران، خیابان فرشته، منطقه ۶، بلوار چمران، کوچه ۱۰، پلاک ۴۰۰",
    outcome: "34",
    private: true,
  },
  {
    id: 5,
    name: "تپسی",
    img: TapsiSearch,
    sarmayeh: "۴۳.000.000",
    explanation:
      "تهران، خیابان ولیعصر، منطقه ۲۲، بلوار سید خندان، کوچه ۵، پلاک ۲۰",
    outcome: "5",
    private: false,
  },
  {
    id: 6,
    name: "اسنپ فود",
    img: SnappFoodSearch,
    sarmayeh: "۲.000.000.000",
    explanation:
      "تهران، خیابان دکتر شریعتی، منطقه ۱۵، بلوار میرداماد، کوچه ۱۰، پلاک ۵۰",
    outcome: "9",
    private: true,
  },
];
export default {
  categories,
  companiesList,
  cards,
  boxes,
  OfferCategories,
  Boxes,
  recentEventsCategories,
  marks,
  MainSearchComponent,
};
