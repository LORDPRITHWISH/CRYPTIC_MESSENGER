console.log("popup.js loaded");

const switches = [
    document.getElementById("DSEC"),
    // document.getElementById("SPENC"),
    document.getElementById("DEC"),
];

switches.forEach((ele) => {
    ele.addEventListener("click", () => {
        chrome.storage.local.get(ele.id, (res) => {
            chrome.storage.local.set({ [ele.id]: !res[ele.id] });
            ele.style.backgroundColor = res[ele.id] ? "red" : "green";
            // console.log(res[ele.id]);
        });
    });
});
// const TA = document.getElementById("SPTXT");
// document.getElementById("sub").addEventListener("click", () => {
//     chrome.storage.local.set({ [TA.id]: TA.value });
// });

const buttons = [
    document.getElementById("SPAM"),
    document.getElementById("MANP"),
];

buttons.forEach((pres) => {
    pres.addEventListener("click", async () => {
        const tabs = await chrome.tabs.query({
            url: "https://web.whatsapp.com/*",
            active: true,
            lastFocusedWindow: true,
        });
        if (tabs.length === 0) return;
        console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id, { propagator: pres.id });
    });
});

document.getElementById("test").addEventListener("click", () => {
    console.log(TA.value);
});
