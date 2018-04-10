const vendors = ["moz", "webkit"];



const getCssVendor = function(element, propertyName){
    let style = getComputedStyle(element);
    let result = style.getPropertyValue(propertyName);
    if(!result){
        for(var i = 0; i < vendors.length; i++){
            if(result = style.getPropertyValue(`-${vendors[i]}-${propertyName}`))
                return result;
        }
    }
    return result;
}

/**
 * Check if the element is visible
 *
 * @param {DOMElementNode} el
 * @return Boolean
*/
const getAnimationName = function(element) {
    return getCssVendor(element, 'animation-name');
}

const offsetTop = function(element) {
    var top;
    while (element.offsetTop === void 0) {
        element = element.parentNode;
    }
    top = element.offsetTop;
    while ((element = element.offsetParent)) {
        top += element.offsetTop;
    }
    return top;
};

/**
 * Check if the element is visible
 *
 * @param {DOMElementNode} el
 * @return Boolean
*/
const isVisible = function(el) {
    var top, viewBottom, viewTop;
    viewTop = window.pageYOffset;
    viewBottom = viewTop + window.innerHeight;
    top = offsetTop(el);
    return top <= viewBottom;
};

/**
 * Trigger the animation to show the element whether is visible
 *
 * @param {DOMElementNode} el
 * @param {object} animationConfig
 * @return Boolean
*/
const showElement = function(el, animationConfig) {
    if (isVisible(el)) {
        for (name in animationConfig) {
            el.style[name] = animationConfig[name];
        }
        el.style.visibility = "visible";
        return true;
    }
    return false;
};

module.exports = {
    getAnimationName: getAnimationName,
	offsetTop: offsetTop,
	isVisible: isVisible,
	showElement: showElement
}