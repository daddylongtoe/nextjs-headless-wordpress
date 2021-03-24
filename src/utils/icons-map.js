import * as SvgIconsComponent from "../components/icons";

export const getIconComponentByName = (name) => {
  const ComponentsMap = {
    facebook: SvgIconsComponent.Facebook,
    instagram: SvgIconsComponent.Instagram,
    twitter: SvgIconsComponent.Twitter,
    youtube: SvgIconsComponent.Youtube,
  };

  if (name in ComponentsMap) {
    const IconComponent = ComponentsMap[name];
    return <IconComponent />;
  } else {
    return null;
  }
};
