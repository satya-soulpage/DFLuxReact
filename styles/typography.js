import styled from "styled-components";

export const Paragraph = styled.p`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "auto")};
  color: ${(props) => (props.color ? props.color : "#35384d")};
`;

export const SearchResultText = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.0;
  letter-spacing: normal;
  color: #35384d;
  margin: 0px;
`;

export const SearchResultCount = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #35384d;
`;

export const StoreDetailHead = styled.p`
font-weight: ${props=>props.fontWeight?props.fontWeight:"normal"};
font-size: 18px;
line-height: 21px;
color: #35384D;
opacity : ${props=>props.opacity?"0.5":"none"};
@media (min-width:360px) and (max-width : 575px){
  font-size : 14px;
}
`;

export const StoreDetailView = styled.p`
font-size: 12px;
line-height: 14px;
color: #DD0C55;
float : right;
@media (min-width : 768px) and (max-width:991px){
  font-size: 10px;
} 
`

export const StoreItemName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #35384d;
  margin-bottom: 5px;
  margin-top: 10px;
  text-align : center;
`;

export const StoreItemStoreName = styled.p`
font-size: 7px;
line-height: 8px;
color: rgba(221, 12, 85, 0.61);

`;

export const StoreItemPrice = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: inline;
  color: #dd0c55;
  text-align : center;
  @media(min-width : 576px) and (max-width : 767px){
    font-size : 12px;
    margin-left: 75px;
  }
  @media (min-width : 360px) and (max-width : 575px){
    font-size : 12px;
    margin-left: 140px;
  }
`;

export const StoreItemDiscountPrice = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  color: #a3a4a7;
  display: inline;
  margin-left: 5px;
  opacity: 0.4;
  text-decoration : line-through;
`;

export const StoreItemOffer = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  display: inline;
  margin-left: 2px;
  color: #a3a4a7;
`;

export const StoreSidebarHead = styled.p`
font-weight: bold;
font-size: 18px;
line-height: 21px;
color: #35384D;
opacity: 0.5;
@media (min-width : 768px) and (max-width:991px){
  font-size: 14px;
} 

`;

export const StoreAddress = styled.p`
font-size: 14px;
line-height: 16px;
color : ${props => props.color ? props.color : " #35384D"};
@media (min-width : 768px) and (max-width : 991px){
font-size: 12px;
 margin-left: 10px;
}
`;

export const RatingStarsAverage = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 75px;
  text-align: center;
  color: #35384d;
`;
// Offer CArd

export const StoreOfferTitle = styled.h2`
  color: #ffff;
font-weight: bold;
font-size: 30px;
line-height: 35px;
@media (min-width : 768px) and (max-width : 991px){
  font-size: 20px;
}
@media (min-width : 576px) and (max-width : 767px){
  font-size: 20px;
}
@media (min-width : 360px) and (max-width : 575px){
  font-size: 18px;
  margin-bottom: 0;
}

`;

export const StoreOfferMessage = styled.p`
  color: #ffff;
  font-size: 22px;
  line-height: 26px;
  @media (min-width : 768px) and (max-width : 991px){
    font-size: 15px;
  }
  @media (min-width : 576px) and (max-width : 767px){
    font-size: 15px;
  }
  @media (min-width : 360px) and (max-width : 575px){
    font-size: 13px;
 
  }
`;

export const StoreOfferTC = styled.p`
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #ffff;
@media (min-width : 768px) and (max-width : 991px){
  font-size: 13px;
}
@media (min-width : 576px) and (max-width : 767px){
  font-size: 13px;
}
@media (min-width : 360px) and (max-width : 575px){
  font-size: 11px;
 
}
`;

// Review Card

export const ReviewProfileName = styled.p`
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  color: #35384d;
  margin-bottom: 0px;
`;
export const ReviewCardTextLight = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #acacb3;
  margin-bottom: 3px;
`;

export const ProfileRatingReviewCard = styled.span`
  background: #9bcd31 !important;
  padding: 2px 8px !important;
  color: white !important;
  display: inline-block;
  margin-left: 10px;
  border-radius : 4px !important;
`;

export const ReviewComment = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #35384d;
`;

// Ecom Product Detail

export const EcomShopName = styled.p`
  color: rgba(226, 11, 85, 0.63);
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
`;

export const EcomItemName = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #35384d;
`;

export const EcomProductDesc = styled.p`
  font-size: 14px;
  color: #35384D;
 
`;

export const EcomItemDiscountPrice = styled.p`
  font-weight: bold;
  font-size: 22px;
  color: #e20b55;
  display: inline-block;
  @media (min-width : 576px) and (max-width : 767px){
     font-size : 16px;
  }
  @media (max-width : 575px){
    font-size : 16px;
  }
`;

