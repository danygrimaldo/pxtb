import React from "react";
import { Component, Image, Row } from "react";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/126228918_681789002711920_6643157408502197014_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_ohc=QSXfebfN368AX-eL_71&_nc_ht=scontent-atl3-2.xx&oh=6b7f2cf74d47a3fa2205804a26094720&oe=60CD18AE",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/125510551_680362542854566_6182894489574437526_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_ohc=uicLNnB3otsAX_gwQMu&_nc_ht=scontent-atl3-2.xx&oh=280a5801f673d89aa9c3d6f133a2213e&oe=60CEED3D",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/125316683_676876476536506_8156515602212500419_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_ohc=43xxSGrZ9AYAX-vRYlO&_nc_ht=scontent-atl3-2.xx&oh=0667ea3a90d6c0b418569302352af25f&oe=60CED216",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/116426403_593666878190800_505004863583573441_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_ohc=4urApT2386wAX9xvG5A&_nc_ht=scontent-atl3-2.xx&oh=2b6ce21d8705bf847329b31723d3f73e&oe=60CD5C03",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/116266795_592967418260746_4049981938438076527_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=a26aad&_nc_ohc=0YsO0Axxnp8AX_QQkg8&_nc_ht=scontent-atl3-2.xx&oh=a2e93d87ed369f357bbeb596800d026d&oe=60CD2EE0",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/116073532_588848688672619_5403397583294034155_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_ohc=0EaVDNHKqbAAX-zQ9fR&_nc_ht=scontent-atl3-2.xx&oh=fb0e3575452ae3d5e18b9e3a851e0283&oe=60CDE569",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/98979204_546424909581664_3532078188224053248_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_ohc=gUyuEPogCsQAX_YXM4E&_nc_ht=scontent-atl3-2.xx&oh=504c16cf9c90296f134af0b28238f4d0&oe=60CE1CCC",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/91159353_511600803064075_7622333629066117120_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_ohc=V87vC2_gwcEAX9GJp_A&_nc_ht=scontent-atl3-2.xx&oh=08d486f58b87127ee189a807ff2c4c97&oe=60CDC2FB",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/75419044_410580779832745_6687102120950235136_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_ohc=LHFXmBeRzY8AX_ryOol&_nc_ht=scontent-atl3-2.xx&oh=1e6e80970c9dd6897f6ef53ce3b7a502&oe=60CEDA5E",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/68631843_353970378827119_816314699892129792_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_ohc=AZZdTd0bkxEAX9Qhy7q&_nc_ht=scontent-atl3-2.xx&oh=c0ea74521a35ba56edfee8d1b9ad564d&oe=60CD9861",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/69204182_353970338827123_3721714398935384064_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=tFAEzUoKhM8AX9V6AJz&_nc_ht=scontent-atl3-2.xx&oh=3d614c6001897dc18e26c3502a0d1c6c&oe=60CDE421",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/69128445_353970302160460_5234287114765467648_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_ohc=B0nsjx9jwPIAX_GJaxD&_nc_ht=scontent-atl3-2.xx&oh=f9e047d7135089e5c3ae5c25dc79089b&oe=60CECD4D",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/59815485_294085921482232_7316683187684376576_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_ohc=j7K_b4ffQtgAX9LyH0z&_nc_ht=scontent-atl3-2.xx&oh=6b74a710a1b47fbb612e25254fdbe3ef&oe=60CDE0FB",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/56252747_274688556755302_1967653066668769280_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_ohc=wdVpXhgRMHoAX9AgzQu&_nc_ht=scontent-atl3-2.xx&oh=2b6b4f1e733f9838f2077dbf2adec866&oe=60CD0E5E",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/56337090_272139057010252_7112051051414421504_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_ohc=DoGpXwgBmLAAX-CQim-&tn=e9SjbQMuFdMWzW0n&_nc_ht=scontent-atl3-2.xx&oh=f06ba055b8536f30aab3f1d5c1a5a5c0&oe=60CE6974",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/56196642_272139023676922_8730191911601569792_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=a26aad&_nc_ohc=nZVJwzOCVTQAX-tZt1z&tn=e9SjbQMuFdMWzW0n&_nc_ht=scontent-atl3-2.xx&oh=e298b6453ffe3856a455d90b4f33b521&oe=60CDD42F",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/49609855_233016697589155_9027058642351816704_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_ohc=9-CWb3wHqSAAX_ZLtwq&tn=e9SjbQMuFdMWzW0n&_nc_ht=scontent-atl3-2.xx&oh=923c64ae1863d6364b28952b9cad8bc3&oe=60CD343F",
        "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/50051898_233016664255825_492636691631177728_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_ohc=MVwiedNVIQ0AX_Odk47&_nc_ht=scontent-atl3-2.xx&oh=52123ff84c41031f50324efbbff4b88a&oe=60CE2A63",
      ],
      showModal: false,
      popImageUrl: "",
    };
  }
  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const Gallery = imageUrlArray.map((url, index) => {
      return (
        <Row>
          <Image src={url} key={index} />
        </Row>
      );
    });
    return Gallery;
  }
}

export default Gallery;
