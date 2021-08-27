
module.exports = function flatten(elements, flat = []) {
    for (i = 0; i < elements.length; i++) {
        if (Array.isArray(elements[i])) {
            flatten(elements[i], flat)
        } else {
            flat.push(elements[i]);
        }
    }
    return flat;
}