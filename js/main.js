function removeCrap() {
    const headerChips = document.getElementById("chips-wrapper");

    if (headerChips !== null) {
        const headerChipsParent = headerChips.parentNode;
        headerChipsParent.parentNode.removeChild(headerChipsParent);
    }

    const videoFlexbox = document.getElementById("contents");

    if (videoFlexbox !== null) {
        videoFlexbox.style.width = "90%";
    }

    const dismissible = document.getElementById("dismissible");

    if (dismissible !== null) {
        const dismissibleParent = dismissible.parentNode;

        if (dismissibleParent.attributes.getNamedItem("is-shorts") != null) {
            dismissibleParent.parentNode.removeChild(dismissibleParent);
        }
    }

    const scroller = document.getElementById("scroller");

    if (scroller !== null) {
        const x = scroller.parentNode;
        x.parentNode.removeChild(x);
    }

    const extraContent = document.getElementsByTagName("ytd-chips-shelf-with-video-shelf-renderer");

    if (extraContent !== null) {
        const extraContentArray = [...extraContent];
        extraContentArray.forEach(element => {
            element.parentNode.removeChild(element);
        })
    }

    const scrollable = document.getElementById("scrollable");

    if (scrollable !== null) {
        scrollable.parentNode.removeChild(scrollable);
    }

    const chips = document.querySelectorAll("[class^=ytdChipsShelf]");

    if (chips !== null) {
        [...chips].forEach(chip => {
            chip.parentNode.removeChild(chip);
        })
    }
}

function observe() {
    new MutationObserver(() => removeCrap())
        .observe(document.body, { attributes: false, childList: true, subtree: true });
}

removeCrap()
observe()
