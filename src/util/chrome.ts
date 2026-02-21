function deleteAttributesFromChromeBookmarks() {
  for (const e of document.getElementsByTagName('h3')) {
    e.removeAttribute('add_date');
    e.removeAttribute('last_modified');
    e.removeAttribute('personal_toolbar_folder');
  }

  for (const e of document.getElementsByTagName('a')) {
    e.removeAttribute('add_date');
    e.removeAttribute('icon');
  }
}

deleteAttributesFromChromeBookmarks();