export const EcomItemOriginalPrice = styled.p`
  text-decoration: line-through;
  color: #35384d;
  font-size: 22px;
  opacity: 0.2;
  display: inline-block;
  margin-left: 30px;
  @media (min-width : 576px) and (max-width : 767px){
    font-size : 18px;
    margin-left: 17px;
 }
 @media (max-width : 575px){
   font-size : 18px;
   margin-left: 17px;
 }

`;

export const EcomItemOfferPercent = styled.p`
  background: rgba(226, 11, 85, 0.1);
  border: 1px solid #e20b55;
  font-size: 16px;
  font-weight:500;
  padding: 0px 13px 3px 5px;
  margin-left: 30px;
  border-radius: 5px;
  display: inline-block;
  @media (min-width : 576px) and (max-width : 767px){
    font-size : 14px;
    
 }
 @media (max-width : 575px){
   font-size : 14px;
 
 }

`;

export const EcomItemExtraDesc = styled.p`
  font-size: 16px;
  color: #e20b55;
  @media (min-width : 576px) and (max-width : 767px){
    font-size : 14px;
    
 }
 @media (max-width : 575px){
   font-size : 14px;
 
 }
`;

export const EcomItemCode = styled.p`
  font-size: 16px;
  color: #404357;
 `;

 export const EcomSize=styled.p`
 font-size: 16px;
 line-height: 16px;
 color: #B4B0B8;
 @media (min-width : 576px) and (max-width : 767px){
  font-size : 13px;

}
@media (max-width : 575px){
 font-size : 13px;

}
 `;

export const StoreCloseNotification = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #dd0c55;
  @media (min-width : 768px) and (max-width : 991px){
    font-size: 12px;
  }
`;

export const CartProductName = styled.h4`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #35384d;
`;

export const BusinessHead = styled.p`
  font-weight: bold;
  font-size: 40px;
  color: #ffffff;
  line-height: 2.2 !important;
`;

export const SearchItem = styled.a`
color : #35384d !important;
cursor : pointer;
font-size : 14px !important;
text-decoration : none !important;
  :hover{
    text-decoration : none;
  }
  
  @media (min-width : 768px) and (max-width : 991px){
    font-size:13px !important;
  }
  @media (min-width : 576px) and (max-width : 767px){
    font-size:10px !important;
  }
  @media (max-width : 575px ){
    font-size:10px !important;
  }
 `;

 export const SuggestedStoreName = styled.p`
 font-weight: bold;
 font-size: 18px;
 line-height: 21px;
 color: #35384D;

 @media (min-width: 768px) and (max-width: 991px) {
 font-size: 14px;
 text-align: center;
}
@media (min-width: 576px) and (max-width: 767px) {
 font-size: 12px;
}
@media (max-width: 575px) {
font-size: 12px;
}
 `;

 export const CategoryItem = styled.p`
 font-size: 13px;
 line-height: 16px;
 color: #35384D;
 display : inline;
 @media(min-width:768px) and (max-width:991px){
  font-size: 12px;
 }
 @media(min-width : 360px) and (max-width : 575px ){
   font-size : 10px;
 }
 `;

 export const LoginLink=styled.a`
 font-size: 12px !important;
 font-weight : bold !important;
line-height: 11px !important;
color: #DD0C55 !important;
text-decoration : none !important;
cursor : pointer;
&:hover{
  text-decoration : none !important;
}
 `;

 export const StorePopular=styled.p`
font-size: 12px;
line-height: 14px;
color: #9D9DA6;
margin-top: 35px;
@media (min-width : 576px) and (max-width : 767px){
  font-size: 10px;
  text-align : center;
  margin-top: 0px;
}
@media(max-width : 575px){
  font-size: 10px;
  text-align : center;
  margin-top: 0px;
}
 `;

 export const RatingLabel = styled.p`
 position: relative;
  bottom: 4px;
  right: 19px;
  font-size: 14px;
  color:#35384D;
 `;

 export const StoreRatingPercentage = styled.p`
 font-size : 14px;
 color: #35384D;
 line-height: 16px;
text-align: center;
position: relative;
top: -4px;
}
`;

export const StoreAverageRating=styled.p`
font-size: 64px;
line-height: 75px;
color: #35384D;
`;

export const StoreRatingReviews = styled.p`
font-size: 14px;
line-height: 16px;
opacity: 0.5;
color: #000000;
`;

export const StoreFilterHead = styled.p`
  font-size : 18px;
  font-weight : bold;
  @media(min-width : 576px) and (max-width : 767px){
    font-size : 14px;
  }
`;

export const StoreFilterSubHead=styled.p`
font-size : 14px;
font-weight : bold;
@media(min-width : 576px) and (max-width : 767px){
  font-size : 12px;
}
`;
