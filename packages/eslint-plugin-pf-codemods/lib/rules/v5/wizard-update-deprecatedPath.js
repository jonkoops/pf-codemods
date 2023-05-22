const { moveSpecifiers } = require("../../helpers");

const specifiersToMove = [
  { name: "Wizard", type: "component" },
  { name: "WizardContext", type: "context" },
  { name: "WizardNav", type: "component" },
  { name: "WizardNavItem", type: "component" },
  { name: "WizardHeader", type: "component" },
  { name: "WizardBody", type: "component" },
  { name: "WizardFooter", type: "component" },
  { name: "WizardToggle", type: "component" },
];
const fromPackage = "@patternfly/react-core";
const toPackage = "@patternfly/react-core/deprecated";
const aliasSuffix = "Deprecated";
const messageAfterSpecifierPathChange =
  "been deprecated. Running the fix flag will update your imports and/or exports to our deprecated package, but we suggest using our new Wizard implementation.";
const messageAfterElementNameChange =
  "has been deprecated. Running the fix flag will update names, but we suggest using our new Wizard implementation.";

// https://github.com/patternfly/patternfly-react/pull/8821
module.exports = {
  meta: { fixable: "code" },
  create: moveSpecifiers(
    specifiersToMove,
    fromPackage,
    toPackage,
    messageAfterSpecifierPathChange,
    messageAfterElementNameChange,
    aliasSuffix
  ),
};
