var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire5906;e.register("3yRf3",(function(s,t){Object.defineProperty(s.exports,"__esModule",{value:!0}),s.exports.default=void 0;var r,l=e("jHTLJ"),a=(r=e("bK8J8"))&&r.__esModule?r:{default:r},n=e("8Hjyi"),d=e("9KNE7"),i=e("ayMG0");var o=()=>{const e=(0,l.useSelector)((e=>e.cart.items)),s=(0,l.useDispatch)();let t=0;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"flex justify-around m-5 items-center",children:[(0,i.jsxs)("h1",{children:["Cart Items - ",e.length]}),(0,i.jsx)("button",{className:"bg-rose-700 text-white p-3 rounded-xl",onClick:()=>{s((0,n.clearCart)())},children:"Clear Cart"})]}),(0,i.jsx)("div",{"data-testid":"cart",className:"gap-x-20 my-10",children:e.map((e=>(t+=e.price,(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("hr",{}),(0,i.jsx)(a.default,{...e},e.id)]}))))}),(0,i.jsxs)("div",{className:"flex justify-between px-[35rem] pb-10",children:[(0,i.jsx)("span",{className:"font-normal text-xl text-center",children:"TO PAY:"}),(0,i.jsxs)("span",{className:"font-bold text-2xl text-center",children:["₹",t/100]})]}),(0,i.jsxs)("div",{className:"flex justify-center px-[35rem] pb-10",children:[(0,i.jsx)("button",{className:"border-2 bg-green-400 border-green-600 py-2 px-5 rounded-xl",onClick:()=>(0,d.toast)("Thank you for ordering!"),children:"Checkout"}),(0,i.jsx)(d.ToastContainer,{})]})]})};s.exports.default=o})),e.register("bK8J8",(function(s,t){Object.defineProperty(s.exports,"__esModule",{value:!0}),s.exports.default=void 0;var r=e("gnjKo"),l=e("ayMG0");var a=({name:e,description:s,imageId:t,price:a})=>(0,l.jsxs)("div",{className:"flex justify-between items-center flex-row rounded-3xl cursor-pointer p-2 px-80 hover:bg-slate-100 hover:text-[#232b30]",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("span",{className:"text-md font-bold",children:e}),(0,l.jsx)("p",{className:"text-[#282c3f73] text-sm py-3",children:s}),(0,l.jsxs)("span",{className:"font-medium transition-colors",children:["₹",a/100]})]}),(0,l.jsx)("div",{className:"min-w-[200px] h-[126px] ml-5 object-cover rounded-md",children:(0,l.jsx)("img",{src:r.IMG_MENU_URL+t,alt:"Image-Item",className:"w-[200px] h-[126px] object-cover rounded-md"})})]});s.exports.default=a}));
//# sourceMappingURL=Cart.a62c3af3.js.map
