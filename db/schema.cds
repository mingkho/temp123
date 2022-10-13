namespace BenefitsApp;

using sap.workflow from './WorkflowObject';

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Claims
{
    key ClaimID : UUID
        @Core.Computed;
    ClaimDate : Date;
    Provider : String(100);
    Amount : Decimal(12,2);
    Comment : String;
    claimType : Association to one ClaimTypes;
    ClaimReceipts : Association to many Receipts on ClaimReceipts.claims = $self;
}

entity ClaimTypes
{
    key ID : Integer;
    Description : String(100);
}

entity Receipts
{
    key ReceiptID : UUID
        @Core.Computed;
    ReceiptNumber : String(100);
    ReceiptDate : Date;
    Attachment : LargeBinary
        @Core.MediaType : Filetype;
    Filetype : String(100)
        @Core.IsMediaType;
    claims : Association to one Claims;
}
