import React from 'react';
import { WebView, Text, View } from 'react-native-webview';
import queryString from "query-string";

const api = `https://sandbox.api.getsafepay.com/components`;
const params = `?beacon=${"track_08cae998-cc50-4824-a30b-408532031944"}&order_id=${123}&source=mobile`;

const checkoutUrl = "https://sandbox.api.getsafepay.com/components?env=sandbox&beacon=track_9b7c7c51-fcdf-4202-bc97-4a63c3276ace&order_id=1621359657390&source=mobile&redirect_url=https%3A%2F%2Fexample.com%2Fpayment-complete&cancel_url=https%3A%2F%2Fexample.com%2Fpayment-cancelled"

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
            return props.onFailure();
        }
        if (parsed.action === "complete") {
            alert('Done Payment')
            props.onSuccess();
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

