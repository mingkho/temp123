export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/CreateClaims/Services/service1.service').isDraftEnabled('Receipts')) {
        return clientAPI.executeAction({
            'Name': '/CreateClaims/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Receipts'
                },
                'OnSuccess': '/CreateClaims/Actions/Receipts/NavToReceipts_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/CreateClaims/Actions/Receipts/NavToReceipts_Edit.action');
    }
}