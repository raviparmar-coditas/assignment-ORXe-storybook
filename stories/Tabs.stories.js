import { Tabs } from './Tabs';

export default {
    title: 'ORXe/Tabs',
    argTypes: {

    },
  };
  
  const Template = (args) => Tabs(args);
  
  export const WithoutIcon = Template.bind({});
  WithoutIcon.args = {
    tabs : [
      {label:"Label 1",id:"Lable1"},
      {label:"Label 2",id:"Lable2"},
      {label:"Label 3",id:"Lable3"}
    ]
  };
  export const WithIcon = Template.bind({});
  WithIcon.args = {
    tabs : [
      {label:"Hotel",id:"Lable1",icon:"ic-hotel"},
      {label:"Car",id:"Lable2",icon:"ic-car"},
      {label:"Flights",id:"Lable3",icon:"ic-flight"}
    ]
  };
  