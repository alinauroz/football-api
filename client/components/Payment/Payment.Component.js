import React from 'react';
import { WebView } from 'react-native-webview';
import queryString from "query-string";

const api = `https://sandbox.api.getsafepay.com/components`;
const params = `?beacon=${"track_08cae998-cc50-4824-a30b-408532031944"}&order_id=${123}&source=mobile`;
//const checkoutUrl = api + params;

const checkoutUrl = "https://sandbox.api.getsafepay.com/components?env=sandbox&beacon=track_b2f40855-8a47-4876-bc14-b8cc532227f7&order_id=1234&source=custom&redirect_url=https%3A%2F%2Fexample.com%2Fpayment-complete&cancel_url=https%3A%2F%2Fexample.com%2Fpayment-cancelled"

export default function (props) {

    const onNavigationChangeState = (event) => {
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
        />
    )
}

