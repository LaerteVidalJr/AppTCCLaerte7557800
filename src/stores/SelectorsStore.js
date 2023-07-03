import { readable } from 'svelte/store';

const SelectorsStore = readable([
    { name: "a_link", param: "a[href]" },
    { name: "audio", param: "audio[controls]" },
    { name: "button", param: "button" },
    { name: "details", param: "details" },
    { name: "embed", param: "embed" },
    { name: "iframe", param: "iframe" },
    { name: "image", param: "img[usemap]" },
    { name: "input", param: 'input:not([type="hidden"])' },
    { name: "label", param: "label" },
    { name: "select", param: "select" },
    { name: "textarea", param: "textarea" },
    { name: "video", param: "video[controls]" }
]);

export default SelectorsStore;
