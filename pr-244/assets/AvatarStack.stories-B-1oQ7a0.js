import{s as B,r as x,j as a,B as D,d as P,K as _,V as H,H as I,T as V}from"./iframe-DDMtb19w.js";import{s as l}from"./avatars-BdtzB-ZU.js";import{A as r}from"./Avatar-ClDjTgNl.js";import"./preload-helper-BoBnIWOp.js";const s=e=>{const{children:n,size:v="md",max:d,ref:C,...N}=e,[R,L]=B(N),o=x.Children.toArray(n).filter(x.isValidElement),u=d!==void 0&&o.length>d?Math.max(d,0):o.length,g=o.length-u,q=x.useMemo(()=>({owner:"AvatarStack",placement:"before",size:v}),[v]);return a.jsx(D,{...P("AvatarStack"),as:"span",ref:C,display:"inline-flex",alignItems:"center",verticalAlign:"middle",className:R,...L,children:a.jsxs(_.Provider,{value:q,children:[o.slice(0,u),g>0&&a.jsx(r,{fallback:`+${g}`})]})})};s.__docgenInfo={description:`A row of overlapping avatars with an optional "+N" overflow avatar.

Each avatar overlaps the previous one by 4px and gets a 2px ring in the
surface color, drawn inside its edge so initials stay readable. Use circle
or square avatars; the ring does not follow the hexagon shape.

@example
\`\`\`tsx
<AvatarStack max={3} aria-label="Assigned to 5 people">
  <Avatar name="Ada Lovelace" />
  <Avatar name="Grace Hopper" />
  <Avatar name="Alan Turing" />
  <Avatar name="Katherine Johnson" />
  <Avatar name="Edsger Dijkstra" />
</AvatarStack>
\`\`\``,methods:[],displayName:"AvatarStack",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"`Avatar` elements to show, in order. Later avatars sit on top of earlier ones."},size:{required:!1,tsType:{name:"AvatarSize"},description:'@default "md"'},max:{required:!1,tsType:{name:"number"},description:`Largest number of avatars to show. Any avatars after this number are
replaced by one "+N" overflow avatar. Leave unset to show all avatars.`}}};const t=[{name:"Shaun Fox",src:l.user1},{name:"Bob Barker",src:l.user2},{name:"Kim Sanders",src:l.user3},{name:"Diana Prince",src:l.user4},{name:"Ellis Grey",src:void 0}],J={title:"Components/AvatarStack",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg","xl","2xl","3xl"],description:"Size applied to every avatar that does not set its own"},max:{control:"number",description:'Largest number of avatars to show before "+N"'}},args:{size:"md",max:3,"aria-label":"5 people",children:t.map(e=>a.jsx(r,{src:e.src,name:e.name},e.name))}},i={},m={render:()=>a.jsxs(H,{gap:"16",alignItems:"start",children:[a.jsx(s,{max:3,"aria-label":"5 people",children:t.map(e=>a.jsx(r,{name:e.name},e.name))}),a.jsx(s,{"aria-label":"3 people",children:t.slice(0,3).map(e=>a.jsx(r,{name:e.name},e.name))})]}),parameters:{controls:{disable:!0}}},c={render:()=>a.jsx(H,{gap:"16",alignItems:"start",children:["sm","md","lg","xl","2xl","3xl"].map(e=>a.jsxs(I,{gap:"16",children:[a.jsx(V,{textStyle:"mono.sm",w:"32",children:e}),a.jsx(s,{size:e,max:3,"aria-label":"5 people",children:t.map(n=>a.jsx(r,{name:n.name},n.name))})]},e))}),parameters:{controls:{disable:!0}}},p={name:"Ex: Record header",render:()=>a.jsxs(I,{gap:"8",children:[a.jsx(V,{fontSize:"12",color:"text.subtle",children:"Assigned to"}),a.jsx(s,{max:3,"aria-label":"Assigned to 5 people",children:t.map(e=>a.jsx(r,{src:e.src,name:e.name},e.name))})]}),parameters:{controls:{disable:!0}}},O=["Default","Initials","Sizes","ExRecordHeader"];var h,A,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var k,b,f;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <VStack gap="16" alignItems="start">
      <AvatarStack max={3} aria-label="5 people">
        {people.map(person => <Avatar key={person.name} name={person.name} />)}
      </AvatarStack>
      <AvatarStack aria-label="3 people">
        {people.slice(0, 3).map(person => <Avatar key={person.name} name={person.name} />)}
      </AvatarStack>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(b=m.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,y,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <VStack gap="16" alignItems="start">
      {(['sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map(size => <HStack key={size} gap="16">
          <Text textStyle="mono.sm" w="32">
            {size}
          </Text>
          <AvatarStack size={size} max={3} aria-label="5 people">
            {people.map(person => <Avatar key={person.name} name={person.name} />)}
          </AvatarStack>
        </HStack>)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var z,E,T;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Ex: Record header',
  render: () => <HStack gap="8">
      <Text fontSize="12" color="text.subtle">
        Assigned to
      </Text>
      <AvatarStack max={3} aria-label="Assigned to 5 people">
        {people.map(person => <Avatar key={person.name} src={person.src} name={person.name} />)}
      </AvatarStack>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};export{i as Default,p as ExRecordHeader,m as Initials,c as Sizes,O as __namedExportsOrder,J as default};
