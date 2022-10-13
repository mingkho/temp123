export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/CreateClaims/Services/service1.service').isDraftEnabled('Receipts')) {
        return clientAPI.executeAction({
            "Name": '/CreateClaims/Actions/Receipts/Receipts_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/CreateClaims/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': "Receipts"
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/CreateClaims/Actions/Receipts/Receipts_UpdateEntity.action');
    }
}