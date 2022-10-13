export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/CreateClaims/Services/service1.service').isDraftEnabled('Receipts')) {
        return clientAPI.executeAction({
            'Name': '/CreateClaims/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Receipts'
                },
                'OnSuccess': '/CreateClaims/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/CreateClaims/Actions/CloseModalPage_Cancel.action');
    }
}