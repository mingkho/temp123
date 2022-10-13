export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/CreateClaims/Services/service1.service').isDraftEnabled('Claims')) {
        return clientAPI.executeAction({
            'Name': '/CreateClaims/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Claims'
                },
                'OnSuccess': '/CreateClaims/Actions/Claims/NavToClaims_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/CreateClaims/Actions/Claims/NavToClaims_Edit.action');
    }
}