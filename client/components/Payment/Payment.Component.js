import React from 'react';
import { WebView } from 'react-native-webview';
import queryString from "query-string";

const api = `https://sandbox.api.getsafepay.com/components`;
const params = `?beacon=${"track_08cae998-cc50-4824-a30b-408532031944"}&order_id=${123}&source=mobile`;
//const checkoutUrl = api + params;

const checkoutUrl = "https://sandbox.api.getsafepay.com/components?env=sandbox&beacon=track_548b1c9b-6772-4a4f-b9f3-5e88203f8808&order_id=1620144920609&source=mobile&redirect_url=https%3A%2F%2Fexample.com%2Fpayment-complete&cancel_url=https%3A%2F%2Fexample.com%2Fpayment-cancelled"

export default function (props) {

    const onNavigationChangeState = (event) => {
        console.log("Event", event);
        console.log("***************************")
        const url = event.url;
        if (url.indexOf("/mobile") === -1) {
            return;
        }
        const parsed = queryString.parse(params);
        if (parsed.action === "cancel") {
            return;
        }
        if (parsed.action === "complete") {
            alert('Done Payment')
        }
    }

    return (
        <WebView
            source={{ uri: checkoutUrl }}
            onNavigationChangeState={onNavigationChangeState}
            onError={(m) => console.log("Err", m)}
            onMessage={(m) => console.log("Mess", m)}
        />
    )
}

