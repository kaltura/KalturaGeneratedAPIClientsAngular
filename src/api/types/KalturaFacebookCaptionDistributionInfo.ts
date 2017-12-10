
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFacebookCaptionDistributionInfoArgs  extends KalturaObjectBaseArgs {
    language? : string;
	label? : string;
	filePath? : string;
	remoteId? : string;
	version? : string;
	assetId? : string;
}


export class KalturaFacebookCaptionDistributionInfo extends KalturaObjectBase {

    language : string;
	label : string;
	filePath : string;
	remoteId : string;
	version : string;
	assetId : string;

    constructor(data? : KalturaFacebookCaptionDistributionInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFacebookCaptionDistributionInfo' },
				language : { type : 's' },
				label : { type : 's' },
				filePath : { type : 's' },
				remoteId : { type : 's' },
				version : { type : 's' },
				assetId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFacebookCaptionDistributionInfo',KalturaFacebookCaptionDistributionInfo);
