"use strict";exports.id=373,exports.ids=[373],exports.modules={373:(e,l,i)=>{i.d(l,{Z:()=>EventSection_EventSection});var s=i(997),n=i(6689),a=i.n(n),o=i(19),t=i.n(o),d=i(3819),c=i.n(d),r=i(7163),m=i.n(r),h=i(9564),x=i.n(h);let p={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",p:3};function LocationMap(){let[e,l]=a().useState(!1),handleClose=()=>l(!1);return(0,s.jsxs)("div",{children:[s.jsx(c(),{onClick:()=>l(!0),children:"Open modal"}),s.jsx(x(),{open:e,onClose:handleClose,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,s.jsxs)(t(),{sx:p,children:[s.jsx(m(),{id:"modal-modal-title",variant:"h6",component:"h2",children:"Location Map"}),s.jsx("button",{className:"event-modal-close",onClick:handleClose,children:s.jsx("i",{className:"fa fa-close"})}),s.jsx("div",{className:"modalBody modal-body",children:s.jsx("div",{className:"modalBody modal-body",children:s.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"})})})]})})]})}let components_SectionTitleS2=e=>(0,s.jsxs)("div",{className:"wpo-section-title-s2",children:[s.jsx("div",{className:"section-title-icon",children:s.jsx("i",{className:"fi flaticon-dove"})}),s.jsx("h2",{children:e.MainTitle})]}),j=[{title:"The Reception",li1:"Monday, 25 Sep, 2023 1:00 PM – 4:30 PM",li2:"Estern Star Plaza, Road 123, USA",li3:"+1 234-567-8910"},{title:"The Ceremony",li1:"Monday, 25 Sep, 2023 1:00 PM – 4:30 PM",li2:"Estern Star Plaza, Road 123, USA",li3:"+1 234-567-8910"},{title:"Wedding Party",li1:"Monday, 25 Sep, 2023 1:00 PM – 4:30 PM",li2:"Estern Star Plaza, Road 123, USA",li3:"+1 234-567-8910"}],EventSection_EventSection=e=>s.jsx("section",{className:`wpo-event-section section-padding ${e.eClass}`,id:"event",children:(0,s.jsxs)("div",{className:"container",children:[s.jsx(components_SectionTitleS2,{MainTitle:"When & Where"}),s.jsx("div",{className:"wpo-event-wrap",children:s.jsx("div",{className:"row",children:j.map((e,l)=>s.jsx("div",{className:"col col-lg-4 col-md-6 col-12",children:s.jsx("div",{className:"wpo-event-item",children:(0,s.jsxs)("div",{className:"wpo-event-text",children:[s.jsx("h2",{children:e.title}),(0,s.jsxs)("ul",{children:[s.jsx("li",{children:e.li1}),s.jsx("li",{children:e.li2}),s.jsx("li",{children:e.li3}),s.jsx("li",{children:s.jsx(LocationMap,{})})]})]})})},l))})})]})})}};