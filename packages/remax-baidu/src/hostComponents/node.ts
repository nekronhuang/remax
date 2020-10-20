import * as Ad from './Ad/node';
import * as Button from './Button/node';
import * as Canvas from './Canvas/node';
import * as Checkbox from './Checkbox/node';
import * as CheckboxGroup from './CheckboxGroup/node';
import * as CoverImage from './CoverImage/node';
import * as CoverView from './CoverView/node';
import * as Form from './Form/node';
import * as Icon from './Icon/node';
import * as Image from './Image/node';
import * as Input from './Input/node';
import * as Label from './Label/node';
import * as MovableArea from './MovableArea/node';
import * as MovableView from './MovableView/node';
import * as Navigator from './Navigator/node';
import * as OpenData from './OpenData/node';
import * as Picker from './Picker/node';
import * as PickerView from './PickerView/node';
import * as PickerViewColumn from './PickerViewColumn/node';
import * as Progress from './Progress/node';
import * as Radio from './Radio/node';
import * as RadioGroup from './RadioGroup/node';
import * as RichText from './RichText/node';
import * as ScrollView from './ScrollView/node';
import * as Slider from './Slider/node';
import * as Swiper from './Swiper/node';
import * as SwiperItem from './SwiperItem/node';
import * as Switch from './Switch/node';
import * as Text from './Text/node';
import * as Textarea from './Textarea/node';
import * as Video from './Video/node';
import * as View from './View/node';
import * as WebView from './WebView/node';

const hostComponents = new Map();

hostComponents.set('ad', Ad);
hostComponents.set('button', Button);
hostComponents.set('canvas', Canvas);
hostComponents.set('checkbox-group', CheckboxGroup);
hostComponents.set('checkbox', Checkbox);
hostComponents.set('cover-image', CoverImage);
hostComponents.set('cover-view', CoverView);
hostComponents.set('form', Form);
hostComponents.set('icon', Icon);
hostComponents.set('image', Image);
hostComponents.set('input', Input);
hostComponents.set('label', Label);
hostComponents.set('movable-area', MovableArea);
hostComponents.set('movable-view', MovableView);
hostComponents.set('navigator', Navigator);
hostComponents.set('open-data', OpenData);
hostComponents.set('picker-view-column', PickerViewColumn);
hostComponents.set('picker-view', PickerView);
hostComponents.set('picker', Picker);
hostComponents.set('progress', Progress);
hostComponents.set('radio-group', RadioGroup);
hostComponents.set('radio', Radio);
hostComponents.set('rich-text', RichText);
hostComponents.set('scroll-view', ScrollView);
hostComponents.set('slider', Slider);
hostComponents.set('swiper-item', SwiperItem);
hostComponents.set('swiper', Swiper);
hostComponents.set('switch', Switch);
hostComponents.set('text', Text);
hostComponents.set('textarea', Textarea);
hostComponents.set('video', Video);
hostComponents.set('view', View);
hostComponents.set('web-view', WebView);

export default hostComponents;