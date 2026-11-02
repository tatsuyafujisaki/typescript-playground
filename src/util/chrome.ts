function deleteAttributesFromChromeBookmarks() {
  const attributes = [
    'add_date',
    'icon',
    'last_modified',
    'personal_toolbar_folder',
  ];

  for (const e of document.querySelectorAll('a, h3')) {
    for (const attribute of attributes) {
      e.removeAttribute(attribute);
    }
  }
}

deleteAttributesFromChromeBookmarks();
