const placeHolderfalse = ["DSEC", "SPENC"];
const placeHoldetrue = ["DEC"];
const set = async () => {
    chrome.storage.local.get("set", (res) => {
        if (res.set) return;
        else {
            placeHolderfalse.forEach((ele) => {
                chrome.storage.local.set({ [ele]: false });
            });
            placeHoldetrue.forEach((ele) => {
                chrome.storage.local.set({ [ele]: true });
            });
            chrome.storage.local.set({ set: true });
            console.log("byfrost set");
        }
    });
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message.propagator, "message received");
    if (message.propagator) {
        console.log(chrome.storage.local.get(message.propagator));
        chrome.storage.local.get(message.propagator).then(sendResponse);
        return true;
    }
});

chrome.runtime.onInstalled.addListener(() => {
    set();
    console.log("byfrost installed");
});


// chrome.webRequest.onBeforeRequest.addListener(
//     function (details) {
//         console.log(`Blocking WebSocket: ${details.url}`);
//         return { cancel: true };
//     },
//     { urls: ["ws://*/*", "wss://*/*"] }, // Match all WebSocket URLs
//     ["blocking"]
// );

// // chrome.runtime.onStartup.addListener(() => {
// //     set();
// //     console.log("byfrost started");
// // });


// // web.whatsapp.com

// chrome.webRequest.onBeforeRequest.addListener(
//     (details) => {
//         console.log("Blocked:", details.url);
//         return { cancel: true };
//     },
//     { urls: ["*://*.whatsapp.com/*"], types: ["websocket"] },
//     ["blocking"]
// );


// chrome.declarativeNetRequest.updateDynamicRules(
//     { addRules: JSON.parse('[{"id":1,"priority":1,"action":{"type":"block"},"condition":{"urlFilter":"*://*.whatsapp.com/*","resourceTypes":["websocket"]}}]') },
//     () => console.log("Rules added to block WhatsApp WebSocket.")
// );

// Clear existing dynamic rules
// First, clear existing rules
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules(
        { removeRuleIds: [1] },
        () => {
            console.log("Removed old rule with ID 1.");

            // Add the rule
            chrome.declarativeNetRequest.updateDynamicRules(
                {
                    addRules: [
                        {
                            id: 1,
                            priority: 1,
                            action: { type: "block" },
                            condition: {
                                urlFilter: "*://*.whatsapp.com/*",
                                resourceTypes: ["websocket"]
                            }
                        }
                    ]
                },
                () => {
                    console.log("Added rule to block WhatsApp WebSocket.");
                }
            );
        }
    );
});
