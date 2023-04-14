// 1ый ввод телефона
let element = document.getElementById('tel',);
let maskOptions = {
    mask: '+{7}(000)000-00-00'
};
 mask = IMask(element, maskOptions);

// 2ой ввод телефона
element = document.getElementById('tel2',);
maskOptions = {
    mask: '+{7}(000)000-00-00'
};
mask = IMask(element, maskOptions);
