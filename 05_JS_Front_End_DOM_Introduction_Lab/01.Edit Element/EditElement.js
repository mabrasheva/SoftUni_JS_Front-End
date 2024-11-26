function editElement(element, string, replacer) {
    const result = element.textContent.replaceAll(string, replacer);
    element.textContent = result;
}
