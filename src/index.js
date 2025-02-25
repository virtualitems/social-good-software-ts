/**
 * @fileoverview This file is used to set the version number in the index.html file.
 */

document.addEventListener('DOMContentLoaded', () => {
  const versionElement = document.getElementById('version');

  const innerTemplateText = versionElement.innerHTML;

  const version = OTParser.GetVersion();

  const newText = innerTemplateText.replace(/%version%/g, version);

  versionElement.textContent = newText;
});
