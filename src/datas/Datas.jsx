import Banner_one from '../assets/images/banners/banner_one.jpg';
import Banner_two from '../assets/images/banners/banner_two.jpg';
import Banner_three from '../assets/images/banners/banner_three.jpg';
import Banner_four from '../assets/images/banners/banner_four.jpg';
import Mobile_one from "../assets/images/banners/mobile_one.jpg"

import IBM from '../assets/images/home/ibm.jpg'
import Bently from '../assets/images/home/bentley.jpg'
import AD from '../assets/images/home/ad.jpg'
import Cisco from '../assets/images/home/cisco.jpg'
import EMC from '../assets/images/home/emc.jpg'
import Orcale from '../assets/images/home/orcale.jpg'

import Place_one from  '../assets/images/home/placement_one.jpg'
import Place_two from  '../assets/images/home/placement_two.jpg'
import Place_three from  '../assets/images/home/placement_three.jpg'
import Place_four from  '../assets/images/home/placement_four.jpg'
import Place_five from  '../assets/images/home/placement_five.jpg'

const bannerImages = [
  { src: Banner_one ,mobileSrc:Mobile_one},
  { src: Banner_two, mobileSrc:Mobile_one},
  { src: Banner_three ,mobileSrc:Mobile_one},
  { src: Banner_four ,mobileSrc:Mobile_one},
]
const OrgList=[
  {src: IBM},
  {src: Bently},
  {src: AD},
  {src: Cisco},
  {src: EMC},
  {src: Orcale},
]

const PlacementList = [
  { src: Place_one, name: "John Doe", company: " ABC Corp" ,position:"Software Engineer"},
  { src: Place_two, name: "Jane Smith", company: " XYZ Ltd" ,position:"Data Analyst"},
  { src: Place_three, name: "Mike Johnson", company: " Tech Solutions" ,position:"System Developer"},
  { src: Place_four, name: "Emily Davis", company: " Innovatech" ,position:"Network Engineer"},
  { src: Place_five, name: "David Wilson", company: " FutureTech" ,position:"IT Consultant"},
];
// eslint-disable-next-line react-refresh/only-export-components
export   {bannerImages,OrgList,PlacementList}
