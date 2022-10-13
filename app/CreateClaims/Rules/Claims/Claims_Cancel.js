export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/CreateClaims/Services/service1.service').isDraftEnabled('Claims')) {
        return clientAPI.executeAction({
            'Name': '/CreateClaims/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Claims'
                },
                'OnSuccess': '/CreateClaims/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/CreateClaims/Actions/CloseModalPage_Cancel.action');
    }
}