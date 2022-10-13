export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/CreateClaims/Services/service1.service').isDraftEnabled('Claims')) {
        return clientAPI.executeAction({
            "Name": '/CreateClaims/Actions/Claims/Claims_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/CreateClaims/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': "Claims"
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/CreateClaims/Actions/Claims/Claims_UpdateEntity.action');
    }
}