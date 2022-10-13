using { BenefitsApp as my } from '../db/schema';

using BenefitsApp from '../db/schema';

@path : 'service/BenefitsApp'
service BenefitsAppService
{
    entity Claims as
        projection on my.Claims
        {
            *
        };

    entity ClaimTypes as
        projection on my.ClaimTypes
        {
            *
        };

    entity Receipts as
        projection on my.Receipts
        {
            *
        };
}

annotate BenefitsAppService with @requires :
[
    'authenticated-user'
];
