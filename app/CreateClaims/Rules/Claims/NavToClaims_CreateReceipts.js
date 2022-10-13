export default function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/CreateClaims/Services/service1.service').isDraftEnabled('Claims')) {
        return clientAPI.executeAction({
            'Name': '/CreateClaims/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Claims'
                },
                'OnSuccess': '/CreateClaims/Actions/Claims/NavToClaims_CreateReceipts.action'
            }
        });
    } else {
        return clientAPI.executeAction('/CreateClaims/Actions/Claims/NavToClaims_CreateReceipts.action');
    }
}