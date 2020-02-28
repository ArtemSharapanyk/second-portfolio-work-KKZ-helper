let addLoader = (loaderEl) => {
    const loader = document.querySelector(loaderEl);

    loader.classList.add('hideLoader');
};

module.exports = addLoader;