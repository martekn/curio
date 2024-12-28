import { colors } from "./colors";
import { sizes } from "./sizes";
import { typography } from "./typography";
import { Tokens } from "./tokens.type";
import { breakpoints } from "./breakpoints";

const t: Tokens = {};

// Contextual tokens
t.colorTextDefault = colors.light.neutral900;
t.colorBackgroundDefault = colors.light.neutral100;
t.colorTextInteractiveDefault = colors.light.primary400;
t.colorsTextInteractiveHover = colors.light.primary300;

// Border radius
t.borderRadius = sizes.size2;

// Body
t.bodyFontFamily = typography.fontFamilyBase;
t.bodyFontSize = typography.fontSize400;
t.bodyLineHeight = 1.5;
t.bodyFontWeight = typography.fontWeightRegular;
t.bodyTextColor = t.colorTextDefault;
t.bodyTextColorSecondary = colors.light.neutral400;
t.bodyBackgroundColor = t.colorBackgroundDefault;

// Links
t.linkColor = t.colorTextInteractiveDefault;
t.linkTextDecoration = `underline ${t.linkColor}`;
t.linkTextDecorationHover = "none";
t.linkColorHover = t.colorsTextInteractiveHover;

// Headings
t.headingFontFamilyDefault = typography.fontFamilyAccent;
t.headingColorDefault = colors.light.neutral900;
t.headingFontWeightDefault = typography.fontWeightRegular;
t.headingLetterSpacing = 0;
t.headingLineHeight = 1.1;
t.headingTextTransform = "none";

t.heading1LgFontSize = typography.fontSize900;
t.heading1LgColor = t.bodyTextColor;
t.heading1LgFontFamily = t.headingFontFamilyDefault;
t.heading1LgFontWeight = t.headingFontWeightDefault;
t.heading1FontSize = typography.fontSize800;
t.heading1Color = t.bodyTextColor;
t.heading1FontFamily = t.headingFontFamilyDefault;
t.heading1FontWeight = t.headingFontWeightDefault;
t.heading2FontSize = typography.fontSize700;
t.heading2Color = t.bodyTextColor;
t.heading2FontFamily = t.headingFontFamilyDefault;
t.heading2FontWeight = t.headingFontWeightDefault;
t.heading3FontSize = typography.fontSize500;
t.heading3Color = t.bodyTextColor;
t.heading3FontFamily = t.headingFontFamilyDefault;
t.heading3FontWeight = t.headingFontWeightDefault;
t.heading4FontSize = t.bodyFontSize;
t.heading4Color = t.bodyTextColor;
t.heading4FontFamily = t.bodyFontFamily;
t.heading4FontWeight = t.bodyFontWeight;

// Layout
t.gridGap = sizes.size6;
t.flexGroupGap = sizes.size4;

t.heroPaddingBlock = "clamp(5rem, 15vh, 8rem)";
t.heroMarginTop = `clamp(0px, ${breakpoints.sm}, 7rem)`;
t.sectionPaddingBlock = "clamp(5rem, 10vh, 9rem)";

t.containerMinMarginInline = sizes.size5;
t.containerMaxWidth = "67rem";

// Site header
t.siteHeaderBackgroundColor = t.bodyBackgroundColor;
t.siteHeaderColor = t.bodyTextColor;
t.siteHeaderPadding = `${sizes.size5} 0`;
t.siteHeaderMargin = 0;

// Navigation
t.navigationColor = t.siteHeaderColor;
t.navigationColorHover = "";
t.navigationFontSize = typography.fontSize500;
t.navigationGap = sizes.size6;
t.navigationLinkTextDecoration = "none";
t.navigationLinkHoverColor = colors.light.neutral400;
t.navigationLinkActiveLine = colors.light.primary400;
t.navigationFontFamily = t.bodyFontFamily;
t.navigationFontWeight = t.bodyFontWeight;

// Site footer
t.footerBackgroundColor = colors.light.primary100;
t.footerTextColor = t.bodyTextColor;
t.footerLinkColor = t.footerTextColor;
t.footerLinkColorHover = colors.light.neutral400;
t.footerLinkTextDecoration = "none";
t.footerLinkTextDecorationHover = `underline ${t.footerLinkColorHover}`;
t.siteFooterPadding = `${sizes.size9} 0`;
t.siteFooterMargin = `${sizes.size15} 0 0 0`;

