
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenericDistributionProfileAction } from './KalturaGenericDistributionProfileAction';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';

export interface KalturaGenericDistributionProfileArgs  extends KalturaDistributionProfileArgs {
    genericProviderId? : number;
	submitAction? : KalturaGenericDistributionProfileAction;
	updateAction? : KalturaGenericDistributionProfileAction;
	deleteAction? : KalturaGenericDistributionProfileAction;
	fetchReportAction? : KalturaGenericDistributionProfileAction;
	updateRequiredEntryFields? : string;
	updateRequiredMetadataXPaths? : string;
}


export class KalturaGenericDistributionProfile extends KalturaDistributionProfile {

    genericProviderId : number;
	submitAction : KalturaGenericDistributionProfileAction;
	updateAction : KalturaGenericDistributionProfileAction;
	deleteAction : KalturaGenericDistributionProfileAction;
	fetchReportAction : KalturaGenericDistributionProfileAction;
	updateRequiredEntryFields : string;
	updateRequiredMetadataXPaths : string;

    constructor(data? : KalturaGenericDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionProfile' },
				genericProviderId : { type : 'n' },
				submitAction : { type : 'o', subTypeConstructor : KalturaGenericDistributionProfileAction, subType : 'KalturaGenericDistributionProfileAction' },
				updateAction : { type : 'o', subTypeConstructor : KalturaGenericDistributionProfileAction, subType : 'KalturaGenericDistributionProfileAction' },
				deleteAction : { type : 'o', subTypeConstructor : KalturaGenericDistributionProfileAction, subType : 'KalturaGenericDistributionProfileAction' },
				fetchReportAction : { type : 'o', subTypeConstructor : KalturaGenericDistributionProfileAction, subType : 'KalturaGenericDistributionProfileAction' },
				updateRequiredEntryFields : { type : 's' },
				updateRequiredMetadataXPaths : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericDistributionProfile',KalturaGenericDistributionProfile);
