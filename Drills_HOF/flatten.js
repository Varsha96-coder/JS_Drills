var flat = []
module.exports = function flatten(elements) {
    for (i = 0; i < elements.length; i++) {
        if (Array.isArray(elements[i])) {
            flatten(elements[i])
        } else {
            flat.push(elements[i]);
        }
    }
    return flat;
}