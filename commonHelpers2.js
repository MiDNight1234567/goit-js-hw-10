import"./assets/styles-e0081327.js";import{i as a}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form");o.addEventListener("submit",s=>{s.preventDefault();const e=o.delay.value,t=o.state.value;l({value:e,delay:e,state:t}).then(r=>a.show({class:"access-svg",position:"topRight",icon:"access-svg",message:`Fulfilled promise in ${e} ms!`,messageColor:"#fff",messageSize:"16px",backgroundColor:"#59A10D",close:!1,closeOnClick:!0})).catch(r=>a.show({class:"error-svg",position:"topRight",icon:"error-svg",message:`Rejected promise in ${e} ms!`,messageColor:"#fff",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0})),o.reset()});const l=({value:s,delay:e,state:t})=>new Promise((r,i)=>{setTimeout(()=>{t==="fulfilled"?r(s):i(s)},e)});
//# sourceMappingURL=commonHelpers2.js.map
