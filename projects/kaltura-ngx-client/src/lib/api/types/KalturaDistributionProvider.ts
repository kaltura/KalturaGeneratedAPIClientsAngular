
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDistributionProviderArgs  extends KalturaObjectBaseArgs {
    name? : string;
	scheduleUpdateEnabled? : boolean;
	availabilityUpdateEnabled? : boolean;
	deleteInsteadUpdate? : boolean;
	intervalBeforeSunrise? : number;
	intervalBeforeSunset? : number;
	updateRequiredEntryFields? : string;
	updateRequiredMetadataXPaths? : string;
}


export class KalturaDistributionProvider extends KalturaObjectBase {

    readonly type : KalturaDistributionProviderType;
	name : string;
	scheduleUpdateEnabled : boolean;
	availabilityUpdateEnabled : boolean;
	deleteInsteadUpdate : boolean;
	intervalBeforeSunrise : number;
	intervalBeforeSunset : number;
	updateRequiredEntryFields : string;
	updateRequiredMetadataXPaths : string;

    constructor(data? : KalturaDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionProvider' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaDistributionProviderType, subType : 'KalturaDistributionProviderType' },
				name : { type : 's' },
				scheduleUpdateEnabled : { type : 'b' },
				availabilityUpdateEnabled : { type : 'b' },
				deleteInsteadUpdate : { type : 'b' },
				intervalBeforeSunrise : { type : 'n' },
				intervalBeforeSunset : { type : 'n' },
				updateRequiredEntryFields : { type : 's' },
				updateRequiredMetadataXPaths : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionProvider'] = KalturaDistributionProvider;