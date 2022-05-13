function reverse(text) {
    if (text === "") {
        return "";
    }

    const char1 = text[0];

    return reverse(text.slice(1)) + char1;
}