// Logo
t.logoFontFamily = typography.fontFamilyAccent;
t.logoColor = colors.light.primary400;
t.logoFontWeight = typography.fontWeightRegular;
t.logoLgFontSize = typography.fontSize800;
t.logoSmFontSize = typography.fontSize700;

// Buttons
t.buttonFontFamily = t.bodyFontFamily;
t.buttonFontSize = typography.fontSize500;
t.buttonFontWeight = typography.fontWeightMedium;
t.buttonTextTransform = "uppercase";
t.buttonPadding = "0.5em 1em";
t.buttonBorder = "1px solid transparent";
t.buttonBorderRadius = t.borderRadius;

t.buttonPrimaryColor = colors.light.neutral100;
t.buttonPrimaryBackground = colors.light.primary400;
t.buttonPrimaryColorHover = t.buttonPrimaryColor;
t.buttonPrimaryBackgroundHover = colors.light.primary300;
t.buttonPrimaryBorderColor = "transparent";
t.buttonPrimaryBorderColorHover = "transparent";

t.buttonSecondaryColor = colors.light.primary400;
t.buttonSecondaryBackground = "transparent";
t.buttonSecondaryColorHover = colors.light.primary300;
t.buttonSecondaryBackgroundHover = "transparent";
t.buttonSecondaryBorderColor = colors.light.primary400;
t.buttonSecondaryBorderColorHover = colors.light.primary300;

// Cards
t.cardFlowSpacing = sizes.size2;
t.cardPadding = "0px";
t.cardShadow = "none";
t.cardBorderRadius = t.borderRadius;
t.cardBackgroundDefault = "transparent";
t.cardColorDefault = colors.light.neutral400;
t.cardFontFamily = t.bodyFontFamily;
t.cardFontSize = t.bodyFontSize;
t.cardFontSizeSmall = typography.fontSize300;
t.cardFontSizeExtraSmall = typography.fontSize200;
t.cardHeadingColorDefault = t.heading3Color;
t.cardHeadingFontFamily = t.heading3FontFamily;
t.cardHeadingFontSize = t.heading3FontSize;
t.cardDescriptionPadding = "0px";
t.cardImageBorderRadius = t.cardBorderRadius;

// Pricing
t.priceColor = colors.light.neutral400;
t.priceSaleColor = colors.light.primary400;
t.priceOldTextDecoration = "line-through";
t.priceDiscountBackground = colors.light.primary400;
t.priceDiscountColor = colors.light.neutral100;

// Forms
t.formLabelColor = t.bodyTextColor;
t.formLabelFontFamily = t.bodyFontFamily;
t.formLabelFontWeight = typography.fontWeightMedium;
t.formLabelFontSize = t.bodyFontSize;

t.formErrorColor = colors.light.primary400;
t.formErrorFontFamily = t.bodyFontFamily;
t.formErrorFontWeight = typography.fontWeightRegular;
t.formErrorFontSize = typography.fontSize300;

t.formInputColor = t.bodyTextColor;
t.formInputFontFamily = t.bodyFontFamily;
t.formInputFontWeight = typography.fontWeightRegular;
t.formInputFontSize = t.bodyFontSize;
t.formInputBackgroundColor = colors.light.neutral100;
t.formInputBorderDefault = `1px solid ${colors.light.neutral400}`;
t.formInputBorderFocus = `1px solid ${colors.light.neutral900}`;
t.formInputOutlineFocus = t.formInputBorderFocus;
t.formInputPadding = sizes.size3;
t.formInputBorderRadius = t.borderRadius;

t.formTextareaMinHeight = "9rem";
t.formTextareaResize = "vertical";

t.formPlaceholderColor = colors.light.neutral400;
t.formPlaceholderFontFamily = t.formInputFontFamily;
t.formPlaceholderFontWeight = t.formInputFontWeight;
t.formPlaceholderFontSize = t.formInputFontSize;

t.formGroupSpacing = sizes.size2;

export const tokens: Tokens = t as Tokens;
