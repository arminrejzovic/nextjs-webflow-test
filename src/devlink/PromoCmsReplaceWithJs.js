"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function PromoCmsReplaceWithJs({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="promo-cms-replace" tag="div">
      <_Builtin.NotSupported _atom="DynamoWrapper" />
      <_Builtin.HtmlEmbed
        className="promo-cms-replace-js"
        value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20const%20currentPromoPercent%20%3D%20document.querySelector('.promo-cms-percent')%3B%0A%20%20const%20currentPromoMonths%20%3D%20document.querySelector('.promo-cms-months')%3B%0A%20%20const%20currentPromoOffer%20%3D%20document.querySelector('.promo-cms-offer-value')%3B%0A%0A%20%20console.log(%22Current%20promo%20percent%2Bmonths%3A%22%2C%20currentPromoPercent%2C%20currentPromoMonths)%3B%0A%0A%20%20const%20replacePercent%20%3D%20document.querySelectorAll('span%5Bdata-replace%3D%22percent%22%5D')%3B%0A%20%20const%20replaceMonths%20%3D%20document.querySelectorAll('span%5Bdata-replace%3D%22months%22%5D')%3B%0A%20%20const%20replaceOffers%20%3D%20document.querySelectorAll('span%5Bdata-replace%3D%22offer%22%5D')%3B%0A%0A%20%20if%20(currentPromoPercent)%20%7B%0A%20%20%20%20replacePercent.forEach(span%20%3D%3E%20%7B%0A%20%20%20%20%20%20span.innerText%20%3D%20currentPromoPercent.innerText.trim()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20if%20(currentPromoMonths)%20%7B%0A%20%20%20%20replaceMonths.forEach(span%20%3D%3E%20%7B%0A%20%20%20%20%20%20span.innerText%20%3D%20currentPromoMonths.innerText.trim()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%20%20%0A%20%20if%20(currentPromoOffer)%20%7B%0A%20%20%20%20replaceOffers.forEach(span%20%3D%3E%20%7B%0A%20%20%20%20%20%20span.innerText%20%3D%20currentPromoOffer.innerText.trim()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%7D)%3B%0A%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
