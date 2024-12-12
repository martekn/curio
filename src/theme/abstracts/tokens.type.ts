export interface Tokens {
  // Contextual tokens
  colorTextDefault?: string;
  colorBackgroundDefault?: string;
  colorTextInteractiveDefault?: string;
  colorsTextInteractiveHover?: string;

  // Border radius
  borderRadius?: string;

  // Body
  bodyFontFamily?: string;
  bodyFontSize?: string;
  bodyLineHeight?: number | string;
  bodyFontWeight?: string | number;
  bodyTextColor?: string;
  bodyBackgroundColor?: string;

  // Link
  linkColor?: string;
  linkTextDecoration?: string;
  linkTextDecorationHover?: string;
  linkColorHover?: string;

  // Heading
  headingFontFamilyDefault?: string;
  headingColorDefault?: string;
  headingFontWeight?: string | number;
  headingLetterSpacing?: number | string;
  headingLineHeight?: number | string;
  headingTextTransform?: string;

  heading1FontSize?: string;
  heading1Color?: string;
  heading1FontFamily?: string;
  heading2FontSize?: string;
  heading2Color?: string;
  heading2FontFamily?: string;
  heading3FontSize?: string;
  heading3Color?: string;
  heading3FontFamily?: string;
  heading4FontSize?: string;
  heading4Color?: string;
  heading4FontFamily?: string;

  // Layout
  gridGap?: string;
  flexGroupGap?: string;

  heroPaddingBlock?: string;
  heroMarginTop?: string;
  sectionPaddingBlock?: string;

  containerMinMarginInline?: string;
  containerMaxWidth?: string;
  containerMaxWidthNarrow?: string;
  containerMaxWidthWide?: string;

  siteHeaderBackgroundColor?: string;
  siteHeaderColor?: string;
  siteHeaderPadding?: string | number;
  siteHeaderMargin?: string | number;

  // Navigation
  navigationColor?: string;
  navigationColorHover?: string;
  navigationFontSize?: string;
  navigationGap?: string;
  navigationLinkTextDecoration?: string;
  navigationLinkHoverColor?: string;
  navigationLinkActiveLine?: string;
  navigationFontFamily?: string;
  navigationFontWeight?: string | number;

  // Site footer
  footerBackgroundColor?: string;
  footerTextColor?: string;
  footerLinkColor?: string;
  footerLinkColorHover?: string;
  footerLinkTextDecoration?: string;
  footerLinkTextDecorationHover?: string;
  siteFooterPadding?: string | number;
  siteFooterMargin?: string | number;

  // Logo
  logoFontFamily?: string;
  logoColor?: string;
  logoFontSize?: string;

  // Buttons
  buttonFontFamily?: string;
  buttonFontSize?: string;
  buttonFontWeight?: string | number;
  buttonTextTransform?: string;
  buttonPadding?: string;
  buttonBorder?: string | number;
  buttonBorderRadius?: string;

  buttonPrimaryColor?: string;
  buttonPrimaryBackground?: string;
  buttonPrimaryColorHover?: string;
  buttonPrimaryBackgroundHover?: string;
  buttonPrimaryBorderColor?: string;
  buttonPrimaryBorderColorHover?: string;

  buttonSecondaryColor?: string;
  buttonSecondaryBackground?: string;
  buttonSecondaryColorHover?: string;
  buttonSecondaryBackgroundHover?: string;
  buttonSecondaryBorderColor?: string;
  buttonSecondaryBorderColorHover?: string;

  // Cards
  cardFlowSpacing?: string;
  cardPadding?: string;
  cardShadow?: string;
  cardBorderRadius?: string;
  cardBackgroundDefault?: string;
  cardColorDefault?: string;
  cardFontFamily?: string;
  cardFontSize?: string;
  cardFontSizeSmall?: string;
  cardFontSizeExtraSmall?: string;
  cardHeadingColorDefault?: string;
  cardHeadingFontFamily?: string;
  cardHeadingFontSize?: string;

  // Pricing
  priceColor?: string;
  priceSaleColor?: string;
  priceOldTextDecoration?: string;
  priceDiscountBackground?: string;
  priceDiscountColor?: string;

  // Forms
  formLabelColor?: string;
  formLabelFontFamily?: string;
  formLabelFontWeight?: string | number;
  formLabelFontSize?: string;

  formInputColor?: string;
  formInputFontFamily?: string;
  formInputFontWeight?: string | number;
  formInputFontSize?: string;
  formInputBackgroundColor?: string;
  formInputBorderDefault?: string;
  formInputBorderFocus?: string;
  formInputOutlineFocus?: string;
  formInputPadding?: string;
  formInputBorderRadius?: string;

  formPlaceholderColor?: string;
  formPlaceholderFontFamily?: string;
  formPlaceholderFontWeight?: string | number;
  formPlaceholderFontSize?: string;

  formGroupSpacing?: string;
}
